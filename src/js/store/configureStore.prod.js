import {createStore, combineReducers, applyMiddleware} from 'redux';
import rootReducers from '../reducers';
import thunk from 'redux-thunk';
import api from '../client/api';
import {addLocaleData} from 'react-intl';
import en from 'react-intl/locale-data/en';
import fr from 'react-intl/locale-data/fr';
// i18n
addLocaleData([...en, ...fr]);

const reducers = rootReducers;

const configureStore = preloadedState => createStore(
    reducers,
    preloadedState,
    applyMiddleware(thunk, api)
);

export default configureStore;