import { counterReducerActionTypes } from "../constants";

const initialCounterState = {
  count: 0,
};

export const counterReducer = (
  state = initialCounterState,
  { type, payload }
) => {
  switch (type) {
    case counterReducerActionTypes.INCREMENT:
      return { ...state, count: state.count + payload };

    case counterReducerActionTypes.DECREMENT:
      return { ...state, count: state.count - payload };

    case counterReducerActionTypes.RESET:
      return { ...state, count: 0 };

    default:
      return state;
  }
};
