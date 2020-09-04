import qs from "qs";
import axios from "axios";

export const fetch = ({ endpoint, data }) => {
  return axios({
    url: `http://localhost:4000${endpoint}`,
    params: data,
    paramsSerializer: function (params) {
      return qs.stringify(params, { arrayFormat: "brackets" });
    },
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    timeout: 10000,
  }).catch((error) => {
    handleError(error);
  });
};

function handleError(error) {
  throw error;
}
