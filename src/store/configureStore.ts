import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import t9Reducer from "./t9Words/reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import rootSaga from "./rootSaga";

const rootReducer = combineReducers({
  t9Reducer,
});

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

sagaMiddleware.run(rootSaga);
export default store;
