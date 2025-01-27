import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Articles from "./articles/page";

const Home: React.FC = () => {
  return (
    <main>
      <section
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white w-[90%] sm:w-[80%] md:w-[60%] lg:w-[60%] mx-auto px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold mb-4 leading-tight sm:leading-snug md:leading-normal lg:leading-relaxed">
            Stay Ahead Of The Curve: Stay Informed With Our Blog For The Latest
            Industry Insights
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed">
            Insights that inspire success: uncover a wealth of knowledge by
            staying updated
          </p>
        </div>
      </section>

      {/* Stay updated with the latest trends in Tobams group */}
      <section className="py-12 bg-white text-primary">
        <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6">
            Stay Updated with the Latest trends in Tobams Group
          </h2>
        </div>
      </section>

      {/* Search bar & Filter bar */}
      <section className="py-6 bg-gray-100">
        <div className="container mx-auto flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
          <div className="relative w-full md:w-3/4">
            <input
              type="text"
              placeholder="Search"
              className="w-full py-2 px-4 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <span className="absolute inset-y-0 right-0 flex items-center pr-3">
              <MagnifyingGlassIcon className="h-6 w-6" />
            </span>
          </div>
          <div className="relative w-full md:w-1/4">
            <select
              className="w-full py-2 px-4 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              defaultValue="All Posts"
            >
              <option>All Posts</option>
              <option>Category 1</option>
              <option>Category 2</option>
            </select>
          </div>
        </div>
      </section>

      {/* Blogs Section */}
      <section className="py-12 bg-white text-primary">
        <div className="container mx-auto">
          <Articles />
        </div>
      </section>
    </main>
  );
};

export default Home;
