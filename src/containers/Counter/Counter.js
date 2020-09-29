import React from "react";
import { connect } from "react-redux";
import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";
import * as actionCreators from "../../store/actions/actions";

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
    increment: () => dispatch(actionCreators.increment()),
    decrement: () => dispatch(actionCreators.decrement()),
    addValue: () => dispatch(actionCreators.addValue(5)),
    substractValue: () => dispatch(actionCreators.substractValue(5)),
    onStoreResult: (result) => dispatch(actionCreators.storeResult(result)),
    onDeleteResult: (id) => dispatch(actionCreators.deleteResult(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
