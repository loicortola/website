import * as ActionTypes from '../actions/cv';

import merge from 'lodash.merge';

const profile = (state = {}, action) => {
  
  const {type} = action;
  
  switch (type) {
    
    case ActionTypes.LOAD_METADATA_SUCCESS:
      return merge({}, state, {metadata: action.result});
    
    case ActionTypes.LOAD_ABOUTME_SUCCESS:
      return merge({}, state, {aboutme: {text: action.result}});

    case ActionTypes.LOAD_WORK_SUCCESS:
      return merge({}, state, {work: action.result});

  }
  return state;
};

export default profile;
