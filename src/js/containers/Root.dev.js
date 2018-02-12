import React, {PropTypes} from 'react';
import {Provider} from 'react-redux';
import {IntlProvider} from 'react-intl-redux';
import routes from '../routes';
import DevTools from './DevTools';
import {Router} from 'react-router';

const Root = ({store, history}) => (
    <Provider store={store}>
      <IntlProvider>
        <div>
          <Router history={history} routes={routes}/>
          <DevTools />
        </div>
      </IntlProvider>
    </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default Root