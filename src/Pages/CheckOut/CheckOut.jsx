import { connect } from "react-redux";

import "./CheckOut.scss";

//Redux;
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";

//Components;
import CheckOutItem from "../../components/CheckOutItem/CheckOutItem";
import StripeButton from "../../components/StripeButton/StripeButton";

const CheckOut = ({ cartItems, total }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Descriptions</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((item) => (
        <CheckOutItem key={item.id} cartItems={item} />
      ))}
      <div className="total">
        <span>Total: ₹ {total}</span>
      </div>
      <div className="test-warning">
        *Please Use the Following Test Credit Card for Payments*
        <br/>
        4242 4242 4242 4242 - Exp: 01/50 - CVV: 123
      </div>
      <StripeButton price = {total} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
  total: selectCartTotal(state),
});

export default connect(mapStateToProps)(CheckOut);
