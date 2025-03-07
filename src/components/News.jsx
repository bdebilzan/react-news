import { useEffect, useState } from "react";
import "../css/News.css";
import { getNews } from "../services/api";
import { useParams } from "react-router-dom";

function timeAgoOrDate(timestamp) {
  const now = new Date();
  const past = new Date(timestamp);
  const diffMs = now - past;
  const diffMinutes = Math.floor(diffMs / (1000 * 60));
  const diffHours = Math.floor(diffMinutes / 60);

  if (diffMinutes < 1) {
    return "Just now";
  } else if (diffMinutes < 60) {
    return `${diffMinutes}m ago`;
  } else if (diffHours < 24) {
    return `${diffHours}h ago`;
  } else {
    return past.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  }
}

function News() {
  const { category } = useParams();
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadNews = async () => {
      try {
        const news = await getNews(category);
        setNews(news);
      } catch (error) {
        console.error(error);
        setError("Failed to fetch news.");
      }
    };

    loadNews();
  }, [category]);

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
          news.map((article) => (
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
                {article.source} | {timeAgoOrDate(article.published_at)}
              </p>
              <img
                src={article.image_url}
                alt={article.title}
                className="article-image"
              />
            </a>
          ))
        ) : (
          <p>Loading news...</p>
        )}
      </div>
    </div>
  );
}

export default News;
