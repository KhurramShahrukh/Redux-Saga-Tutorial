import { counterSagaActionTypes } from "../constants";

export const asyncIncrementCounter = (value) => {
  return {
    type: counterSagaActionTypes.ASYNC_INCREMENT,
    payload: value ?? 1,
  };
};

export const asyncDecrementCounter = (value) => {
  return {
    type: counterSagaActionTypes.ASYNC_DECREMENT,
    payload: value ?? 1,
  };
};

export const immediateIncrementCounter = (value) => {
  return {
    type: counterSagaActionTypes.IMMEDIATE_INCREMENT,
    payload: value ?? 1,
  };
};

export const immediateDecrementCounter = (value) => {
  return {
    type: counterSagaActionTypes.IMMEDIATE_DECREMENT,
    payload: value ?? 1,
  };
};
