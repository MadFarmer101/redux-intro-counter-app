import * as actionsTypes from "./actionsTypes" 

export const saveResult = (result) => {
  return {
    type: actionsTypes.STORE_RESULT,
    payload: result,
  };
};

export const storeResult = (result) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(saveResult(result));
    }, 2000);
  };
};

export const deleteResult = (id) => {
  return {
    type: actionsTypes.DELETE_RESULT,
    payload: id,
  };
};
