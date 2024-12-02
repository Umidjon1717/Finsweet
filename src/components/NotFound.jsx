import React from "react";
import notFoundImg from "../assets/notfound.jpg"; 

const NotFound = () => {
  return (
    <section className="flex items-center h-screen p-16 bg-gray-50 dark:bg-gray-900">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto text-center">
        <div className="max-w-md">
          <h1 className="text-9xl font-extrabold text-gray-700 dark:text-gray-200">
            404
          </h1>
          <p className="text-2xl font-semibold text-gray-700 dark:text-gray-200">
            Oops! Page Not Found
          </p>
          <p className="mt-4 text-gray-500 dark:text-gray-400">
            Sorry, the page you’re looking for doesn’t exist.
          </p>
          <img
            className="w-80 mx-auto mt-6"
            src={notFoundImg}
            alt="Not Found"
          />
          <a
            href="/"
            className="mt-6 inline-block px-5 py-3 text-sm font-medium text-white bg-primary-600 rounded-lg hover:bg-primary-700 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Back to Homepage
          </a>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
