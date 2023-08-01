import React from "react";
import { Button } from "../ui/button";

const HeroSecion = () => {
  return (
    <div className="first-letter:w-full h-[100vh] flex justify-center p-5">
      <div className="max-w-7xl flex flex-col md:flex-row justify-around items-center gap-5">
        <div className="absolute bottom-8">Dropdown</div>
        {/* Text area */}
        <div className="space-y-3">
          <h1>
            Hello I am Brian. <br /> I am ........
          </h1>
          <p>
            Lorem ipsum is the best thing I have always seem to find some excuse
          </p>
          {/* Button group */}
          <div className="flex items-center gap-3">
            <Button>See More</Button>
            <Button type="button" variant="secondary">
              Projects
            </Button>
          </div>
        </div>
        {/* Image area */}
        <div>
          <div className="w-[300px] h-[300px] bg-slate-500 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSecion;
