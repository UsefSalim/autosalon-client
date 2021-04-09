import { takeLatest } from "redux-saga/effects";
import { authlogin } from "../ducks/authSlice";
import { handelLogin } from "./handlers/auth";

export function* watcherSaga() {
  yield takeLatest(authlogin.type, handelLogin);
}
