import { actionsTypes } from "../constants/timer";

const actions = {
  activity: () => ({
    type: actionsTypes.activity,
  }),
  break: () => ({
    type: actionsTypes.break,
  }),
};

export { actions };
