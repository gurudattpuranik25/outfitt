import React, { useContext, useState } from "react";
import { data } from "../assets/productsData";
import { ProductsContext } from "./Context";
import Filters from "./Filters";
import "./ProductsPage.css";

function ProductsPage() {
  // const allProducts = data;

  const { searchItem } = useContext(ProductsContext);

  const [products, setProducts] = useState(data);

  const handleGenderFilter = (selectedGender) => {
    const filtered = products.filter(
      (product) => product.gender === selectedGender
    );
    setProducts(filtered);
  };

  const handleSizeFilter = (selectedSize) => {
    setProducts(products.filter((product) => product.size === selectedSize));
  };

  const handleBrandFilter = (selectedBrand) => {
    setProducts(products.filter((product) => product.title === selectedBrand));
  };

  const handlePriceFilter = (selectedFilter) => {
    let sortedProducts = [...products];
    if (selectedFilter === "lowToHigh") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (selectedFilter === "highToLow") {
      sortedProducts.sort((a, b) => b.price - a.price);
    }
    setProducts(sortedProducts);
  };

  const removeFilters = () => {
    setProducts(data);
  };

  return (
    <div>
      <Filters
        handleGenderFilter={handleGenderFilter}
        handleSizeFilter={handleSizeFilter}
        handleBrandFilter={handleBrandFilter}
        removeFilters={removeFilters}
        handlePriceFilter={handlePriceFilter}
      />

      <div className="products__list">
        <div className="products">
          {products
            .filter((value) => {
              if (searchItem === "") {
                return value;
              } else if (
                value.description
                  .toLowerCase()
                  .includes(searchItem.toLowerCase())
              ) {
                return value;
              }
            })
            .map((product) => {
              return (
                <div className="product" key={product.id}>
                  <img
                    className="product__image"
                    src={product.imageUrl}
                    alt=""
                  />
                  <div className="product__details">
                    <div className="title__and__rating">
                      <h2 className="title">{product.title}</h2>
                      <h2 className="rating">{product.rating}</h2>
                    </div>
                    <p className="description">{product.description}</p>
                    <p className="price">Rs. {product.price}</p>
                    <button className="add__to__cart">Add To Cart</button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
