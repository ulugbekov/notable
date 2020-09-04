import { FETCHED_PHYCISIANS, SELECT_PHYCISIAN } from "app/actions/types";

const INITIAL_STATE = {
  physicians: [],
  physician: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCHED_PHYCISIANS: {
      return Object.assign({}, state, { physicians: action.payload });
    }
    case SELECT_PHYCISIAN: {
      return Object.assign({}, state, { physician: action.payload });
    }
    default:
      return state;
  }
};
