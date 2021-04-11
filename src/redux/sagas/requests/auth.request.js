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
export function requestRegister(action) {
  return axios.request({
    method: "post",
    url: `${URL}/auth/register`,
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
export function requestLogout(action) {
  return axios.request({
    method: "get",
    url: `${URL}/auth/logout`,
  });
}
