/* eslint-disable react/prop-types */
// BasketPage.jsx
import Navbar from "./Components/Navbar.jsx";
import "./BasketPage.css";
import trashBin from "./assets/trash-bin.svg";

function BasketPage({ basket, setBasket }) {
  if (basket.length === 0) {
    return (
      <>
        <Navbar />
        <div className="basketCont">Basket is empty.</div>
      </>
    );
  }

  const handleAdd = (index) => {
    setBasket((prevBasket) => {
      const updatedBasket = [...prevBasket];
      updatedBasket[index].quantity = updatedBasket[index].quantity + 1;
      return updatedBasket;
    });
  };

  const handleRemove = (index) => {
    setBasket((prevBasket) => {
      const updatedBasket = [...prevBasket];

      if (updatedBasket[index].quantity > 1) {
        updatedBasket[index].quantity = Math.max(
          1,
          updatedBasket[index].quantity - 1
        );
      } else if (updatedBasket[index].quantity === 1) {
        updatedBasket.splice(index, 1);
      }

      return updatedBasket;
    });
  };

  const handleDelete = (index) => {
    const updatedBasket = basket.filter((item, i) => i !== index);
    setBasket(updatedBasket);
  };

  const total = basket
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <>
      <Navbar />
      <div>
        {basket.length > 0 && (
          <div className="basketCont">
            {basket.map((item, index) => (
              <div className="basketItem" key={index}>
                <div className="itemDetails">
                  <img
                    src={item.imageSource}
                    className="itemImage"
                    alt="item image"
                  />
                  <p>
                    <b>{item.name}</b>
                  </p>
                  <p>
                    (£{item.price}) x {item.quantity} - <b>Subtotal</b>: £
                    {(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
                <div className="itemButtons">
                  <button
                    className="cartButton"
                    onClick={() => handleAdd(index)}
                  >
                    +
                  </button>
                  <button
                    className="cartButton"
                    onClick={() => handleRemove(index)}
                  >
                    -
                  </button>
                  <button
                    className="cartButton"
                    onClick={() => handleDelete(index)}
                  >
                    <img src={trashBin} className="deleteButton" alt="Delete" />
                  </button>
                </div>
              </div>
            ))}
            <div className="basketText">
              <p>
                <b>Total</b>: £{total}
              </p>
              <button className="endButton">Proceed to checkout </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default BasketPage;
