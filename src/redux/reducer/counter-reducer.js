import { counterActionTypes } from "../constants";

const initialCounterState = {
  count: 0,
};

export const counterReducer = (
  state = initialCounterState,
  { type, payload }
) => {
  switch (type) {
    case counterActionTypes.INCREMENT:
      return { ...state, count: state.count + payload };

    case counterActionTypes.DECREMENT:
      return { ...state, count: state.count - payload };

    case counterActionTypes.RESET:
      return { ...state, count: 0 };

    default:
      return state;
  }
};
