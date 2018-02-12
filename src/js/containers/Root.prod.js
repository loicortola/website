import React, {Component, PropTypes} from 'react';
import {Provider} from 'react-redux';
import {IntlProvider} from 'react-intl-redux';
import routes from '../routes';
import {Router} from 'react-router';

const Root = ({store, history}) => (
    <Provider store={store}>
      <IntlProvider>
        <Router history={history} routes={routes}/>
      </IntlProvider>
    </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default Root;