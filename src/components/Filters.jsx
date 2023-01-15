import React from "react";
import "./Filters.css";

function Filters({
  handleGenderFilter,
  handleSizeFilter,
  handleBrandFilter,
  removeFilters,
  handlePriceFilter,
}) {
  return (
    <div className="filters__section">
      <div className="filters">
        <div className="sizes">
          <button onClick={() => handleSizeFilter("S")}>S</button>
          <button onClick={() => handleSizeFilter("M")}>M</button>
          <button onClick={() => handleSizeFilter("L")}>L</button>
          <button onClick={() => handleSizeFilter("XL")}>XL</button>
        </div>
        <div className="gender">
          <button onClick={() => handleGenderFilter("Male")}>Male</button>
          <button onClick={() => handleGenderFilter("Female")}>Female</button>
        </div>
        <div className="brands">
          <button onClick={() => handleBrandFilter("Nike")}>Nike</button>
          <button onClick={() => handleBrandFilter("Adidas")}>Adidas</button>
          <button onClick={() => handleBrandFilter("Van Heusen")}>
            Van Heusen
          </button>
        </div>
        <div className="priceFilter">
          <button onClick={() => handlePriceFilter("lowToHigh")}>
            Low to High
          </button>
          <button onClick={() => handlePriceFilter("highToLow")}>
            High to Low
          </button>
        </div>
        <div className="all">
          <button onClick={removeFilters}>Remove Filters</button>
        </div>
      </div>
    </div>
  );
}

export default Filters;
