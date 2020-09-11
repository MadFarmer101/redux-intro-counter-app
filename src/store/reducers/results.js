import * as actionTypes from '../actions'

const initialState = {
  results: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: state.counter }),
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

export default rootReducer;