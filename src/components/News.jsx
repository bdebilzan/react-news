import { useEffect, useState } from "react";
import "../css/News.css";
import { getNews } from "../services/api";
import { timeAgoOrDate } from "../utils/helpers";
import { useParams } from "react-router-dom";
import { categoryQueries } from "../utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function News() {
  const { category, searchQuery } = useParams();
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);
  const [validImages, setValidImages] = useState({});
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);
  }, []);

  useEffect(() => {
    const loadNews = async () => {
      setError(null);
      setLoading(true);
      try {
        const query = searchQuery ? searchQuery : categoryQueries[category];
        const newsData = await getNews(query);
        setNews(newsData);
      } catch (error) {
        console.error(error.message);
        setError("Failed to fetch news.");
      } finally {
        setLoading(false);
      }
    };

    loadNews();
  }, [category, searchQuery]);

  const handleImageError = (url) => {
    setValidImages((prev) => ({ ...prev, [url]: false }));
  };

  const toggleFavorite = (article, event) => {
    event.stopPropagation();

    const updatedFavorites = favorites.some((fav) => fav.url === article.url)
      ? favorites.filter((fav) => fav.url !== article.url)
      : [...favorites, article];

    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <div className="news-container">
      {error && <div className="error-message">{error}</div>}
      <div className="header">
        <h1>
          {searchQuery
            ? `Search Results for "${searchQuery}"`
            : `${
                category.charAt(0).toUpperCase() + category.slice(1)
              } Top Stories`}
        </h1>
      </div>
      <div className="news-list">
        {loading ? (
          Array(7)
            .fill(0)
            .map((_, index) => (
              <div key={index} className="article skeleton">
                <div className="article-content">
                  <Skeleton height={20} width="60%" />
                  <Skeleton height={15} width="80%" />
                  <Skeleton height={15} width="40%" />
                </div>
                <Skeleton height={80} width={120} />
              </div>
            ))
        ) : news.length > 0 ? (
          news
            .filter(
              (article) =>
                article.socialimage &&
                validImages[article.socialimage] !== false
            )
            .map((article) => {
              const isFavorited = favorites.some(
                (fav) => fav.url === article.url
              );

              return (
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
                      className={`favorite-button-selection ${
                        isFavorited ? "favorited" : ""
                      }`}
                      onClick={(event) => toggleFavorite(article, event)}
                    >
                      <FontAwesomeIcon
                        icon={isFavorited ? solidHeart : regularHeart}
                      />
                    </button>
                  </div>
                  {validImages[article.socialimage] !== false && (
                    <img
                      src={article.socialimage}
                      alt={article.title}
                      className="article-image"
                      onError={() => handleImageError(article.socialimage)}
                      loading="lazy"
                    />
                  )}
                </div>
              );
            })
        ) : (
          <p>No news available.</p>
        )}
      </div>
    </div>
  );
}

export default News;
