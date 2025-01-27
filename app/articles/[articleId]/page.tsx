"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { format } from "date-fns";
import ReactMarkdown from "react-markdown";
import ArticleItem from "../ArticleItem";

type Article = {
  id: number;
  title: string;
  description: string;
  reading_time_minutes: number;
  published_at: string;
  body_markdown: string;
  tags: string[];
  social_image: string;
};

type ArticleDetailProps = {
  params: Promise<{ articleId: string }>;
};

const ArticleDetail: React.FC<ArticleDetailProps> = ({ params }) => {
  const [article, setArticle] = useState<Article | null>(null);
  const [articleId, setArticleId] = useState<string | null>(null);
  const [moreArticles, setMoreArticles] = useState<Article[]>([]);
  const [visibleMoreArticles, setVisibleMoreArticles] = useState<number>(3);

  useEffect(() => {
    const unwrapParams = async () => {
      const { articleId } = await params;
      setArticleId(articleId);
    };

    unwrapParams();
  }, [params]);

  useEffect(() => {
    if (articleId) {
      const fetchArticle = async () => {
        try {
          const response = await axios.get(
            `https://dev.to/api/articles/${articleId}`
          );
          setArticle(response.data);
        } catch (error) {
          console.error("Error fetching article:", error);
        }
      };

      fetchArticle();
    }
  }, [articleId]);

  useEffect(() => {
    const fetchMoreArticles = async () => {
      try {
        const response = await axios.get("https://dev.to/api/articles");
        setMoreArticles(response.data);
      } catch (error) {
        console.error("Error fetching more articles:", error);
      }
    };

    fetchMoreArticles();
  }, []);

  const loadMoreArticles = () => {
    setVisibleMoreArticles(
      (prevVisibleMoreArticles) => prevVisibleMoreArticles + 3
    );
  };

  if (!article) {
    return <p>Loading...</p>;
  }

  const formattedDate = format(new Date(article.published_at), "do MMMM, yyyy");

  const filteredMoreArticles = moreArticles.filter(
    (moreArticle) => moreArticle.id !== article.id
  );

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4">
        <span className="text-primary bg-gray-200 px-2 py-1 rounded-md">
          {article.tags[0]}
        </span>
      </div>
      <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
      <p className="text-sm text-gray-600 mb-4">{formattedDate}</p>
      <Image
        src={article.social_image}
        alt={article.title}
        width={800}
        height={400}
        className="w-full h-96 object-cover mb-4 rounded-t-md"
      />
      <div className="prose prose-lg max-w-none">
        <ReactMarkdown>{article.body_markdown}</ReactMarkdown>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl text-center text-primary font-bold mb-10">
          More articles
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMoreArticles
            .slice(0, visibleMoreArticles)
            .map((moreArticle) => (
              <ArticleItem
                key={moreArticle.id}
                id={moreArticle.id}
                title={moreArticle.title}
                description={moreArticle.description}
                reading_time_minutes={moreArticle.reading_time_minutes}
                published_at={moreArticle.published_at}
                body_plain_text={moreArticle.body_markdown}
                tags={
                  Array.isArray(moreArticle.tags)
                    ? moreArticle.tags.join(", ")
                    : moreArticle.tags
                }
                social_image={moreArticle.social_image}
              />
            ))}
        </div>
        {visibleMoreArticles < filteredMoreArticles.length && (
          <div className="flex justify-center mt-8">
            <button
              onClick={loadMoreArticles}
              className="px-4 py-2 border border-primary text-primary rounded"
            >
              Explore More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ArticleDetail;
