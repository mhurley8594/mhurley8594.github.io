import * as types from "./types";

export const addLog = log => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // Make async call to database.
    // Middleware applied in ../store.js.
    // "logs" is the name of the collection in Firebase.
    const firestore = getFirestore();
    firestore
      .collection("logs")
      .add({
        date: log.date,
        food: log.food,
        quantity: log.quantity,
        kcal: log.kcal,
        protein: log.protein,
        carb: log.carb,
        fat: log.fat
      })
      .then(() => {
        dispatch({ type: types.ADD_LOG, log });
      })
      .catch(err => {
        dispatch({ type: types.ADD_LOG_ERROR, err });
      });
  };
};
