/* eslint-disable react/prop-types */
// Store.jsx
import Navbar from "./Components/Navbar.jsx";
import ProductList from "./Components/ProductList.jsx";

function Store({ basket, setBasket }) {
  return (
    <>
      <Navbar />
      <ProductList basket={basket} setBasket={setBasket} />
    </>
  );
}

export default Store;
