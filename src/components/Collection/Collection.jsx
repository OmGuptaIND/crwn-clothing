import React from "react";
import CollectionCard from "../CollectionCard/CollectionCard";
import "./Collection.scss";

export default function Collection({ title, items }) {
  return (
    <div className="collection">
      <h1 className='title' >{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, Idx) => Idx < 4)
          .map(({id, ...otherProps}) => (
            <CollectionCard key = {id} {...otherProps} />
          ))}
      </div>
    </div>
  );
}
