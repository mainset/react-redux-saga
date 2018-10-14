import { combineReducers } from 'redux';

const createGlobalReducer = () => (
  combineReducers({
    // NOTE: put other app reducers here
  })
);

export default createGlobalReducer;
