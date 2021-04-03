import React from "react";
import { Route} from "react-router-dom";

//Components;
import CollectionsOverview from "../../components/Collections-Overview/Collections-Overview";

const ShopPage = ({ match }) => {
  console.log(`${match.path}/abcd`);
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
    </div>
  );
};

export default ShopPage;
