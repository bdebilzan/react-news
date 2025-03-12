import { useState, useEffect } from "react";
import "../css/News.css";
import { timeAgoOrDate } from "../utils/helpers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);
  }, []);

  const removeFavorite = (url) => {
    const updatedFavorites = favorites.filter((article) => article.url !== url);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <div className="news-container">
      <div className="header">
        <h1>Favorites</h1>
      </div>
      <div className="news-list">
        {favorites.length > 0 ? (
          favorites.map((article) => (
            <div
              key={article.url}
              className="article"
              onClick={() => window.open(article.url, "_blank")}
            >
              <div className="article-content">
                <h4 className="article-title">{article.title}</h4>
                <p className="article-description">{article.description}</p>
                <p className="article-author">
                  {article.domain} | {timeAgoOrDate(article.seendate)}
                </p>
                <button
                  className="favorite-button-selection favorited"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeFavorite(article.url);
                  }}
                >
                  <FontAwesomeIcon icon={solidHeart} />
                </button>
              </div>
              {article.socialimage && (
                <img
                  src={article.socialimage}
                  alt={article.title}
                  className="article-image"
                  loading="lazy"
                />
              )}
            </div>
          ))
        ) : (
          <p>No favorites added.</p>
        )}
      </div>
    </div>
  );
}

export default Favorites;
