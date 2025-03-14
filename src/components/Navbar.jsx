import React, { useState, useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import "../css/Navbar.css";
import logo from "../assets/bd-logo.png";
import darkModeLogo from "../assets/bd-logo-dark.png";
import { categoryQueries } from "../utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faMagnifyingGlass,
  faSun,
  faMoon,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [favoritesCount, setFavoritesCount] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search/${searchQuery}`);
      setSearchQuery("");
      setSearchOpen(false);
    }
  };

  const handleFavoritesClick = () => {
    if (location.pathname === "/favorites") {
      navigate("/general");
    } else {
      navigate("/favorites");
    }
  };

  return (
    <nav className={`navbar ${searchOpen ? "search-mode" : ""}`}>
      <div className="nav-header">
        {searchOpen ? (
          <div className="search-bar">
            <button
              className="back-button"
              onClick={() => setSearchOpen(false)}
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <form onSubmit={handleSearch} className="search-form">
              <input
                type="text"
                placeholder="Search news..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="search-button" type="submit">
                Go
              </button>
            </form>
          </div>
        ) : (
          <>
            <NavLink to="/general" className="logo-container">
              <img
                src={!darkMode ? logo : darkModeLogo}
                alt="Logo"
                className="logo"
                loading="lazy"
              />
            </NavLink>
            {menuOpen && (
              <div className="nav-links open">
                {Object.keys(categoryQueries).map((category) => (
                  <NavLink
                    key={category}
                    to={`/${category}`}
                    className="nav-link"
                  >
                    {category.toUpperCase()}
                  </NavLink>
                ))}
              </div>
            )}
            <div className="nav-actions">
              {!menuOpen && (
                <>
                  <button
                    className="search-icon"
                    onClick={() => setSearchOpen(true)}
                  >
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </button>
                  <button
                    className="favorites-icon"
                    onClick={handleFavoritesClick}
                  >
                    <FontAwesomeIcon icon={faHeart} />
                    {favoritesCount > 0 && (
                      <span className="favorites-count">{favoritesCount}</span>
                    )}
                  </button>
                  <button
                    className="theme-toggle"
                    onClick={() => setDarkMode(!darkMode)}
                  >
                    <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
                  </button>
                </>
              )}
              <button
                className="menu-toggle"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                ☰
              </button>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
