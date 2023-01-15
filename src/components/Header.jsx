import React from "react";
import { useContext } from "react";
import hat from "../assets/hat.png";
import { ProductsContext } from "./Context";
import "./Header.css";

function Header() {
  const { searchItem, searchHandler } = useContext(ProductsContext);

  return (
    <div className="header">
      <div className="logo">
        <img className="company__logo" src={hat} alt="logo" />
        <h1 className="company__name">Outfitt</h1>
      </div>
      <div className="search__bar">
        <input
          type="text"
          id="search__input"
          placeholder="Search for t-shirts, track pants & more"
          value={searchItem}
          onChange={searchHandler}
        />
      </div>
    </div>
  );
}

export default Header;
