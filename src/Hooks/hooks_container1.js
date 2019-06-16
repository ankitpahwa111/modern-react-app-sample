import React, { useState, useEffect, useReducer } from "react";
import HooksReducer from "../store/hooks_reducers/HooksReducer";
import * as ACTIONS from "../store/actions/actions";
const HooksContainer1 = () => {
  const [stateValue, setStateValue] = useState(0);
  const [useEffectvalue, setUseEffectvalue] = useState(null);
  const initialState = {
    stateprop1: false,
  }
  const [state, dispatch] = useReducer(
    HooksReducer , initialState
  );
  useEffect(() => {
    setTimeout(() => {
      setUseEffectvalue("useState Working");
    }, 3000);
  }, []);
  const incrementValue = () => {
    setStateValue(stateValue + 1);
  };
  const decrementValue = () => {
    setStateValue(stateValue - 1);
  };
  const handleDispatchTrue = () => {
    dispatch(ACTIONS.success());
  };
  const handleDispatchFalse = () => {
    dispatch(ACTIONS.failure());
  };
  return (
    <div>
      React Hooks
      <br />
      <br />
      <button onClick={incrementValue}>Increase Value</button>
      <button onClick={decrementValue}>Decrease Value</button>
      <button onClick={handleDispatchTrue}>Dispatch True</button>
      <button onClick={handleDispatchFalse}>Dispatch False</button>

      <div>
        <p>{stateValue}</p>
      </div>
      <br />
      {useEffectvalue ? <p>{useEffectvalue}</p> : <p>No Value</p>}
      <br />
      {state.stateprop1 ? (
        <p>State Prop is true</p>
      ) : (
        <p>State Prop is false</p>
      )}
    </div>
  );
};

export default HooksContainer1;
