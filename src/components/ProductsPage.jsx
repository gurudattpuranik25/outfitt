import React, { useState } from "react";
import { data } from "../assets/productsData";
import Filters from "./Filters";
import "./ProductsPage.css";

function ProductsPage() {
  const allProducts = data;
  const [products, setProducts] = useState(data);

  const handleGenderFilter = (selectedGender) => {
    setProducts(
      allProducts.filter((product) => product.gender === selectedGender)
    );
  };

  const handleSizeFilter = (selectedSize) => {
    setProducts(allProducts.filter((product) => product.size === selectedSize));
  };

  const handleBrandFilter = (selectedBrand) => {
    setProducts(
      allProducts.filter((product) => product.title === selectedBrand)
    );
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
      />
      <div className="products__list">
        <div className="products">
          {products.map((product) => {
            return (
              <div className="product" key={product.id}>
                <img className="product__image" src={product.imageUrl} alt="" />
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
