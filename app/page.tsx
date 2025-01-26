import Link from "next/link";
import Image from "next/image";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <main>
      <section
        className="relative h-screen bg-cover bg-center bg-secondary"
        // style={{
        //   backgroundImage: "url('my-project\public\Background frame.png')",
        // }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white w-[60%] mx-auto">
          <h1 className="text-4xl font-bold mb-4 leading-[3rem]">
            Stay Ahead Of The Curve: Stay Informed With Our Blog For The Latest
            Industry Insights
          </h1>
          <p className="text-xl leading-relaxed">
            Insights that inspire success: uncover a wealth of knowledge by
            staying updated
          </p>
        </div>
      </section>

      {/* Stay updated with the latest trends in Tobams group */}
      <section className="py-12 bg-white text-primary">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">
            Stay Updated with the Latest trends in Tobams Group
          </h2>
        </div>
      </section>

      {/* Search bar & Filter bar */}
      <section className="py-6 bg-gray-100">
        <div className="container mx-auto flex justify-center space-x-4">
          <div className="relative w-3/4">
            <input
              type="text"
              placeholder="Search"
              className="w-full py-2 px-4 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <span className="absolute inset-y-0 right-0 flex items-center pr-3">
              <MagnifyingGlassIcon className="h-6 w-6" />
            </span>
          </div>
          <div className="relative w-1/4">
            <select
              className="w-full py-2 px-4 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              defaultValue="All Posts"
            >
              <option>All Posts</option>
              <option>Category 1</option>
              <option>Category 2</option>
            </select>
            {/* <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span> */}
          </div>
        </div>
      </section>
    </main>
  );
}
