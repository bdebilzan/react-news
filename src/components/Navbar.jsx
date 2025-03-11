import React, { useState, useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { NavLink, useNavigate } from "react-router-dom";
import "../css/Navbar.css";
import logo from "../assets/bd-logo.png";
import darkModeLogo from "../assets/bd-logo-dark.png";
import { categoryQueries } from "../utils/constants";

const Navbar = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search/${searchQuery}`);
      setSearchQuery("");
      setSearchOpen(false);
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-header">
        <NavLink to="/general" className="logo-container">
          <img
            src={!darkMode ? logo : darkModeLogo}
            alt="Logo"
            className="logo"
          />
        </NavLink>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          {Object.keys(categoryQueries).map((category) => (
            <NavLink key={category} to={`/${category}`} className="nav-link">
              {category.toUpperCase()}
            </NavLink>
          ))}
        </div>
        <div className="nav-actions">
          <div className="search-container">
            <button
              className="search-icon"
              onClick={() => setSearchOpen(!searchOpen)}
            >
              🔍
            </button>
            {searchOpen && (
              <form onSubmit={handleSearch} className="search-form">
                <input
                  type="text"
                  placeholder="Search news..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit">Go</button>
              </form>
            )}
          </div>
          <button
            className="theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "☀ " : "🌙 "}
          </button>
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
