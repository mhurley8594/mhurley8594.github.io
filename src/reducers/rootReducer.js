// Combines all reducers to create the application state.

import { combineReducers } from 'redux';
import logReducer from './logReducer';

export default combineReducers({
    logs: logReducer
});