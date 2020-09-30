import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  results: [],
};

const deleteResult = (state, action) => {
  const updatedResultsArray = state.results.filter(
    (result) => result.id !== action.payload
  );
  return updateObject(state, { results: updatedResultsArray });
};

const resultsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return updateObject(state, {
        results: state.results.concat({
          id: new Date(),
          value: action.payload * 3,
        }),
      });
    case actionTypes.DELETE_RESULT:
      return deleteResult(state, action);
    default:
      return state;
  }
};

export default resultsReducer;
