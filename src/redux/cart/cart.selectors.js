import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
    [selectCart],
    (cart) => cart.hidden
);

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((value, cartItem) => value + (cartItem.quantity * cartItem.price ), 0)
)

export const selectCartCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((quantity, cartItem) => quantity + cartItem.quantity, 0)
)

