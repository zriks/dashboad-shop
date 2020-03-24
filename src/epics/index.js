import { combineEpics } from "redux-observable";
import { fetchProductEpic } from "./product.epic";

export default combineEpics(fetchProductEpic);
