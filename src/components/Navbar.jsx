import React from "react";
import { NavLink } from "react-router-dom";
import "../css/Navbar.css";
import logo from "../assets/bd-logo.png";

const categories = [
  "general",
  "science",
  "technology",
  "sports",
  "business",
  "entertainment",
  "politics",
  "food",
  "health",
  "travel",
];

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/general">
        <img src={logo} alt="Logo" className="logo" />
      </NavLink>
      {categories.map((category) => (
        <NavLink key={category} to={`/${category}`} className={"nav-link"}>
          {category.toUpperCase()}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navbar;
