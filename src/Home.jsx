import logo from "./assets/contactalogo.png";
import Navbar from "./Components/Navbar.jsx";
import { Link } from "react-router-dom";

function Home() {
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
        <Link to="/store">
          <button className="visitButton">
            Click here to visit the product page
          </button>
        </Link>
      </div>
    </>
  );
}

export default Home;
