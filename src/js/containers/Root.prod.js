import React, {Component, PropTypes} from 'react';
import {Provider} from 'react-redux';
import {IntlProvider} from 'react-intl-redux';
import {Redirect, Switch, Route, BrowserRouter as Router} from 'react-router-dom';

// Page Components
import Index from '../containers/Index';
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
          </div>
        </IntlProvider>
      </Router>
    </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
