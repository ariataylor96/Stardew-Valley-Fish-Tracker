import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';

import FishTable from '../ui/FishTable';
import fishData from '../../data';
import Spacer from '../ui/Spacer';

import { Locations, Seasons, Weather } from '../../data/enums';


const styles = theme => ({
  root: {
    maxWidth: 1366,
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: theme.spacing.unit * 4,

    [theme.breakpoints.down('sm')]: {
      maxWidth: '100%',
      padding: theme.spacing.unit * 2,
    },
  },
  controlFlow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },

    '& > *': {
      marginRight: theme.spacing.unit * 2,

      [theme.breakpoints.down('sm')]: {
        marginRight: 0,
        marginBottom: theme.spacing.unit,
      },
    },
  },
});

class Dashboard extends React.Component {
  static propTypes = {
    classes: PropTypes.shape({}).isRequired,
  };

  state = {
    fisher: false,
    angler: false,
    location: Locations.ANY,
    weather: Weather.ANY,
    season: Seasons.ANY,
    name: '',
    descendingSortOrder: true,
  };

  setFisher = fisher => this.setState({ fisher, angler: false });
  setAngler = angler => this.setState({ angler, fisher: false });

  renderCheckbox = (checked, mutator, label) => (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          onChange={e => mutator(e.target.checked)}
          value={label}
        />
      }
      label={label}
    />
  );

  onChange = key => value => this.setState({ [key]: value });

  renderControls = () => {
    const { classes } = this.props;
    const {
      fisher,
      angler,
      location,
      weather,
      season,
    } = this.state;

    const dropdowns = [
      {
        obj: Locations,
        onChange: this.onChange('location'),
        label: 'Location',
        value: location,
      },
      {
        obj: Seasons,
        onChange: this.onChange('season'),
        label: 'Season',
        value: season,
      },
      {
        obj: Weather,
        onChange: this.onChange('weather'),
        label: 'Weather',
        value: weather,
      },
    ];

    return (
      <div className={classes.controlFlow}>
        {this.renderCheckbox(fisher, this.setFisher, "Fisher Profession")}
        {this.renderCheckbox(angler, this.setAngler, "Angler Profession")}

        {dropdowns.map(({ obj, ...props }, key) => obj.toDropdown({ ...props, key }))}
      </div>
    );
  };

  renderSearch = () => {
    const { name } = this.state;
    
    return (
      <TextField 
        variant="outlined"
        placeholder="Search by Fish Name"
        value={name}
        onChange={e => this.setState({name: e.target.value})}
        fullWidth
      />
    );
  };

  toggleSortOrder = () => this.setState({descendingSortOrder: !this.state.descendingSortOrder});

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Typography variant="h4" align="center">
          Stardew Valley Fish Tracker
        </Typography>

        <Spacer v={8} />

        <Typography variant="subtitle1" align="center">
          Find the right fish for your day
        </Typography>

        <Spacer v={32} />

        {this.renderControls()}

        <Spacer v={32} />

        {this.renderSearch()}

        <Spacer v={32} />

        <FishTable fish={fishData} {...this.state} toggleSortOrder={this.toggleSortOrder} />
      </div>
    );
  }
}

export default withStyles(styles)(Dashboard);
