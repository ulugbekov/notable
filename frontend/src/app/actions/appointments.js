import { FETCHED_APPOINTMENTS } from "app/actions/types";
import { fetch } from "app/api";

const ENDPOINT = "/api/v1/physicians";

export const fetchAppointments = (physician_id) => {
  return (dispatch) => {
    fetch({
      endpoint: `${ENDPOINT}/${physician_id}/appointments`,
    })
      .then((response) => {
        dispatch({
          type: FETCHED_APPOINTMENTS,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
