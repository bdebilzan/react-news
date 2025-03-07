const NEWS_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const News = async (category) => {
  const url = `https://newsapi.org/v2/top-headlines?category=${encodeURIComponent(
    category
  )}&apiKey=${NEWS_KEY}`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      Connection: "keep-alive",
      "Upgrade-Insecure-Requests": "1",
    },
  });
  const data = await response.json();
  return data.articles;
};
