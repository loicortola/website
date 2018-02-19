import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import {IntlProvider} from 'react-intl-redux';
import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles';
import DevTools from './DevTools';
// Page Components
import aboutme from '../pages/aboutme';
import Index from './Index';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});
class Root extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    // NO-OP
  }

  render() {
    return (
        <Provider store={this.props.store}>
          <Router>
            <MuiThemeProvider theme={theme}>
              <IntlProvider>
                <Index>
                  <Switch>
                    <Route path="/aboutme" component={aboutme.components.AboutMePage}/>
                    <Redirect to="/aboutme"/>
                  </Switch>
                  <DevTools/>
                </Index>
              </IntlProvider>
            </MuiThemeProvider>
          </Router>
        </Provider>
    );
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root
