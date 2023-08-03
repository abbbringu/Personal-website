"use client";
import React from "react";
import { Button } from "../ui/button";
import { useState, useEffect } from "react";

const textRotating = [
  "CS Student",
  "Problem Solver",
  "Learner",
  "Fullstack Developer",
];

const HeroSecion = () => {
  const [_, setRotatingText] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      document.getElementById("dynamicText")!.innerHTML = " ";
      setRotatingText((prev) => {
        for (let i = 0; i < textRotating[prev].length; i++) {
          setTimeout(() => {
            document.getElementById("dynamicText")!.innerHTML +=
              textRotating[prev].charAt(i);
          }, 50 * i);
        }
        return (prev + 1) % textRotating.length;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleMove = (ev: any) => {
    const blob = document.getElementById("blob");
    const { clientX, clientY } = ev;

    blob!.animate(
      {
        left: `${clientX}px`,
        top: `${clientY}px`,
      },
      { duration: 1000, fill: "forwards" }
    );
  };

  return (
    <div
      className="w-full  md:h-[90vh] flex justify-center"
      onMouseMove={(ev) => handleMove(ev)}
    >
      <div
        className="w-[400px] h-[300px] absolute hidden md:flex -z-20"
        id="blob"
      ></div>
      <div
        id="blur"
        className="w-full h-full absolute hidden md:flex -z-10"
      ></div>

      <div className="max-w-7xl flex flex-col md:flex-row md:justify-center items-center gap-5 p-5">
        {/* Text area */}
        <div className="text-center flex flex-col justify-between md:text-start space-y-3 w-full basis-1/2">
          <h1>
            Hi, my name is Brian. <br />I am <br className="md:hidden flex" />a
            <span
              className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
              id="dynamicText"
            >
              {" "}
              Fullstack Developer
            </span>
          </h1>
          <p>
            I am currently enrolled on my 3rd year at Chalmers as a CS-student.
            I have been programming since high school (5 years), developed
            IoT-products and software. In my free time, I help small companies
            establish their online presence.
          </p>
          {/* Button group */}
          <div className="flex justify-center md:justify-normal items-center gap-3">
            <Button>See More</Button>
            <Button type="button" variant="secondary">
              Contect Me
            </Button>
          </div>
        </div>
        {/* Image area */}
        <div className="hidden md:flex">
          <div className="w-[300px] h-[300px] bg-slate-500 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSecion;
