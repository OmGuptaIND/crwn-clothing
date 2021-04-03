import './Collections-Overview.scss';

//Redux;
import { connect } from "react-redux";
import { selectShop } from "../../redux/shop/shop.selectors";

//Components;
import Collection from "../Collection/Collection";

const CollectionsOverview = ({ collections }) => (
  <div className="overview">
    {collections.map(({ id, ...otherProps }) => (
      <Collection key={id} {...otherProps} />
    ))}
  </div>
);

const mapStateToProps = (state) => ({
  collections: selectShop(state),
});

export default connect(mapStateToProps)(CollectionsOverview);
