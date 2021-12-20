import { combineReducers } from "redux";
import authReducer from "./auth";
import cartReducer from "./cart";
import productReducer from "./product";

export const rootReducer = combineReducers({
    productReducer : productReducer,
    cartReducer : cartReducer,
    auth : authReducer
})

export type RootState = ReturnType<typeof  rootReducer>