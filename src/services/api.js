import stringSimilarity from "string-similarity";

export const getNews = async (category) => {
  const query = `${category} sourcecountry:US sourcelang:english`;
  const url = `https://api.gdeltproject.org/api/v2/doc/doc?query=${encodeURIComponent(
    query
  )}&mode=artlist&timespan=1d&sort=relevance&format=json`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    if (!data.articles || data.articles.length === 0) return [];
    const uniqueArticles = [];

    data.articles.forEach((article) => {
      const normalizedTitle = article.title?.trim().toLowerCase();

      const isSimilarTitle = uniqueArticles.some((existingArticle) => {
        return (
          stringSimilarity.compareTwoStrings(
            normalizedTitle,
            existingArticle.title?.trim().toLowerCase()
          ) > 0.5
        );
      });

      if (!isSimilarTitle) {
        uniqueArticles.push(article);
      }
    });

    return uniqueArticles;
  } catch (error) {
    console.error("API Error:", error.message);
    throw error;
  }
};
