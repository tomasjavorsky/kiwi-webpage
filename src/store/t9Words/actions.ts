export enum T9Actions {
  GET_T9_WORDS = "cookbook/GET_T9_WORDS",
  GET_T9_WORDS_SUCCESS = "cookbook/GET_T9_WORDS_SUCCESS",
  GET_T9_WORDS_FAILURE = "cookbook/GET_T9_WORDS_FAILURE",
}

export const getRecipes = (numbersPressed: string) => ({
  type: T9Actions.GET_T9_WORDS,
  payload: numbersPressed,
});
