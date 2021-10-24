import { actionsTypes } from "../constants/timer";

const INITIAL_STATE = {
  break: 5,
  activity: 25,
};

const reducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionsTypes.break:
      return { ...state, counter: state.break - 1 };
    case actionsTypes.activity:
      return { ...state, activity: state.activity - 1 };

    default:
      return state;
  }
};

export { reducers };
