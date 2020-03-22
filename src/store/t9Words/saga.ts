import { put, takeLatest } from "redux-saga/effects";
import { T9Actions } from "./actions";
import { endpoint } from "../../constants";

function* getT9WordsAsync(action) {
  try {
    const words = yield fetch(
      `${endpoint}/?numbersPressed=${action.payload}`,
      {}
    ).then((res) => res.json());
    yield put({
      type: T9Actions.GET_T9_WORDS_SUCCESS,
      payload: words,
    });
  } catch (err) {
    console.error(err);
    yield put({ type: T9Actions.GET_T9_WORDS_FAILURE });
  }
}

export function* watchGetT9WordsAsync() {
  yield takeLatest(T9Actions.GET_T9_WORDS, getT9WordsAsync);
}
