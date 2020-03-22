import ReduxTypes from "./@types";

export const selectRecipes = (state: ReduxTypes) =>
  state.t9Reducer.receivedWords;
export const selectRecipesError = (state: ReduxTypes) => state.t9Reducer.error;
export const selectRecipesLoading = (state: ReduxTypes) =>
  state.t9Reducer.loading;
