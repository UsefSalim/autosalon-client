import { put, call } from "redux-saga/effects";
import { ProfileInfo, relodCars } from "../../ducks/ownerSlice";
import {
  ownerProfileRequest,
  addCarRequest,
  tretementOffreRefusedRequest,
  tretementOffreAcceptedRequest,
} from "../requests/owner.request";

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
export function* handelTretementOffreAccepted(action) {
  try {
    const response = yield call(tretementOffreAcceptedRequest, action);
    if (response) {
      const { data } = yield call(ownerProfileRequest, action);
      if (data) {
        yield put(ProfileInfo(data));
      }
    }
  } catch (error) {
    if (error.response) console.log(error.response);
  }
}
export function* handelTretementOffreRefused(action) {
  try {
    const response = yield call(tretementOffreRefusedRequest, action);
    if (response) {
      const { data } = yield call(ownerProfileRequest, action);
      if (data) {
        yield put(ProfileInfo(data));
      }
    }
    // console.log(action);
  } catch (error) {
    if (error.response) console.log(error.response);
  }
}
