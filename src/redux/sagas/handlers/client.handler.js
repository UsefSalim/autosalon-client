import { put, call } from "redux-saga/effects";
import {
  dataProfile,
  Error,
  Success,
  setCheckout,
} from "../../ducks/clientSlice";
import {
  clientProfileRequest,
  esseyCarRequest,
  getCheckoutRequest,
  getByCarRequest,
} from "../requests/client.request";

export function* handelGetProfileClient(action) {
  try {
    const { data } = yield call(clientProfileRequest, action);
    if (data) yield put(dataProfile(data));
  } catch (error) {
    if (error.response) console.log(error.response);
  }
}
export function* handelEssyCar(action) {
  try {
    const request = yield call(esseyCarRequest, action);
    if (request) {
      const { data } = yield call(clientProfileRequest, action);
      if (data) {
        yield put(dataProfile(data));
        yield put(Success(true));
      }
    }
  } catch (error) {
    if (error.response) yield put(Error(error.response.data));
  }
}
export function* handelCheckout(action) {
  try {
    const { data } = yield call(getCheckoutRequest, action);
    if (data) yield put(setCheckout(data));
  } catch (error) {
    if (error.response) yield put(Error(error.response.data));
  }
}
export function* handelByCar(action) {
  try {
    const request = yield call(getByCarRequest, action);
    if (request) {
      const { data } = yield call(clientProfileRequest, action);
      if (data) {
        yield put(dataProfile(data));
        yield put(Success(true));
      }
    }
  } catch (error) {
    if (error.response) yield put(Error(error.response.data));
  }
}
