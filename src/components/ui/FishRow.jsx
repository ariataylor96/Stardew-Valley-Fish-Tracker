import React from 'react';
import PropTypes from 'prop-types';
import TableRow from '@material-ui/core/TableRow';

import PriceDisplay from './PriceDisplay';
import { Locations, Seasons, Weather } from '../../data/enums';

class FishRow extends React.Component {
  static propTypes = {
    fish: PropTypes.shape({}).isRequired,
    mkCell: PropTypes.func.isRequired,
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
    const { fish, mkCell, professionMultiplier } = this.props;
    const { renderFriendly } = this;

    return (
      <TableRow>
        {mkCell(fish.name)}
        {mkCell(<PriceDisplay fish={fish} professionMultiplier={professionMultiplier} />)}
        {mkCell(renderFriendly(Locations, fish.location))}
        {mkCell(fish.time.friendlyText)}
        {mkCell(renderFriendly(Seasons, fish.season))}
        {mkCell(renderFriendly(Weather, fish.weather))}
      </TableRow>
    );
  }
}

export default FishRow;