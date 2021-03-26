import React, { Component } from "react";

//Data;
import SHOP_DATA from "./ShopData";
import Collection from "../../components/Collection/Collection";

export default class ShopPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA,
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div>
        {collections.map(({ id, ...otherProps }) => (
          <Collection key={id} {...otherProps} />
        ))}
      </div>
    );
  }
}
