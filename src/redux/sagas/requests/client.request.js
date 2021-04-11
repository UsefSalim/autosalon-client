import axios from "axios";
const URL = "http://localhost:5000/api/client";

export function clientProfileRequest(action) {
  return axios.request({
    method: "get",
    url: `${URL}`,
  });
}
