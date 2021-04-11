import axios from "axios";
const URL = "http://localhost:5000/api/client";

export function clientProfileRequest(action) {
  return axios.request({
    method: "get",
    url: `${URL}`,
  });
}
export function esseyCarRequest(action) {
  return axios.request({
    method: "get",
    url: `${URL}/trycar/${action.payload}`,
  });
}
export function getCheckoutRequest(action) {
  return axios.request({
    method: "get",
    url: `${URL}/reservecar/${action.payload}`,
  });
}
export function getByCarRequest(action) {
  return axios.request({
    method: "post",
    url: `${URL}/reservecar/${action.payload.id}`,
    data: {
      ...action.payload.values,
    },
  });
}
