import React from "react";
import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";

type ArticleItemProps = {
  id: number;
  title: string;
  description: string;
  reading_time_minutes: number;
  published_at: string;
  tags: string[];
  tag_list?: string;
  social_image: string;
};

const ArticleItem: React.FC<ArticleItemProps> = ({
  id,
  title,
  description,
  reading_time_minutes,
  published_at,
  tags,
  social_image,
}) => {
  const formattedDate = format(new Date(published_at), "do MMM, yyyy");

  return (
    <div className="border p-4 rounded-md shadow-md mb-4 bg-white">
      <div className="relative">
        <Image
          src={social_image}
          alt={title}
          width={800}
          height={400}
          className="w-full h-48 object-cover mb-4 rounded-md"
        />
        <span className="absolute top-2 left-2 bg-primary text-white bg-opacity-70 px-2 py-1 rounded-md">
          {Array.isArray(tags) ? tags.join(", ") : tags}
        </span>
      </div>
      <h2 className="text-2xl font-bold mb-2 text-black">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex justify-between items-center">
        <div className="flex items-center text-sm text-gray-600">
          <span>{formattedDate}</span>
          <span className="mx-2">|</span>
          <span>{reading_time_minutes} min read</span>
        </div>
        <Link href={`/articles/${id}`}>
          <p className="text-primary underline underline-offset-2">View Post</p>
        </Link>
      </div>
    </div>
  );
};

export default ArticleItem;
