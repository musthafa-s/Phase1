import { increment, decrement, reset } from './Action';

const initialState = {
  value: 0,
};

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case increment.type:
      return { value: state.value + 1 };
    case decrement.type:
      return { value: state.value - 1 };
    case reset.type:
      return { value: 0 };
    default:
      return state;
  }
};