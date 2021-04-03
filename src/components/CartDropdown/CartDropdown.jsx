import React from 'react';
import './CartDropdown.scss';
import { useHistory } from 'react-router';

//Redux;
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

//Components;
import Button from "../../components/Button/Button";
import { connect } from 'react-redux';
import CartItem from '../CartItem/CartItem';

function CartDropdown({cartItems, dispatch}) {
    const history = useHistory();
    return (
        <div className = 'cart-dropdown' >
            <div className="cart-items">
                {
                    cartItems.length ?
                    (cartItems.map(item => (<CartItem key = {item.id} item = {item} />)))
                    :(
                        <span className='empty-message'>Your Cart Is Empty</span>
                    )
                }
            </div>
            <Button onClick = {()=>{
                history.push('/checkout');
                dispatch(toggleCartHidden())
                }}>
                    GO TO CHECKOUT
                    </Button>
        </div>
    )
}

const mapStateToProps = state =>({
    cartItems: selectCartItems(state)
})

export default connect(mapStateToProps)(CartDropdown);
