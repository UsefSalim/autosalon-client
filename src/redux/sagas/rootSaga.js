import { takeLatest } from "redux-saga/effects";
import {
  authlogin,
  ifLogedIn,
  authlogout,
  authregister,
} from "../ducks/authSlice";
import {
  handelLogin,
  handelIfLogin,
  handelLogout,
  handelRegister,
} from "./handlers/auth";

export function* watcherSaga() {
  yield takeLatest(ifLogedIn.type, handelIfLogin);
  yield takeLatest(authlogin.type, handelLogin);
  yield takeLatest(authlogout.type, handelLogout);
  yield takeLatest(authregister.type, handelRegister);
}
