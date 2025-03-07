import { useEffect, useState } from "react";
import "../css/News.css";
import { getNews } from "../services/api";
import { useParams } from "react-router-dom";

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
        <h1>{category.charAt(0).toUpperCase() + category.slice(1)} News</h1>
        <h2>Top Headlines</h2>
      </div>
      <div>
        {news?.length > 0 ? (
          news.map((article) => (
            <a href={article.url} key={article.url} className="article">
              <h4 className="article-title">{article.title}</h4>
              <p className="article-description">{article.description}</p>
              <p className="article-author">{article.author}</p>
              <img
                src={article.urlToImage}
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
