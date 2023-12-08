import { useState } from "react";
import logo from "./assets/contactalogo.png";
import Navbar from "./Components/Navbar.jsx";

import "./App.css";

function Home() {
  const [total, setTotal] = useState(0);

  return (
    <>
      <Navbar />
      <div className="splashCont">
        <div>
          <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
            <img src={logo} className="logo" alt="Contacta logo" />
          </a>
        </div>
        <h1>Shopping Cart Test</h1>
        <button className="visitButton">
          Click here to visit the product page
        </button>
      </div>
    </>
  );
}

export default Home;
