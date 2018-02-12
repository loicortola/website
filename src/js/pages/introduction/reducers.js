import * as ActionTypes from './actions';
import merge from 'lodash.merge';
import lodash from 'lodash';

const profile = (state = {}, action) => {
  const {type} = action;
  switch (type) {
    case ActionTypes.LOAD_PROFILE_SUCCESS:
      return merge({}, state, action.data);
    }
  return state;
};


export default profile;
