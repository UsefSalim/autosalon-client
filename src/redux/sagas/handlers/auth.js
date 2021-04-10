import { call, put } from "redux-saga/effects";
import { requestLogin, requestIfLogin } from "../requests/auth";
import { isLogedIn, ErrorLogin } from "../../ducks/authSlice";

export function* handelLogin(action) {
  try {
    const { data } = yield call(requestLogin, action);
    if (data) {
      yield put(isLogedIn(data));
    }
  } catch (error) {
    if (error.response) yield put(ErrorLogin(error.response.data));
  }
}
export function* handelIfLogin(action) {
  try {
    const { data } = yield call(requestIfLogin, action);
    if (data) {
      yield put(isLogedIn(data));
    }
  } catch (error) {
    if (error.response) {
      console.log(error.response);
    }
  }
}
