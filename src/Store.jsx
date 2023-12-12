import Navbar from "./Components/Navbar.jsx";
import ProductList from "./Components/ProductList.jsx";
import { useState } from "react";

function Home() {
  const [basket, setBasket] = useState([]);

  return (
    <>
      <Navbar />
      <ProductList basket={basket} setBasket={setBasket} />
    </>
  );
}

export default Home;
