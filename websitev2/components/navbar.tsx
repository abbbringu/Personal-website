import React from "react";
import Navigation from "./Navigation";

const Navbar = () => {
  return (
    <div className="w-full flex justify-center bg-white text-foreground ">
      <nav>
        <div className="max-w-5xl w-full flex justify-center items-center p-3 rounded-full">
          <div>
            <Navigation />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
