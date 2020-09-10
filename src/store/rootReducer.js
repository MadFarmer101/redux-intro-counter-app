import * as actionTypes from './actions'

const initialState = {
  counter: 0,
  results: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case actionTypes.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case actionTypes.ADD_VALUE:
      return {
        ...state,
        counter: state.counter + action.payload.value,
      };
    case actionTypes.SUBSTRACT_VALUE:
      return {
        ...state,
        counter: state.counter - action.payload.value,
      };
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
