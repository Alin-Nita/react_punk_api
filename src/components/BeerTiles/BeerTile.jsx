import React from "react";
import "./BeerTile.scss";

const BeerTile = ({ item }) => {
  return (
    <div key={item.id} className="beer-title">
      <h3>{item.name}</h3>
      <img src={item.image_url} />
    </div>
  );
};

export default BeerTile;
