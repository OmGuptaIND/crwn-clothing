import React from 'react';
import './CheckOutItem.scss';

//Redux;
import { removeCartItem, decreaseItem, addCartItem } from '../../redux/cart/cart.actions';
import { connect } from 'react-redux';

//Components;


function CheckOutItem({cartItems, clearItem, addItem, decItem}) {
    const {name, price, imageUrl, quantity} = cartItems;
    return (
        <div className = 'checkout-item' >
            <div className="image-container">
                <img src= {imageUrl} alt="item"/>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick = {()=>decItem(cartItems)} >&#10094;</div>
                   <span className="value">{quantity}</span> 
                <div className="arrow" onClick = {()=>addItem(cartItems)} >&#10095;</div>
            </span>
            <span className="price">{price}</span>
            <div onClick = {()=>clearItem(cartItems)} className="remove-button">&#10005;</div>
        </div>
    )
};

const mapDispatchToProps = dispatch =>({
    clearItem: item => dispatch(removeCartItem(item)),
    addItem: item => dispatch(addCartItem(item)),
    decItem: item => dispatch(decreaseItem(item))
})

export default connect(null, mapDispatchToProps)(CheckOutItem)
