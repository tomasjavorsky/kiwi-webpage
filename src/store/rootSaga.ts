import { watchGetT9WordsAsync } from "./t9Words/saga";
import { all } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([watchGetT9WordsAsync()]);
}
