import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import createLogger from 'redux-logger';
import rootReducer from '../reducers';
import DevTools from '../containers/DevTools';
import thunk from 'redux-thunk';
import api from '../client/api';
import {addLocaleData} from 'react-intl';
import en from 'react-intl/locale-data/en';
import fr from 'react-intl/locale-data/fr';
// i18n
addLocaleData([...en, ...fr]);


const configureStore = preloadedState => {
  const reducers = rootReducer;
  const store = createStore(
      reducers,
      preloadedState,
      compose(
          applyMiddleware(thunk, api, createLogger()),
          DevTools.instrument()
      )
  );

  
  
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default;
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
};

export default configureStore;