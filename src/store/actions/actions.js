export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const ADD_VALUE = "ADD_VALUE";
export const SUBSTRACT_VALUE = "SUBSTRACT_VALUE";
export const STORE_RESULT = "STORE_RESULT";
export const DELETE_RESULT = "DELETE_RESULT";

export const increment = () => {
  return {
    type: INCREMENT,
  };
};
