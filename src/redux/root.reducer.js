import { combineReducers } from "redux";

//Reducers;
import cartReducer from "./cart/cart.reducer";
import userReducer from "./user/user.reducer";

export default combineReducers({
  user: userReducer,
  cart: cartReducer,
});
