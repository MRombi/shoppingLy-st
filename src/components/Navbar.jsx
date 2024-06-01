import { Link } from "react-router-dom";
import "./componentsCSS/Navbar.css";
import { Context } from "../App";
import { useContext } from "react";

const Navbar = () => {
  const [total] = useContext(Context);
  return (
    <nav className="navigation">
      <ul className="navigation-links">
        <Link to="/">
          <li>Supermarket</li>
        </Link>
        <Link to="/shopping-list">
          <li>Shopping List</li>
        </Link>
        <p className="total-price">Total Price: £{total} </p>
        <p className="total-price">Budget: £50 </p>
      </ul>
    </nav>
  );
};

export default Navbar;
