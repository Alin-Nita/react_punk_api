import React from "react";
import "./SearchBox.scss";

const SearchBox = (props) => {
  const { searchTerm, handleSubmit } = props;

  return (
    <>
      <form className="search-box" onSubmit={handleSubmit}>
        <input
          type="text"
          defaultValue={searchTerm}
          className="search-box__input"
        />
      </form>
    </>
  );
};

export default SearchBox;
