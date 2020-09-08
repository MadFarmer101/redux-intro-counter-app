const initialState = {
  counter: 0,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        counter: state.counter + 1,
      };
      break;
    case "DECREMENT":
      return {
        counter: state.counter - 1,
      };
      break;
    case "ADD_VALUE":
      return {
        counter: state.counter + action.payload.value,
      };
      break;
    case "SUBSTRACT_VALUE":
      return {
        counter: state.counter - action.payload.value,
      };
      break;
    default:
      return state;
      break;
  }
};

export default rootReducer;
