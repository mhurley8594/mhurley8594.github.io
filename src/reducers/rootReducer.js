// Combines all reducers to create the application state.
import { combineReducers } from "redux";
import logReducer from "./logReducer";
import authReducer from "./authReducer";
// Firebase
import { firestoreReducer } from "redux-firestore";

const rootReducer = combineReducers({
  auth: authReducer,
  log: logReducer,
  firestore: firestoreReducer
});

export default rootReducer;
