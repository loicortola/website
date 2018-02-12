import React from 'react';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';
import {Redirect, Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import {IntlProvider} from 'react-intl-redux';
import DevTools from './DevTools';
// Page Components
import introduction from '../pages/introduction';

const Root = ({store}) => (
  <Provider store={store}>
      <Router>
        <IntlProvider>
          <div>
            <Switch>
              <Redirect path="*" to="/introduction" />
              <Route path="/introduction" component={introduction.components.IntroductionPage} />
            </Switch>
            <DevTools />
          </div>
        </IntlProvider>

      </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root
