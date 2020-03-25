export enum T9Actions {
  GET_T9_WORDS = "t9Words/GET_T9_WORDS",
  GET_T9_WORDS_SUCCESS = "t9Words/GET_T9_WORDS_SUCCESS",
  GET_T9_WORDS_FAILURE = "t9Words/GET_T9_WORDS_FAILURE",
  SET_NUMBER_PRESSED = "t9Words/SET_NUMBER_PRESSED",
  CLEAR_NUMBER_PRESSED = "t9Words/CLEAR_NUMBER_PRESSED"
}

export const getWords = (numbersPressed: number[], offset: number) => ({
  type: T9Actions.GET_T9_WORDS,
  payload: { numbers: numbersPressed, offset: offset }
});

export const setNumberPressed = (numberPressed: number) => ({
  type: T9Actions.SET_NUMBER_PRESSED,
  payload: numberPressed
});

export const clearNumberPressed = () => ({
  type: T9Actions.CLEAR_NUMBER_PRESSED
});
