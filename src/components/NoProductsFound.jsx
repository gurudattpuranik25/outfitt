import React from "react";
import "./NoProductsFound.css";

function NoProductsFound() {
  return (
    <div className="empty__products__list">
      <img
        src="https://cdni.iconscout.com/illustration/premium/thumb/confusing-woman-due-to-empty-cart-4558760-3780056.png"
        alt="No Products Found"
      />
      <h1>
        No products found for the selected filters. Remove the filters and try
        again!
      </h1>
    </div>
  );
}

export default NoProductsFound;
