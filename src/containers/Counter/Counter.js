import React from "react";
import { connect } from "react-redux";
import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";
import { increment } from "../../store/actions/actions"

const Counter = (props) => {
  return (
    <div>
      <CounterOutput value={props.cntr} />
      <CounterControl label="Increment" clicked={props.increment} />
      <CounterControl label="Decrement" clicked={props.decrement} />
      <CounterControl label="Add 5" clicked={props.addValue} />
      <CounterControl label="Subtract 5" clicked={props.substractValue} />
      <hr />
      <button onClick={() => props.onStoreResult(props.cntr)}>Store Result</button>
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
    cntr: state.counter.counter,
    results: state.results.results,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch({ type: actionTypes.DECREMENT }),
    addValue: () => dispatch({ type: actionTypes.ADD_VALUE, payload: { value: 5 } }),
    substractValue: () =>
      dispatch({ type: actionTypes.SUBSTRACT_VALUE, payload: { value: 5 } }),
    onStoreResult: (result) => dispatch({ type: actionTypes.STORE_RESULT, payload: result }),
    onDeleteResult: (id) => dispatch({ type: actionTypes.DELETE_RESULT, payload: id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
