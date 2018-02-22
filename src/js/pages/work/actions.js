import {CALL_API} from '../../client/api';

/*------------------------------------------------------------------------------------------
 * Loads ABOUTME
 *-----------------------------------------------------------------------------------------*/
export const LOAD_WORK_REQUEST = 'LOAD_WORK_REQUEST';
export const LOAD_WORK_SUCCESS = 'LOAD_WORK_SUCCESS';
export const LOAD_WORK_FAILURE = 'LOAD_WORK_FAILURE';

const loadWorkAsync = () => ({
  [CALL_API]: {
    types: [ LOAD_WORK_REQUEST, LOAD_WORK_SUCCESS, LOAD_WORK_FAILURE ],
    endpoint: `work.json`,
    method: 'GET'
  }
});

export const loadWork = () => (dispatch) => {
  return dispatch(loadWorkAsync());
};
