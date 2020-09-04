import { FETCHED_PHYCISIANS, SELECT_PHYCISIAN } from "app/actions/types";
import { get, fetch, create, update, destroy } from "app/api";

const ENDPOINT = "/api/v1/physicians";

export const fetchPhysicians = () => {
  return (dispatch) => {
    fetch({
      endpoint: ENDPOINT,
    })
      .then((response) => {
        dispatch({
          type: FETCHED_PHYCISIANS,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const selectPhycision = (physician) => {
  return (dispatch) => {
    dispatch({
      type: SELECT_PHYCISIAN,
      payload: physician,
    });
  };
};
