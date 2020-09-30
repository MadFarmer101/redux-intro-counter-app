import * as actionTypes from "./actionTypes"

export const increment = () => {
  return {
    type: actionTypes.INCREMENT,
  };
};

export const decrement = () => {
  return {
    type: actionTypes.DECREMENT,
  };
};

export const addValue = (value) => {
  return {
    type: actionTypes.ADD_VALUE,
    payload: { value: value },
  };
};

export const substractValue = (value) => {
  return {
    type: actionTypes.SUBSTRACT_VALUE,
    payload: { value: value },
  };
};
