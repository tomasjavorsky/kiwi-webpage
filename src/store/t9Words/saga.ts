import { put, takeLatest } from "redux-saga/effects";
import { T9Actions } from "./actions";
import { endpoint } from "../../constants";

function* getT9WordsAsync(action) {
  try {
    const numbers = yield action.payload.join("");
    const words = yield fetch(`${endpoint}/?pressed_numbers=${numbers}`)
      .then(res => res.json())
    console.log(words)
    yield put({
      type: T9Actions.GET_T9_WORDS_SUCCESS,
      payload: words
    });
  } catch (err) {
    yield put({ type: T9Actions.GET_T9_WORDS_FAILURE });
  }
}

export function* watchGetT9WordsAsync() {
  yield takeLatest(T9Actions.GET_T9_WORDS, getT9WordsAsync);
}
