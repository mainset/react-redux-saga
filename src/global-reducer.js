import { combineReducers } from 'redux';

import exampleReducer from './pages/Example/reducer';

const createGlobalReducer = () => (
  combineReducers({
    example: exampleReducer,
    // NOTE: put other app reducers here
  })
);

export default createGlobalReducer;
