import { T9Actions } from "./actions";
import { t9Reducer } from "../@types";

const initialState: t9Reducer = {
  receivedWords: undefined,
  error: false,
  loading: false,
};

const t9Reducer = (state = initialState, action) => {
  switch (action.type) {
    case T9Actions.GET_T9_WORDS:
      return { ...state, loading: true };
    case T9Actions.GET_T9_WORDS_SUCCESS:
      return { ...state, wordsReceived: action.payload, loading: false };
    case T9Actions.GET_T9_WORDS_FAILURE:
      return { ...state, loading: false, error: true };

    default:
      return state;
  }
};

export default t9Reducer;
