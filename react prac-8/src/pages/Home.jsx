import React from "react";
import devImg from "../assets/devloper.png";
import Counter from "../components/counter";
import ClassBasedCounter from "../components/ClassBasedCounter";

export default function Home() {
  return (
    <>
      <main className="flex-grow px-4 py-8">
        <section className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0">
          <img
            className="w-full max-w-48 mr-6 md:w-1/2 object-cover rounded-lg"
            src={devImg}
            alt="Hero Image"
          />
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4">Welcome to Our Website</h2>
            <p className="text-gray-700 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              euismod odio eu neque auctor.
            </p>
            <a
              href="#"
              className="inline-flex items-center px-4 mt-2 py-2 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </section>

        <section>
        <Counter name={'functional component'}/>
        <ClassBasedCounter name={'class based component heigher order function'}/>
        </section>
      </main>
    </>
  );
}
