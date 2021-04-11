import { put, call } from "redux-saga/effects";
import { dataProfile } from "../../ducks/clientSlice";
import { clientProfileRequest } from "../requests/client.request";

export function* handelGetProfileClient(action) {
  try {
    const { data } = yield call(clientProfileRequest, action);
    if (data) {
      yield put(dataProfile(data));
      data && console.log(data);
    }
  } catch (error) {
    if (error.response) console.log(error.response);
  }
}
