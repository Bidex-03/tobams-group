import React from "react";
import ArticleItem from "./ArticleItem";

type Article = {
  id: number;
  title: string;
  description: string;
  reading_time_minutes: number;
  published_at: string;
  body_plain_text?: string;
  tags: string;
  social_image: string;
};

type ArticleListProps = {
  articles: Article[];
};

const ArticleList: React.FC<ArticleListProps> = ({ articles }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {articles.map((article) => (
        <ArticleItem
          key={article.id}
          id={article.id}
          title={article.title}
          description={article.description}
          reading_time_minutes={article.reading_time_minutes}
          published_at={article.published_at}
          body_plain_text={article.body_plain_text}
          tags={article.tags}
          social_image={article.social_image}
        />
      ))}
    </div>
  );
};

export default ArticleList;
