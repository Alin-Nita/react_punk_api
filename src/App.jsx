import React, { useEffect, useState } from "react";
import BeerList from "./components/containers/BeerList";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [beers, setBeers] = useState([]);

  const baseUrl = "https://api.punkapi.com/v2/beers/";

  useEffect(() => {
    fetch(baseUrl)
      .then((response) => response.json())
      .then((beers) => {
        setBeers(beers);
      });
  }, [searchTerm]);

  const handleInput = (event) => {
    const inputValue = event.target.value;
    setSearchTerm(inputValue);
  };

  return (
    <>
      <div className="main-container">
        <div className="Navbar">
          <h1>Beers API</h1>
          <Navbar searchTerm={searchTerm} handleInput={handleInput} />
        </div>
        <div className="main">
          <BeerList beers={beers} searchTerm={searchTerm} />
        </div>
      </div>
    </>
  );
};

export default App;
