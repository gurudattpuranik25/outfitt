import React from "react";
import hat from "../assets/hat.png";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="logo">
        <img className="company__logo" src={hat} alt="logo" />
        <h1 className="company__name">Outfitt</h1>
      </div>
      <div className="search__bar">
        <input type="text" id="search__input" placeholder="Search" />
      </div>
    </div>
  );
}

export default Header;
