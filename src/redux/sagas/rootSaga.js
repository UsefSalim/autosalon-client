import { takeLatest } from "redux-saga/effects";
import { authlogin, ifLogedIn } from "../ducks/authSlice";
import { handelLogin, handelIfLogin } from "./handlers/auth";

export function* watcherSaga() {
  yield takeLatest(ifLogedIn.type, handelIfLogin);
  yield takeLatest(authlogin.type, handelLogin);
}
