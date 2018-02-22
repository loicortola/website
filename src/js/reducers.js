import { combineReducers } from 'redux';
// Library Reducers
import { routerReducer } from 'react-router-redux';
// Own Reducers
import aboutme from './pages/aboutme';
import metadata from './partials';
import work from './pages/work';

// i18n
import { intlReducer as intl } from 'react-intl-redux';

const reducers = combineReducers({
  intl: intl,
  router: routerReducer,
  [aboutme.constants.NAME]: aboutme.reducer,
  [metadata.constants.NAME]: metadata.reducer,
  [work.constants.NAME]: work.reducer
});

export default reducers;
