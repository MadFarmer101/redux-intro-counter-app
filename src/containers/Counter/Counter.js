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
      <hr />
      <button onClick={props.onStoreResult}>Store Result</button>
      <ul>
        {props.results.map((result) => (
          <li key={result.id} onClick={props.onDeleteResult}>{result.value}</li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cntr: state.counter,
    results: state.results,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: "INCREMENT" }),
    decrement: () => dispatch({ type: "DECREMENT" }),
    addValue: () => dispatch({ type: "ADD_VALUE", payload: { value: 5 } }),
    substractValue: () =>
      dispatch({ type: "SUBSTRACT_VALUE", payload: { value: 5 } }),
    onStoreResult: () => dispatch({ type: "STORE_RESULT" }),
    onDeleteResult: () => dispatch({ type: "DELETE_RESULT"})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
