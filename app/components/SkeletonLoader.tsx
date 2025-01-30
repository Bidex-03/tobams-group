import React from "react";

export const SkeletonArticleLoader: React.FC = () => {
  return (
    <div className="border p-4 rounded-md shadow-md mb-4 bg-white animate-pulse">
      <div className="relative h-48 bg-gray-300 rounded-md mb-4"></div>
      <div className="h-6 bg-gray-300 rounded mb-2"></div>
      <div className="h-4 bg-gray-300 rounded mb-2"></div>
      <div className="h-4 bg-gray-300 rounded mb-4"></div>
      <div className="flex justify-between items-center">
        <div className="h-4 bg-gray-300 rounded w-1/3"></div>
        <div className="h-4 bg-gray-300 rounded w-1/4"></div>
      </div>
    </div>
  );
};

export const SkeletonArticleDetail: React.FC = () => {
    return (
      <div className="container mx-auto p-4 animate-pulse">
        <div className="mb-4">
          <div className="bg-gray-300 h-6 w-32 rounded-md"></div>
        </div>
        <div className="h-10 bg-gray-300 rounded-md mb-4"></div>
        <div className="h-6 bg-gray-300 rounded-md mb-4 w-1/3"></div>
        <div className="w-full h-96 bg-gray-300 rounded-t-md mb-4"></div>
        <div className="prose prose-lg max-w-none space-y-4">
          <div className="h-4 bg-gray-300 rounded-md"></div>
          <div className="h-4 bg-gray-300 rounded-md"></div>
          <div className="h-4 bg-gray-300 rounded-md"></div>
          <div className="h-4 bg-gray-300 rounded-md"></div>
        </div>
        <div className="mt-12">
          <h2 className="text-2xl text-center text-primary font-bold mb-10">
            More articles
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="border p-4 rounded-md shadow-md mb-4 bg-white animate-pulse">
                <div className="relative h-48 bg-gray-300 rounded-md mb-4"></div>
                <div className="h-6 bg-gray-300 rounded mb-2"></div>
                <div className="h-4 bg-gray-300 rounded mb-2"></div>
                <div className="h-4 bg-gray-300 rounded mb-4"></div>
                <div className="flex justify-between items-center">
                  <div className="h-4 bg-gray-300 rounded w-1/3"></div>
                  <div className="h-4 bg-gray-300 rounded w-1/4"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };