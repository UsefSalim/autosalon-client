import { call, put } from "redux-saga/effects";
import {
  requestLogin,
  requestIfLogin,
  requestLogout,
  requestRegister,
} from "../requests/auth";
import { isLogedIn, ErrorLogin, ErrorRegister } from "../../ducks/authSlice";

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
export function* handelRegister(action) {
  try {
    const { data } = yield call(requestRegister, action);
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
export function* handelLogout(action) {
  try {
    const { data } = yield call(requestLogout);
    if (data) {
      yield put(isLogedIn(data));
    }
  } catch (error) {
    if (error.response) {
      console.log(error.response);
    }
  }
}
