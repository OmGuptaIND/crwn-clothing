import React from "react";
import "./CollectionCard.scss";

//Redux;
import {connect} from 'react-redux';
import { addCartItem } from "../../redux/cart/cart.actions";

//Components;
import Button from "../Button/Button";

function CollectionCard({ item, addItem}) {
  const {name, price, imageUrl} = item;
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">₹{price}</span>
      </div>
      <Button onClick = {()=>addItem(item)} inverted >ADD TO CART</Button>
    </div>
  );
}
const mapDispatchToProps = dispatch =>({
  addItem: item => dispatch(addCartItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionCard);
