import axios from "axios";
const URL = "http://localhost:5000/api/owner";

export function ownerProfileRequest(action) {
  return axios.request({
    method: "get",
    url: `${URL}`,
  });
}
export function addCarRequest(action) {
  return axios.request({
    method: "post",
    url: `${URL}/createcar`,
    data: {
      ...action.payload,
    },
  });
}
