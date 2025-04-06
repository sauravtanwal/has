import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-gray-100 flex flex-col">
      {/* Hero Section */}
      <header
        className="h-screen bg-cover bg-center relative"
        style={{ backgroundImage: "url('/src/images/hotel.jpg')" }} // Make sure image is in public/images/
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>

        {/* Centered Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-white h-full text-center px-4">
          <h2 className="text-5xl font-extrabold mb-4 drop-shadow-lg">Welcome to Royal Mountain</h2>
          <p className="text-xl mb-6 max-w-xl">
            Discover a world of comfort, elegance, and unmatched hospitality.
          </p>

          <Link
            to="/rooms"
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-blue-100 transition-all duration-300 shadow-md"
          >
            Explore Rooms
          </Link>

          {/* Scroll Down Arrow */}
          <div className="absolute bottom-8 animate-bounce">
            <span className="text-white text-3xl">&#x2193;</span>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Home;
