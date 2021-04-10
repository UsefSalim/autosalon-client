import axios from "axios";
const URL = "http://localhost:5000/api";

export function requestLogin(action) {
  return axios.request({
    method: "post",
    url: `${URL}/auth/login`,
    data: {
      ...action.payload,
    },
  });
}
export function requestIfLogin(action) {
  return axios.request({
    method: "get",
    url: `${URL}`,
  });
}
