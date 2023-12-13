/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import "./ProductCard.css";

const ProductCard = ({
  name,
  description,
  price,
  imageSource,
  basket,
  setBasket,
}) => {
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

  const addToCart = () => {
    const itemIndexInBasket = basket.findIndex(
      (basketItem) => basketItem.id === item.id
    );

    if (itemIndexInBasket === -1) {
      // If the item is not in the basket, add it with quantity
      setBasket((prevBasket) => [...prevBasket, { ...item, quantity }]);
    } else {
      // If the item is already in the basket, update the quantity
      setBasket((prevBasket) => {
        const updatedBasket = [...prevBasket];
        updatedBasket[itemIndexInBasket].quantity += quantity;
        return updatedBasket;
      });
    }
  };
  useEffect(() => {
    console.log(basket);
  }, [basket]);

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
      <button className="addToCart" onClick={addToCart}>
        Add to cart
      </button>
    </div>
  );
};

export default ProductCard;
