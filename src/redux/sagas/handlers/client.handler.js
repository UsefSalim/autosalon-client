import { put, call } from "redux-saga/effects";
import { dataProfile, Error, Success } from "../../ducks/clientSlice";
import {
  clientProfileRequest,
  esseyCarRequest,
} from "../requests/client.request";

export function* handelGetProfileClient(action) {
  try {
    const { data } = yield call(clientProfileRequest, action);
    if (data) {
      yield put(dataProfile(data));
    }
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
