import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import NavDrawer from './NavDrawer';

const styles = {
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class Nav extends React.Component {
  static propTypes = {
    classes: PropTypes.shape({}.isRequired),
  };

  state = {
    drawerOpen: false,
  };

  render() {
    const { classes } = this.props;
    const { drawerOpen } = this.state;

    return (
      <React.Fragment>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
              onClick={() => this.setState({ drawerOpen: !drawerOpen })}
            >
              <MenuIcon/>
            </IconButton>

            <Typography variant="h6" color="inherit">
              Stardew Valley Fish Tracker
            </Typography>
          </Toolbar>
        </AppBar>

        <NavDrawer open={drawerOpen} close={() => this.setState({ drawerOpen: false })}/>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Nav);