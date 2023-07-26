import React from "react";
import Navigation from "./Navigation";

const Navbar = () => {
  return (
    <div className="w-full flex justify-center bg-white">
      <div className="max-w-5xl w-full flex justify-center items-center backdrop-blur-sm p-3 rounded-full">
        <div>
          <Navigation />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
