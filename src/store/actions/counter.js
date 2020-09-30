import * as actionsTypes from "./actionsTypes"

export const increment = () => {
  return {
    type: actionsTypes.INCREMENT,
  };
};

export const decrement = () => {
  return {
    type: actionsTypes.DECREMENT,
  };
};

export const addValue = (value) => {
  return {
    type: actionsTypes.ADD_VALUE,
    payload: { value: value },
  };
};

export const substractValue = (value) => {
  return {
    type: actionsTypes.SUBSTRACT_VALUE,
    payload: { value: value },
  };
};
