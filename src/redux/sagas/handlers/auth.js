import { call, put } from "redux-saga/effects";
import { requestLogin } from "../requests/auth";
import { setRole, isLogedIn, ErrorLogin } from "../../ducks/authSlice";

export function* handelLogin(action) {
  try {
    const { data } = yield call(requestLogin, action);
    if (data) {
      yield put(setRole(data));
      yield put(isLogedIn(true));
    }
  } catch (error) {
    if (error.response) yield put(ErrorLogin(error.response.data));
  }
}
