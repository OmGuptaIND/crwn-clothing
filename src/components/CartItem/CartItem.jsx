import './CartItem.scss';

const CartItem = ({item:{name, price, quantity, imageUrl}}) =>{
    return(
        <div className="cart-item">
            <img src={imageUrl} alt="err"/>
            <div className="item-details">
                <span className="name">{name}</span>
                <span className="price">{ quantity } x ${price}</span>
            </div>
        </div>
    )
};

export default CartItem;