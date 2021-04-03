import React from 'react';
import './CollectionPage.scss';

//Redux
import { connect } from 'react-redux';
import { selectCollectionsItems } from '../../redux/shop/shop.selectors';
import CollectionCard from '../../components/CollectionCard/CollectionCard';


const CollectionPage = ({collections}) => {
    const {title, items} = collections;
    return(
    <div className = 'collection-page' >
        <h2 className="title">{title}</h2>
        <div className="items">
            {
                items.map(item => <CollectionCard key = {item.id} item = {item} />)
            }
        </div>
    </div>
)};

const mapStateToProps = (state, ownprops) => ({
    collections: selectCollectionsItems(ownprops.match.params.categoryId)(state),
})

export default connect(mapStateToProps)(CollectionPage);