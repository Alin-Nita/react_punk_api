import React, { useState } from "react";

import SearchBox from "../components/SearchBox/SearchBox";
import AlbumTiles from "../components/AlbumTiles/AlbumTiles";

const ExploreAlbums = (props) => {
  const { albumsArr } = props;
  const [searchTerm, setSearchTerm] = useState("");

  const handleInput = (event) => {
    console.log(event.target.value);
    const userInput = event.target.value.toLowerCase();
    setSearchTerm(userInput);
  };

  const filteredArray = albumsArr.filter((album) => {
    const albumTitle = album.strAlbum.toLowerCase();
    return albumTitle.includes(searchTerm);
  });

  return (
    <>
      <SearchBox
        searchTerm={searchTerm}
        label="albums"
        handleInput={handleInput}
      />
      <BeerCards title="Results" albumsArr={filteredArray} />
    </>
  );
};

export default ExploreAlbums;
