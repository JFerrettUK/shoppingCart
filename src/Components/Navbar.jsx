import basket from "../assets/basket.svg";
import "./Navbar.css";
import contactaWhite from "../assets/contactaWhite.png";
import { Link } from "react-router-dom"; // Add this import statement

const Navbar = () => {
  return (
    <div className="navCont">
      <Link to="/" className="navItem">
        <img src={contactaWhite} className="navImg"></img>{" "}
      </Link>

      <div className="navItems">
        <Link to="/" className="navItem">
          Home
        </Link>
        <Link to="/store" className="navItem">
          Store
        </Link>
        <Link to="/basket" className="basketLink">
          <img
            src={basket}
            className="basketImg"
            alt="shopping basket"
            style={{ paddingRight: "15px" }}
          />
        </Link>{" "}
      </div>
    </div>
  );
};

export default Navbar;
