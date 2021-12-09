import React from "react";
import RadioButtons from "../Radio-Buttons/RadioButtons";
import "./Navbar.scss";

const Navbar = ({ searchTerm, handleInput }) => {
  return (
    <nav className="nav">
      <form className="search-box">
        <input
          type="text"
          value={searchTerm}
          className="search-box__input"
          onInput={handleInput}
          placeholder="Search for beer . . ."
        />
      </form>
      <RadioButtons />
    </nav>
  );
};

export default Navbar;
