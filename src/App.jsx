import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createMuiTheme } from '@material-ui/core/styles';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import CssBaseline from '@material-ui/core/CssBaseline';

import Nav from './components/ui/Nav';
import Dashboard from './components/pages/Dashboard';
import Urls from './Urls';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
  typography: {
    useNextVariants: true,
  },
});

const App = () => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />

    <Router>
      <Nav />

      <Switch>
        <Route exact path={Urls.dashboard} component={Dashboard} />
      </Switch>
    </Router>
  </MuiThemeProvider>
);

export default App;