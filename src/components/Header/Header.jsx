import React from "react";
import "./Header.scss";

//Components;
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../images/logo.svg";
import { auth } from "../../Firebase/firebase";

export default function Header({ currentUser }) {
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
      </div>
    </div>
  );
}
