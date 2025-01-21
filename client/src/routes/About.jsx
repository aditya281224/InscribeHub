import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-gray-200 flex flex-col items-center py-12 px-4">
      <div className="bg-blue-700 text-white rounded-lg shadow-lg p-6 w-full max-w-3xl text-center transition-transform hover:scale-105 hover:shadow-xl">
        <h1 className="text-3xl font-bold mb-4">
          Welcome to <span className="text-yellow-300">InscribeHub</span>
        </h1>
        <p className="text-lg font-medium">
          Discover the power of blogging with a cutting-edge platform designed
          for simplicity and performance.
        </p>
      </div>

      <div className="mt-12 bg-gray-100 rounded-lg shadow-md p-8 w-full max-w-4xl transition-transform hover:scale-105 hover:bg-gray-200">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Key Features:
        </h2>
        <ol className="list-decimal list-inside space-y-6 text-gray-700">
          <li className="transition-colors hover:text-blue-700">
            <p className="text-lg">
              A dynamic blogging platform built with{" "}
              <span className="font-semibold text-blue-800">React</span>,{" "}
              <span className="font-semibold text-blue-800">Tailwind CSS</span>,
              and{" "}
              <span className="font-semibold text-blue-800">
                React Router Dom
              </span>
              . It features responsive layouts, navigation menus, infinite
              scrolling, image optimization, and user interaction tools like
              comments, search, and filtering. Advanced tools like{" "}
              <span className="font-semibold text-blue-800">React Query</span>{" "}
              and{" "}
              <span className="font-semibold text-blue-800">
                Clerk authentication
              </span>{" "}
              enhance data handling and security.
            </p>
          </li>

          <li className="transition-colors hover:text-blue-700">
            <p className="text-lg">
              The backend is powered by{" "}
              <span className="font-semibold text-blue-800">Express</span> and{" "}
              <span className="font-semibold text-blue-800">MongoDB</span>,
              enabling efficient routing, CRUD operations, error handling, and
              database relationships. Role-based authorization ensures secure
              user access.
            </p>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default About;
