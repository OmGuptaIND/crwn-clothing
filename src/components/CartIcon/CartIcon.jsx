import React from 'react';
import './CartIcon.scss';

//Redux
import {connect} from 'react-redux';
import {toggleCartHidden} from '../../redux/cart/cart.actions';
import { selectCartCount } from '../../redux/cart/cart.selectors';

//Components;
import {ReactComponent as ShoppingIcon} from '../../images/shopping-bag.svg';

function CartIcon({toggleCart, itemCount}) {
    return (
        <div onClick = {()=>toggleCart()} className = 'cart-icon' >
            <ShoppingIcon className = 'shopping-icon'  />
            <span className = 'item-count' > {itemCount} </span>
        </div>
    )
}

const mapDispatchToProps = dispatch =>({
    toggleCart: ()=> dispatch(toggleCartHidden())
});

const mapStateToProps = (state) => ({
    itemCount: selectCartCount(state),
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);

