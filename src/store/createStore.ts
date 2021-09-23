import { compose, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "../reducers";
import createSagaMiddleware from "redux-saga";
import root from "../sagas/sagas";
import { createLogger } from "redux-logger";

let createdStore;

const logger = createLogger();

const sagas = createSagaMiddleware();

let middleware = [sagas];

if (__DEV__) {
  middleware.push(logger);
  createdStore = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
  );
  sagas.run(root);
} else {
  createdStore = createStore(reducer, compose(applyMiddleware(...middleware)));
  sagas.run(root);
}
export default createdStore;
