import { CartActionType } from "./cart.types";
import { addItemToCart, removeCartItem, decreaseItem } from "./cart.utils";

const INITIAL_STATE = {
  hidden: false,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionType.SET_CART_SHOW:
      return {
        ...state,
        hidden: !state.hidden,
      };

    case CartActionType.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };

    case CartActionType.REMOVE_CART_ITEM:
      return {
        ...state,
        cartItems: removeCartItem(state.cartItems, action.payload),
      };

    case CartActionType.DECREASE_ITEM:
      return {
        ...state,
        cartItems: decreaseItem(state.cartItems, action.payload),
      };

    default:
      return state;
  }
};

export default cartReducer;
