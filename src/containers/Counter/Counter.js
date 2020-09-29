import React from "react";
import { connect } from "react-redux";
import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";
import {
  increment,
  decrement,
  addValue,
  substractValue,
  storeResult,
  deleteResult,
} from "../../store/actions/actions";

const Counter = (props) => {
  return (
    <div>
      <CounterOutput value={props.cntr} />
      <CounterControl label="Increment" clicked={props.increment} />
      <CounterControl label="Decrement" clicked={props.decrement} />
      <CounterControl label="Add 5" clicked={props.addValue} />
      <CounterControl label="Subtract 5" clicked={props.substractValue} />
      <hr />
      <button onClick={() => props.onStoreResult(props.cntr)}>
        Store Result
      </button>
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
    decrement: () => dispatch(decrement()),
    addValue: () => dispatch(addValue()),
    substractValue: () => dispatch(substractValue()),
    onStoreResult: () => dispatch(storeResult()),
    onDeleteResult: () => dispatch(deleteResult()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
