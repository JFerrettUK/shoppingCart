/* eslint-disable react/prop-types */
import "./ProductList.css";
import ProductCard from "./ProductCard";
import ProductData from "./ProductData";
import { useEffect } from "react";

const ProductList = ({ basket, setBasket }) => {
  const products = ProductData();

  useEffect(() => {
    console.log("products:");
    console.log(products);
    console.log("basket:");
    console.log(basket);
  }, [basket, setBasket]);

  if (!products || !products.length) {
    return (
      <div className="product-list">
        <div>Loading...</div>{" "}
      </div>
    );
  }

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          imageSource={product.image}
          name={product.title}
          description={product.description}
          price={product.price}
          basket={basket}
          setBasket={setBasket}
        />
      ))}
    </div>
  );
};

export default ProductList;
