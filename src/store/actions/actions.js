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

export const decrement = () => {
  return {
    type: DECREMENT,
  };
};

export const addValue = () => {
  return {
    type: ADD_VALUE,
    payload: { value: 5 }
  };
};

export const substractValue = () => {
  return {
    type: SUBSTRACT_VALUE,
    payload: { value: 5 }
  };
};

export const storeResult = (result) => {
  return {
    type: STORE_RESULT,
    payload: result
  };
};

export const deleteResult = (id) => {
  return {
    type: DELETE_RESULT,
    payload: id
  };
};
