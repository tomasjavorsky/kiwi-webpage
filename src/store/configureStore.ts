import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import rootSaga from "./rootSaga";
import t9Reducer from "./t9Words/reducer"

export const rootReducer = combineReducers({
  t9Reducer,
});

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
export const storeWithoutMiddlewares = createStore(rootReducer)
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

sagaMiddleware.run(rootSaga);
export default store;
