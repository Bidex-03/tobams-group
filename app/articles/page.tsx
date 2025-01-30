"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import ArticleList from "./ArticleList";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { SkeletonArticleLoader } from "../components/SkeletonLoader";

type Article = {
  id: number;
  title: string;
  description: string;
  reading_time_minutes: number;
  published_at: string;
  body_html?: string; // Add body_html
  body_plain_text?: string; // Store plain text
  tags: string[];
  social_image: string;
};

const Articles: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [visibleArticles, setVisibleArticles] = useState<number>(6);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>(""); // Initialize with an empty string
  const [selectedCategory, setSelectedCategory] = useState<string>("All Posts");
  const [tags, setTags] = useState<string[]>([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get("https://dev.to/api/articles");
        const articlesWithPlainText = response.data.map((article: Article) => ({
          ...article,
          body_plain_text: htmlToPlainText(article.body_html || ""),
        }));
        setArticles(articlesWithPlainText);
        setLoading(false); // Set loading to false after articles are fetched

        // Extract unique tags
        const uniqueTags: string[] = Array.from(
          new Set(response.data.flatMap((article: Article) => article.tags))
        );
        setTags(uniqueTags);
      } catch (error) {
        console.error("Error fetching articles:", error);
        setLoading(false); // Set loading to false in case of an error
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
    return doc.body.textContent || ""; // Extract plain text
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedCategory(event.target.value);
  };

  const filteredArticles = articles.filter((article) => {
    const matchesSearchQuery = article.title
      .toLowerCase()
      .includes((searchQuery || "").toLowerCase());
    const matchesCategory =
      selectedCategory === "All Posts" ||
      article.tags.includes(selectedCategory);
    return matchesSearchQuery && matchesCategory;
  });

  if (loading) {
    return (
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, index) => (
            <SkeletonArticleLoader key={index} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8">
      {/* Search bar & Filter bar */}
      <section className="py-6 bg-gray-100">
        <div className="container mx-auto flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4 px-4 sm:px-6 lg:px-8">
          <div className="relative w-full md:w-3/4">
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={handleSearch}
              className="w-full py-2 px-4 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <span className="absolute inset-y-0 right-0 flex items-center pr-3">
              <MagnifyingGlassIcon className="h-6 w-6" />
            </span>
          </div>
          <div className="relative w-full md:w-1/4">
            <select
              className="w-full py-2 px-4 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              value={selectedCategory}
              onChange={handleCategoryChange}
            >
              <option>All Posts</option>
              {tags.map((tag) => (
                <option key={tag} value={tag}>
                  {tag}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      <ArticleList articles={filteredArticles.slice(0, visibleArticles)} />
      {visibleArticles < filteredArticles.length && (
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
