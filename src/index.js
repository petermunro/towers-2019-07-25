import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import {
  INCREASE,
  DECREASE,
  SET_HEIGHT,
  DELETE_COLUMN,
  ADD_COLUMN,
} from "./redux/actions";
import timingMiddleware from "./redux/timingMiddleware";
import dispatchAFunction from "./redux/dispatchAFunction";
import { reducer, columnHeightLimit, defaultHeight } from "./redux/reducer";

const middleware = [dispatchAFunction, timingMiddleware];

const composeEnhancers =
  (window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
const enhancer = composeEnhancers(applyMiddleware(...middleware));

const store = createStore(reducer, enhancer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
