/* eslint-disable react/prop-types */
// BasketPage.jsx
import Navbar from "./Components/Navbar.jsx";
import "./BasketPage.css";

function BasketPage({ basket, setBasket }) {
  const total = basket
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <>
      <Navbar />
      <div>
        {basket.length > 0 && (
          <>
            <div className="basketCont">
              {basket.map((item, index) => (
                <div className="basketText" key={index}>
                  <p>
                    <b>{item.name}</b> | x {item.quantity} (£{item.price}) -{" "}
                    <b>Subtotal</b>: £{item.price * item.quantity.toFixed(2)}
                  </p>
                </div>
              ))}
              {/* Display the total outside the map */}
              <div className="basketText">
                <p>
                  <b>Total</b>: £{total}
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default BasketPage;
