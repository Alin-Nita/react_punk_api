import React from "react";
import "./BeerList.scss";
import BeerTile from "../BeerTiles/BeerTile";

const BeerList = ({ beers, searchTerm }) => {
  return (
    <div className="main__beer-list">
      {beers
        .filter((item) => {
          if (!searchTerm) return true;
          if (item.name.includes(searchTerm)) {
            return true;
          }
        })
        .map((item) => (
          <ul>
            <BeerTile key={item.id} item={item} />
          </ul>
        ))}
    </div>
  );
};

export default BeerList;
