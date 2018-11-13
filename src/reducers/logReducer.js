import * as types from "../actions/types";

const initialState = {};

const logReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_LOG:
      console.log("add log");
      return state;

    case types.ADD_LOG_ERROR:
      console.log("add log error");
      return state;

    default:
      return state;
  }
};

export default logReducer;
