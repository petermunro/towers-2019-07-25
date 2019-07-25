import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";
import { createStore } from "redux";
import {
  INCREASE,
  DECREASE,
  SET_HEIGHT,
  raise,
  lower,
  setHeight
} from "./redux/actionTypes";
import { Provider, connect } from "react-redux";

const columnHeightLimit = 12;

const initialState = [7];

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE:
      return [Math.min(state[0] + 1, columnHeightLimit)];
    case DECREASE:
      return [Math.max(state[0] - 1, 0)];
    case SET_HEIGHT:
      return [action.newHeight];
    default:
      return state;
  }
};

const store = createStore(
  myReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const mapStateToProps = state => ({
  height: state[0]
});

const mapDispatchToProps = dispatch => ({
  raiseIt: () => dispatch(raise()),
  lowerIt: () => dispatch(lower()),
  setHeight: newHeight => dispatch(setHeight(newHeight))
});

let AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
