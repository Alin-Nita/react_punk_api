import React, { useState, useEffect } from "react";
import "./SearchBeers.scss";
import SearchBox from "../components/SearchBox/SearchBox";
import BeerTile from "../components/BeerTiles/BeerTile.jsx";

const SearchBeer = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const [beer, setBeer] = useState([]);

  useEffect(() => {
    const URL = `https://api.punkapi.com/v2/beers/`;

    fetch(URL)
      .then((response) => response.json())
      .then((beer) => {
        console.log(beer);
        setBeer(beer);
      });
  }, [searchTerm]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const inputValue = event.target[0].value;
    setSearchTerm(inputValue);
  };

  const filteredBeers = beer.map((beer) => {
    return <BeerTile name={beer.name} imageURL={beer.image_url} />;
  });

  return (
    <div>
      <h1>Search for beers</h1>
      <SearchBox handleSubmit={handleSubmit} searchTerm={searchTerm} />
      <div class="beers__container">{filteredBeers}</div>
    </div>
  );
};

export default SearchBeer;
