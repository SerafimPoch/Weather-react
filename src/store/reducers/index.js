import { combineReducers } from "redux";
import store from "./store";
import { reducer as formReducers } from "redux-form";

export default combineReducers({
  form: formReducers,
  store
});
