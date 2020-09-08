import React from "react";
import { connect } from "react-redux";
import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";

const Counter = (props) => {
  return (
    <div>
      <CounterOutput value={props.cntr} />
      <CounterControl label="Increment" clicked={props.increment} />
      <CounterControl label="Decrement" clicked={props.decrement} />
      <CounterControl label="Add 5" clicked={props.addValue} />
      <CounterControl label="Subtract 5" clicked={props.substractValue} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cntr: state.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: "INCREMENT" }),
    decrement: () => dispatch({ type: "DECREMENT" }),
    addValue: () => dispatch({ type: "ADD_VALUE", payload: { value: 5 } }),
    substractValue: () =>
      dispatch({ type: "SUBSTRACT_VALUE", payload: { value: 5 } }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
