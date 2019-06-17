import React from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import FishRow from './FishRow';
import Cell from './Cell';

import { Locations, Seasons, Weather } from '../../data/enums';

class FishTable extends React.Component {
  static propTypes = {
    fish: PropTypes.arrayOf(PropTypes.object).isRequired,
    toggleSortOrder: PropTypes.func.isRequired,
    fisher: PropTypes.bool.isRequired,
    angler: PropTypes.bool.isRequired,
    location: PropTypes.string,
    season: PropTypes.string,
    weather: PropTypes.string,
    name: PropTypes.string,
    descendingSortOrder: PropTypes.bool,
  };

  static defaultProps = {
    location: Locations.ANY,
    season: Seasons.ANY,
    weather: Weather.ANY,
    name: '',
    descendingSortOrder: true,
  };

  filterWithEnum = enumerator => (selected, test) => enumerator.matches(selected, test);

  filterWithName = (selected, test) => test.toLowerCase().includes(selected.toLowerCase());

  get professionMultiplier() {
    const { fisher, angler } = this.props;

    if (fisher) {
      return 1.25;
    } else if (angler) {
      return 1.5;
    }
    return 1;
  }

  get allFilters() {
    return [
      [this.filterWithName, 'name'],
      [this.filterWithEnum(Locations), 'location'],
      [this.filterWithEnum(Seasons), 'season'],
      [this.filterWithEnum(Weather), 'weather'],
    ];
  }

  get filteredData() {
    const { fish, descendingSortOrder } = this.props;
    const sortFn = (a, b) => a.price.base - b.price.base;
    let data = fish.slice();

    // For every filter, check if it matches the supplied key in sequence
    for (const [filter, key] of this.allFilters) {
      data = data.filter(fish => filter(this.props[key], fish[key]));
    }

    return data.sort((a, b) => descendingSortOrder ? sortFn(b, a) : sortFn(a, b));
  }

  render() {
    const { toggleSortOrder } = this.props;
    const { filteredData: fishCollection, professionMultiplier } = this;

    return (
      <Table>
        <TableHead>
          <TableRow>
            <Cell>Name</Cell>
            <Cell onClick={toggleSortOrder}>Prices</Cell>
            <Cell>Location</Cell>
            <Cell>Time</Cell>
            <Cell>Season</Cell>
            <Cell>Weather</Cell>
          </TableRow>
        </TableHead>

        <TableBody>
          {fishCollection.map((fish, idx) => (
            <FishRow fish={fish} key={idx} professionMultiplier={professionMultiplier} />
          ))}
        </TableBody>
      </Table>
    );
  }
}

export default FishTable;
