import React from "react";

const WelcomeBanner = () => {
  return (
    <div
      className="p-5 bg-gradient-to-br from-purple-700 via-65% via-pink-500 to-purple-700 rounded-xl 
    shadow-md"
    >
      <h2 className="font-bold text-2xl text-white">
        Welcome to Online Learning Platform
      </h2>
      <p className="text-white">Learn, Create and Explore your favorite Courses</p>
    </div>
  );
};

export default WelcomeBanner;
