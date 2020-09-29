import * as actionTypes from '../actions/actions'

const initialState = {
  results: [],
};

const resultsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: action.payload }),
      };
    case actionTypes.DELETE_RESULT:
      const updatedResultsArray = state.results.filter(
        (result) => result.id !== action.payload
      );
      return {
        ...state,
        results: updatedResultsArray,
      };
    default:
      return state;
  }
};

export default resultsReducer;