import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";
import { createStore } from "redux";
import { Provider } from 'react-redux';
import { INCREASE, DECREASE, SET_HEIGHT, DELETE_COLUMN, ADD_COLUMN } from "./redux/actions";

const columnHeightLimit = 12;
const defaultHeight = 7;

const initialState = {
  columns: [
    {
      colId: 0,
      height: defaultHeight,
    },
  ],
  label: 'untitled 1',
};

function getBoundedHeight(height) {
  return Math.max(Math.min(height, columnHeightLimit), 0);

}

function updateColumn(array, action) {
  return array.map(item => {
    if (item.colId !== action.colId) {
      return item;
    }

    let newHeight = action.type === INCREASE ? item.height + 1 : item.height - 1;
    if (action.type === SET_HEIGHT) { newHeight = action.newHeight };

    return {
      ...item,
      ...{
        colId: item.colId,
        height: getBoundedHeight(newHeight),
      }
    };
  })
}

function addItem(array, action) {
  let newArray = array.slice();
  newArray.push({ colId: Math.max(0, ...array.map(e => e.colId)) + 1, height: defaultHeight });
  return newArray;
}

function removeItem(array, action) {
  let newArray = array.filter(col => action.colId !== col.colId);
  return newArray;
}

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE:
    case DECREASE:
    case SET_HEIGHT:
      return {
        ...state,
        columns: updateColumn(state.columns, action),
      };
    case DELETE_COLUMN:
      return {
        ...state,
        columns: removeItem(state.columns, action)
      };
    case ADD_COLUMN:
      return {
        ...state,
        columns: addItem(state.columns, action)
      };
    default:
      return state;
  }
};

const store = createStore(
  myReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
document.getElementById("root"));

registerServiceWorker();
