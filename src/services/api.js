const NEWS_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const getNews = async (category) => {
  const url = `https://api.thenewsapi.com/v1/news/top?api_token=${NEWS_KEY}&categories=${encodeURIComponent(
    category
  )}&language=en&locale=us&limit=20&sort=published_at`;
  const response = await fetch(url);
  const articles = await response.json();
  return articles.data;
};
