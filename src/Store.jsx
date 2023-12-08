import { useState } from "react";
import logo from "./assets/contactalogo.png";
import Navbar from "./Components/Navbar.jsx";
import ProductCard from "./Components/ProductCard.jsx";

import "./App.css";

function Home() {
  const [total, setTotal] = useState(0);

  return (
    <>
      <Navbar />
      <ProductCard name="Test" />
    </>
  );
}

export default Home;
