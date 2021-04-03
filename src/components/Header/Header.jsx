import React from "react";
import "./Header.scss";

//Redux;
import {connect} from 'react-redux';
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";

//Components;
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../images/logo.svg";
import { auth } from "../../Firebase/firebase";
import CartIcon from "../CartIcon/CartIcon.jsx";
import CartDropdown from "../CartDropdown/CartDropdown";



const Header = ({showcart, currentUser}) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {currentUser ? (
          <Link to="/" onClick={() => auth.signOut()} className="option">
            SIGNOUT
          </Link>
        ) : (
          <Link className="option" to="/signin">
            SIGNIN
          </Link>
        )}
        <CartIcon />
      </div>
      {showcart && (<CartDropdown />)}
    </div>
  );
};

const mapStateToProps = state => ({
  showcart:selectCartHidden(state),
  currentUser:selectCurrentUser(state)
});

export default connect(mapStateToProps)(Header);
