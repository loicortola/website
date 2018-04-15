import {CALL_API} from '../client/api';


/*------------------------------------------------------------------------------------------
 * Loads METADATA
 *-----------------------------------------------------------------------------------------*/
export const LOAD_METADATA_REQUEST = 'LOAD_METADATA_REQUEST';
export const LOAD_METADATA_SUCCESS = 'LOAD_METADATA_SUCCESS';
export const LOAD_METADATA_FAILURE = 'LOAD_METADATA_FAILURE';
const loadMetadataAsync = () => ({
  [CALL_API]: {
    types: [ LOAD_METADATA_REQUEST, LOAD_METADATA_SUCCESS, LOAD_METADATA_FAILURE ],
    endpoint: `metadata.json`,
    method: 'GET'
  }
});

export const loadMetadata = () => (dispatch) => {
  return dispatch(loadMetadataAsync());
};


/*------------------------------------------------------------------------------------------
 * Loads ABOUTME
 *-----------------------------------------------------------------------------------------*/
export const LOAD_ABOUTME_REQUEST = 'LOAD_ABOUTME_REQUEST';
export const LOAD_ABOUTME_SUCCESS = 'LOAD_ABOUTME_SUCCESS';
export const LOAD_ABOUTME_FAILURE = 'LOAD_ABOUTME_FAILURE';

const loadAboutMeAsync = () => ({
  [CALL_API]: {
    types: [ LOAD_ABOUTME_REQUEST, LOAD_ABOUTME_SUCCESS, LOAD_ABOUTME_FAILURE ],
    endpoint: `aboutme.md`,
    method: 'GET'
  }
});

export const loadAboutMe = () => (dispatch) => {
  return dispatch(loadAboutMeAsync());
};


/*------------------------------------------------------------------------------------------
 * Loads WORK
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

/*------------------------------------------------------------------------------------------
 * Loads PROJECTS
 *-----------------------------------------------------------------------------------------*/
export const LOAD_PROJECTS_REQUEST = 'LOAD_PROJECTS_REQUEST';
export const LOAD_PROJECTS_SUCCESS = 'LOAD_PROJECTS_SUCCESS';
export const LOAD_PROJECTS_FAILURE = 'LOAD_PROJECTS_FAILURE';

const loadProjectsAsync = () => ({
  [CALL_API]: {
    types: [ LOAD_PROJECTS_REQUEST, LOAD_PROJECTS_SUCCESS, LOAD_PROJECTS_FAILURE ],
    endpoint: `projects.json`,
    method: 'GET'
  }
});

export const loadProjects = () => (dispatch) => {
  return dispatch(loadProjectsAsync());
};
