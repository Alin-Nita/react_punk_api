import React from "react";
import "./BeerTile.scss";

const BeerTile = (props) => {
  const { name, imageURL } = props;

  return (
    <>
      <div>
        <h3>{name}</h3>
        <img src={imageURL} />
      </div>
    </>
  );
};

export default BeerTile;
