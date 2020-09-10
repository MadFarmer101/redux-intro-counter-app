const initialState = {
  counter: 0,
  results: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        counter: state.counter + 1,
      };
    case "DECREMENT":
      return {
        ...state,
        counter: state.counter - 1,
      };
    case "ADD_VALUE":
      return {
        ...state,
        counter: state.counter + action.payload.value,
      };
    case "SUBSTRACT_VALUE":
      return {
        ...state,
        counter: state.counter - action.payload.value,
      };
    case "STORE_RESULT":
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: state.counter }),
      };
    case "DELETE_RESULT": 
      return {
        ...state
      }
    default:
      return state;
  }
};

export default rootReducer;
