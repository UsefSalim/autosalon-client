import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { watcherSaga } from "./sagas/rootSaga";
import authSlice from "./ducks/authSlice";
import ownerSlice from "./ducks/ownerSlice";
import clientSlice from "./ducks/clientSlice";

// create a saga middleware
const sagaMiddleware = createSagaMiddleware();
// create a array of middlewares saga
const middleware = [sagaMiddleware];

const reducer = combineReducers({
  authentification: authSlice,
  owner: ownerSlice,
  client: clientSlice,
});

export default configureStore({
  reducer,
  middleware: [...getDefaultMiddleware({ thunk: false }), ...middleware],
});
sagaMiddleware.run(watcherSaga);
