import { FETCHED_APPOINTMENTS } from "app/actions/types";

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCHED_APPOINTMENTS: {
      return action.payload;
    }
    default:
      return state;
  }
};
