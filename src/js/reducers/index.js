import { combineReducers } from 'redux';
// Library Reducers
// FIXME when development is finished for router 4.0 import { routerReducer as routing } from 'react-router-redux';
import { intlReducer as intl } from 'react-intl-redux';
// Own Reducers
import introduction from '../pages/introduction';

const reducers = combineReducers({
  // FIXME when development for router 4.0 is done routing: routing,
  intl: intl,
  [introduction.constants.NAME]: introduction.reducer
});

export default reducers;
