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
} from "./handlers/auth.handler";
import {
  getProfileInfo,
  addCar,
  tretementOffreAccepted,
  tretementOffreRefused,
} from "../ducks/ownerSlice";
import {
  handelGetProfileOwner,
  handelAddCar,
  handelTretementOffreAccepted,
  handelTretementOffreRefused,
} from "./handlers/owner.handler";
import {
  getProfileClient,
  esseyCar,
  getCheckout,
  ByCar,
} from "../ducks/clientSlice";
import {
  handelGetProfileClient,
  handelEssyCar,
  handelCheckout,
  handelByCar,
} from "./handlers/client.handler";

export function* watcherSaga() {
  yield takeLatest(ifLogedIn.type, handelIfLogin);
  yield takeLatest(authlogin.type, handelLogin);
  yield takeLatest(authlogout.type, handelLogout);
  yield takeLatest(authregister.type, handelRegister);
  yield takeLatest(getProfileInfo.type, handelGetProfileOwner);
  yield takeLatest(addCar.type, handelAddCar);
  yield takeLatest(getProfileClient.type, handelGetProfileClient);
  yield takeLatest(esseyCar.type, handelEssyCar);
  yield takeLatest(getCheckout.type, handelCheckout);
  yield takeLatest(ByCar.type, handelByCar);
  yield takeLatest(tretementOffreAccepted.type, handelTretementOffreAccepted);
  yield takeLatest(tretementOffreRefused.type, handelTretementOffreRefused);
}
