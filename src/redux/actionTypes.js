export const INCREASE = "INCREASE";
export const DECREASE = "DECREASE";
export const SET_HEIGHT = "SET_HEIGHT";

export function raise() {
  return {
    type: INCREASE
  };
}
export function lower() {
  return {
    type: DECREASE
  };
}
export function setHeight(newHeight) {
  return {
    type: SET_HEIGHT,
    newHeight
  };
}
