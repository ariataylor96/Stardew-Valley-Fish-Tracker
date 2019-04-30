import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Urls from '../../Urls';

const NavDrawer = ({ open, close }) => (
  <Drawer open={open} onClose={close}>
    <div role="button" onClick={close}>
      <List>
        <Link underline="none" component={RouterLink} to={Urls.dashboard}>
          <ListItem>
            <ListItemText primary="Home" />
          </ListItem>
        </Link>

        <Link underline="none" component={RouterLink} to={Urls.nightMarket}>
          <ListItem>
            <ListItemText primary="Night Market" />
          </ListItem>
        </Link>

        <Link underline="none" component={RouterLink} to={Urls.legendary}>
          <ListItem>
            <ListItemText primary="Legendary Fish" />
          </ListItem>
        </Link>

        <Link underline="none" component={RouterLink} to={Urls.crabPot}>
          <ListItem>
            <ListItemText primary="Crab Pot Fish" />
          </ListItem>
        </Link>
      </List>
    </div>
  </Drawer>
);

NavDrawer.propTypes = {
  open: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
};

export default NavDrawer;