"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import ArticleList from "./ArticleList";

type Article = {
  id: number;
  title: string;
  description: string;
  reading_time_minutes: number;
  published_at: string;
  body_html?: string;
  body_plain_text?: string;
  tags: string;
  social_image: string;
};

const Articles: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [visibleArticles, setVisibleArticles] = useState<number>(6);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get("https://dev.to/api/articles");
        const articlesWithPlainText = response.data.map((article: Article) => ({
          ...article,
          body_plain_text: htmlToPlainText(article.body_html || ""),
        }));
        setArticles(articlesWithPlainText);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching articles:", error);
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const loadMoreArticles = () => {
    setVisibleArticles((prevVisibleArticles) => prevVisibleArticles + 3);
  };

  const htmlToPlainText = (html: string): string => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    return doc.body.textContent || "";
  };

  if (loading) {
    return <p>Loading articles...</p>;
  }

  return (
    <div className="container mx-auto py-8">
      <ArticleList articles={articles.slice(0, visibleArticles)} />
      {visibleArticles < articles.length && (
        <div className="flex justify-center mt-8">
          <button
            onClick={loadMoreArticles}
            className="px-4 py-2 border border-primary text-primary rounded"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Articles;
