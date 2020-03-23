import ReduxTypes from "./@types";

export const selectReceivedWords = (state: ReduxTypes) =>
  state.t9Reducer.receivedWords;
export const selectError = (state: ReduxTypes) => state.t9Reducer.error;
export const selectLoading = (state: ReduxTypes) => state.t9Reducer.loading;
export const selectNumbersPressed = (state: ReduxTypes) =>
  state.t9Reducer.numbersPressed;
