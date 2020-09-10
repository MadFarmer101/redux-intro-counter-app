import React from "react";
import { connect } from "react-redux";
import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";
import * as actionTypes from "../../store/actions"

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
          <li key={result.id} onClick={() => props.onDeleteResult(result.id)}>
            {result.value}
          </li>
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
    increment: () => dispatch({ type: actionTypes.INCREMENT }),
    decrement: () => dispatch({ type: actionTypes.DECREMENT }),
    addValue: () => dispatch({ type: actionTypes.ADD_VALUE, payload: { value: 5 } }),
    substractValue: () =>
      dispatch({ type: actionTypes.SUBSTRACT_VALUE, payload: { value: 5 } }),
    onStoreResult: () => dispatch({ type: actionTypes.STORE_RESULT }),
    onDeleteResult: (id) => dispatch({ type: actionTypes.DELETE_RESULT, payload: id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
