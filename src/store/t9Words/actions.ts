export enum T9Actions {
  GET_T9_WORDS = "t9Words/GET_T9_WORDS",
  GET_T9_WORDS_SUCCESS = "t9Words/GET_T9_WORDS_SUCCESS",
  GET_T9_WORDS_FAILURE = "t9Words/GET_T9_WORDS_FAILURE",
  SET_NUMBER_PRESSED = "t9Words/SET_NUMBER_PRESSED",
}

export const getRecipes = (numbersPressed: string) => ({
  type: T9Actions.GET_T9_WORDS,
  payload: numbersPressed,
});

export const setNumberPressed = (numberPressed: number) => ({
  type: T9Actions.SET_NUMBER_PRESSED,
  payload: numberPressed,
});
