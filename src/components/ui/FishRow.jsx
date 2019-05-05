import React from 'react';
import PropTypes from 'prop-types';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';

import { Locations, Seasons, Weather } from '../../data/enums';

class FishRow extends React.Component {
  static propTypes = {
    fish: PropTypes.shape({}).isRequired,
    mkCell: PropTypes.func.isRequired,
  };

  renderFriendly = (obj, val) => {
    if (Array.isArray(val)) {
      return val.map((ival, idx) => (
        <Typography key={idx}>
          {this.renderFriendly(obj, ival)}
        </Typography>
      ));
    }

    return obj.FRIENDLY_AS_OBJ[val];
  };

  render() {
    const { fish, mkCell } = this.props;
    const { renderFriendly } = this;

    return (
      <TableRow>
        {mkCell(fish.name)}
        {mkCell(fish.price.base)}
        {mkCell(renderFriendly(Locations, fish.location))}
        {mkCell(fish.time.friendlyText)}
        {mkCell(renderFriendly(Seasons, fish.season))}
        {mkCell(renderFriendly(Weather, fish.weather))}
      </TableRow>
    );
  }
}

export default FishRow;