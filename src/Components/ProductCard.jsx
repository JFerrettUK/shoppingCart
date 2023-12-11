/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import "./ProductCard.css";

const ProductCard = ({ name, description, price, imageSource }) => {
  const [quantity, setQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [item, setItem] = useState({ name, description, price, imageSource });

  useEffect(() => {
    if (typeof price === "number") {
      setTotalPrice(quantity * price);
    }
  }, [quantity, price]);

  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="product-card">
      <div className="imgCont">
        <img className="product-img" src={imageSource} alt={name} />
      </div>
      <h3 className="product-name">{name}</h3>
      <div className="product-description">{description}</div>
      <h3 className="product-price">£{price}</h3>
      <div className="quantity-controls">
        <button className="decrease" onClick={decreaseQuantity}>
          -
        </button>
        <input className="noInput" type="number" value={quantity} readOnly />
        <button className="increase" onClick={increaseQuantity}>
          +
        </button>
      </div>
      <button
        className="addToCart"
        onClick={() => console.log(`Add to cart ${name} clicked`)}
      >
        Add to cart
      </button>
    </div>
  );
};

export default ProductCard;
