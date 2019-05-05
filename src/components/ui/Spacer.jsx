import React from 'react';
import PropTypes from 'prop-types';
import Hidden from '@material-ui/core/Hidden';

const Spacer = ({
  h: horizontal,
  v: vertical,
  ...hiddenProps
}) => (
  <Hidden {...hiddenProps}>
    <div style={{height: vertical, width: horizontal}}/>
  </Hidden>
);

Spacer.propTypes = {
  h: PropTypes.number,
  v: PropTypes.number,
};

Spacer.defaultProps = {
  h: 0,
  v: 0,
};

export default Spacer;