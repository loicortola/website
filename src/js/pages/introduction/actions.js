import {CALL_API} from '../../client/api';

/*------------------------------------------------------------------------------------------
 * Loads profile
 *-----------------------------------------------------------------------------------------*/
export const LOAD_PROFILE_REQUEST = 'LOAD_PROFILE_REQUEST';
export const LOAD_PROFILE_SUCCESS = 'LOAD_PROFILE_SUCCESS';
export const LOAD_PROFILE_FAILURE = 'LOAD_PROFILE_FAILURE';
const loadProfileAsync = () => ({
  [CALL_API]: {
    types: [ LOAD_PROFILE_REQUEST, LOAD_PROFILE_SUCCESS, LOAD_PROFILE_FAILURE ],
    endpoint: `adventure/dashboard?candidate=${userId}&adventure=${adventureId}`,
    method: 'GET'
  }
});

export const loadProfile = () => (dispatch) => {
  return dispatch(loadProfileAsync());
};
