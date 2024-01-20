import React from "react";

const Subscribe = () => {
  return (
    <div className="w-full px-4 py-16 bg-black text-white text-center">
      <h1>Join Our Defi Community</h1>
      <div className="py-4">
        <input
          className="p-3 rounded-3xl mr-4 "
          type="email"
          placeholder="Enter Your Email"
        />
        <button className="bg-gradient-to-r from-[var(--primary-purple)] to-[var(--primary-blue)] px-7 py-3 rounded-3xl ml-4">Sign Up</button>
      </div>
      <div className="flex items-center justify-center py-2">
        <input className="mr-2" type="checkbox" />
        <p>Yes, I agree to receive email communication fron Defi</p>
      </div>
    </div>
  );
};

export default Subscribe;
