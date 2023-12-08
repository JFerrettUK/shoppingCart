import basket from "../assets/basket.svg";
import "./Navbar.css";
import contactaWhite from "../assets/contactaWhite.png";
import { Link } from "react-router-dom"; // Add this import statement

const Navbar = () => {
  console.log("confirm navBar runs");
  return (
    <div className="navCont">
      <img src={contactaWhite} className="navImg"></img>
      <div className="navItems">
        <Link to="/" className="navItem">
          Home
        </Link>
        <Link to="/store" className="navItem">
          Store
        </Link>{" "}
        <img
          src={basket}
          className="basketImg"
          alt="shopping basket"
          style={{ paddingRight: "10px" }}
        />
      </div>
    </div>
  );
};

export default Navbar;
