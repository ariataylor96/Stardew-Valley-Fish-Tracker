import React from 'react';
import PropTypes from 'prop-types';
import TableRow from '@material-ui/core/TableRow';

import PriceDisplay from './PriceDisplay';
import Cell from './Cell';

import { Locations, Seasons, Weather } from '../../data/enums';

class FishRow extends React.Component {
  static propTypes = {
    fish: PropTypes.shape({}).isRequired,
    professionMultiplier: PropTypes.number.isRequired,
  };

  renderFriendly = (obj, val) => {
    if (Array.isArray(val)) {
      return val.map((ival, idx) => (
        <React.Fragment key={idx}>
          {this.renderFriendly(obj, ival)}
          <br/>
        </React.Fragment>
      ));
    }

    return obj.FRIENDLY_AS_OBJ[val];
  };

  render() {
    const { fish, professionMultiplier } = this.props;
    const { renderFriendly } = this;

    return (
      <TableRow>
        <Cell>{fish.name}</Cell>
        <Cell>
          <PriceDisplay fish={fish} professionMultiplier={professionMultiplier} />
        </Cell>
        <Cell>{renderFriendly(Locations, fish.location)}</Cell>
        <Cell>{fish.time.friendlyText}</Cell>
        <Cell>{renderFriendly(Seasons, fish.season)}</Cell>
        <Cell>{renderFriendly(Weather, fish.weather)}</Cell>
      </TableRow>
    );
  }
}

export default FishRow;
