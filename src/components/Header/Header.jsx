import React, { Component } from "react";
import './Header.scss';

//Components;
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../images/logo.svg";
import { auth } from "../../Firebase/firebase";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [
        {
          _id: Math.random().toString(),
          option: "SHOP",
          link: "/shop",
        },
        {
          _id: Math.random().toString(),
          option: "CONTACT",
          link: "/contact",
        },
        {
          _id: Math.random().toString(),
          option: "SIGNIN",
          link: "/signin",
        },
      ],
    };
  }
  render() {
    const { options } = this.state;
    return (
      <div className="header">
        <Link className="logo-container" to="/">
          <Logo className="logo" />
        </Link>
        <div className="options">
          <Link className = 'option' to = '/shop'>SHOP</Link>
          <Link className = 'option' to = '/contact'>CONTACT</Link>
          {this.props.currentUser ? (<Link onClick = {()=>auth.signOut()} className='option' >SIGNOUT</Link>) : (<Link className = 'option' to = '/signin'>SIGNIN</Link>)}
        </div>
      </div>
    );
  }
}
