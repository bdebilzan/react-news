import { useEffect, useState } from "react";
import "../css/News.css";
import { getNews } from "../services/api";
import { timeAgoOrDate } from "../utils/helpers";
import { useParams } from "react-router-dom";

function News() {
  const { category } = useParams();
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);
  const [validImages, setValidImages] = useState({});

  useEffect(() => {
    const loadNews = async () => {
      try {
        const news = await getNews(category);
        setNews(news);
      } catch (error) {
        console.error(error.message);
        setError("Failed to fetch news.");
      }
    };

    loadNews();
  }, [category]);

  const handleImageError = (url) => {
    setValidImages((prev) => ({ ...prev, [url]: false }));
  };

  return (
    <div className="news-container">
      {error && <div>{error}</div>}
      <div className="header">
        <h1>
          {category.charAt(0).toUpperCase() + category.slice(1)} Top Stories
        </h1>
      </div>
      <div>
        {news?.length > 0 ? (
          news
            .filter(
              (article) =>
                article.socialimage &&
                validImages[article.socialimage] !== false
            )
            .map((article) => (
              <a
                href={article.url}
                key={article.url}
                className="article"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h4 className="article-title">{article.title}</h4>
                <p className="article-description">{article.description}</p>
                <p className="article-author">
                  {article.domain} | {timeAgoOrDate(article.seendate)}
                </p>
                <img
                  src={article.socialimage}
                  alt={article.title}
                  className="article-image"
                  onError={() => handleImageError(article.socialimage)}
                />
              </a>
            ))
        ) : (
          <p>No news available.</p>
        )}
      </div>
    </div>
  );
}

export default News;
