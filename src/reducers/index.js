import { combineReducers } from "redux";
import { product } from "./product.reducer";

const rootReducer = combineReducers({
    product: product
});

export default rootReducer;
