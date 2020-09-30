import * as actionTypes from "./actionTypes" 

export const saveResult = (result) => {
  // const updatedRes = result * 4
  return {
    type: actionTypes.STORE_RESULT,
    payload: result,
  };
};

export const storeResult = (result) => {
  return (dispatch, getState) => {
    setTimeout(() => {
      const oldState = getState().counter.counter
      console.log(['Old State'], oldState)
      dispatch(saveResult(result));
    }, 2000);
  };
};

export const deleteResult = (id) => {
  return {
    type: actionTypes.DELETE_RESULT,
    payload: id,
  };
};
