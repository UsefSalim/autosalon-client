import { put, call } from "redux-saga/effects";
import { ProfileInfo, relodCars } from "../../ducks/ownerSlice";
import { ownerProfileRequest, addCarRequest } from "../requests/owner.request";

export function* handelGetProfileOwner(action) {
  try {
    const { data } = yield call(ownerProfileRequest, action);
    if (data) {
      yield put(ProfileInfo(data));
    }
  } catch (error) {
    if (error.response) console.log(error.response);
  }
}
export function* handelAddCar(action) {
  try {
    const { data } = yield call(addCarRequest, action);
    if (data) {
      yield put(relodCars(data));
    }
  } catch (error) {
    if (error.response) console.log(error.response);
  }
}
