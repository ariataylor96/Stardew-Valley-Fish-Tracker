import React from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import FishRow from './FishRow';

import { Locations, Seasons, Weather } from '../../data/enums';

class FishTable extends React.Component {
  static propTypes = {
    fish: PropTypes.arrayOf(PropTypes.object).isRequired,
    fisher: PropTypes.bool,
    angler: PropTypes.bool,
    location: PropTypes.string,
    season: PropTypes.string,
    weather: PropTypes.string,
  };

  static defaultProps = {
    location: Locations.ANY,
    season: Seasons.ANY,
    weather: Weather.ANY,
  };

  filterWithEnum = enumerator => (selected, test) => enumerator.matches(selected, test);

  filterWithName = (selected, test) => test.toLowerCase().includes(selected.toLowerCase());

  get allFilters() {
    return [
      [this.filterWithName, 'name'],
      [this.filterWithEnum(Locations), 'location'],
      [this.filterWithEnum(Seasons), 'season'],
      [this.filterWithEnum(Weather), 'weather'],
    ];
  }

  get filteredData() {
    const { fish } = this.props;
    let data = fish.slice();

    // For every filter, check if it matches the supplied key in sequence
    for (const [filter, key] of this.allFilters) {
      data = data.filter(fish => filter(this.props[key], fish[key]));
    }

    return data.sort((a, b) => b.price.base - a.price.base);
  }

  mkCell = (data, right) => (
    <TableCell align={right? 'right' : 'inherit'}>
      {data}
    </TableCell>
  );

  render() {
    const { filteredData: fishCollection, mkCell } = this;

    return (
      <Table>
        <TableHead>
          <TableRow>
            {mkCell('Name')}
            {mkCell('Prices')}
            {mkCell('Location')}
            {mkCell('Time')}
            {mkCell('Season')}
            {mkCell('Weather')}
          </TableRow>
        </TableHead>

        <TableBody>
          {fishCollection.map((fish, idx) => (
            <FishRow fish={fish} key={idx} mkCell={mkCell}/>
          ))}
        </TableBody>
      </Table>
    );
  }
}

export default FishTable;