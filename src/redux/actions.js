export const INCREASE = 'INCREASE';
export const DECREASE = 'DECREASE';
export const SET_HEIGHT = 'SET_HEIGHT';
export const ADD_COLUMN = 'ADD_COLUMN';
export const DELETE_COLUMN = 'DELETE_COLUMN';


export function addColumn() {
  return { type: ADD_COLUMN };
}

export function deleteColumn(colId) {
  return { type: DELETE_COLUMN, colId };
}

export function setHeight(newHeight, colId) {
  return {type: SET_HEIGHT, newHeight, colId};
}

export function lower(colId) {
  return { type: DECREASE, colId };
}

export function higher(colId) {
  return { type: INCREASE, colId };
}
