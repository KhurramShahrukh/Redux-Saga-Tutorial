import { counterActionTypes } from "../constants";

export const asyncIncrementCounter = (value) => {
  return {
    type: counterActionTypes.ASYNC_INCREMENT,
    payload: value ?? 1,
  };
};

export const asyncDecrementCounter = (value) => {
  return {
    type: counterActionTypes.ASYNC_DECREMENT,
    payload: value ?? 1,
  };
};

export const immediateIncrementCounter = (value) => {
  return {
    type: counterActionTypes.IMMEDIATE_INCREMENT,
    payload: value ?? 1,
  };
};

export const immediateDecrementCounter = (value) => {
  return {
    type: counterActionTypes.IMMEDIATE_DECREMENT,
    payload: value ?? 1,
  };
};
