import React, { createContext, useState } from "react";

export const ProductsContext = createContext();

function Context({ children }) {
  const [searchItem, setSearchItem] = useState("");
  const searchHandler = (e) => {
    setSearchItem(e.target.value);
  };

  const value = {
    searchItem,
    searchHandler,
  };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
}

export default Context;
