import { combineReducers } from "redux";
import auth from "./authReducer";
import loader from "./loaderReducer";
import categories from "./products";
import products from "./categoryReducer";

export default combineReducers({
  auth,
  loader,
  products,
  categories,
});
