import { combineReducers } from "redux";

import { rootReducer, fetchReducer } from "./reducers";

export default combineReducers({
  rootReducer,
  fetchReducer,
});
