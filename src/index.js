import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { createStore } from 'redux';
import { INCREASE, DECREASE } from './redux/actionTypes';

const columnHeightLimit = 12;

const initialState = [7];

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE:
      return [Math.min(state[0] + 1, columnHeightLimit)];
    case DECREASE:
      return [Math.max(state[0] - 1, 0)];
    default:
      return state;
  }
}

const store = createStore(myReducer);

store.subscribe(
  () => {
    ReactDOM.render(<App store={store} />, document.getElementById('root'));
  }
);
ReactDOM.render(<App store={store} />, document.getElementById('root'));

registerServiceWorker();
