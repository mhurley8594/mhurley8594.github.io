import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";

// Firebase
import { reduxFirestore, getFirestore } from "redux-firestore";
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
import firebaseConfig from "./config/firebaseConfig";

export default function configureStore(initialState = {}) {
  return createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
      reduxFirestore(firebaseConfig),
      reactReduxFirebase(firebaseConfig)
    )
  );
}
