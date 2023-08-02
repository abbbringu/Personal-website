"use client";
import React from "react";
import { Button } from "../ui/button";
import { useState, useEffect } from "react";

const textRotating = ["CS Student", "Problem Solver", "Fullstack Developer"];

const HeroSecion = () => {
  const [rotatingText, setRotatingText] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      document.getElementById("dynamicText")!.innerHTML = "a ";
      setRotatingText((prev) => {
        for (let i = 0; i < textRotating[prev].length; i++) {
          setTimeout(() => {
            document.getElementById("dynamicText")!.innerHTML +=
              textRotating[prev].charAt(i);
          }, 50 * i);
        }
        return (prev + 1) % textRotating.length;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="first-letter:w-full md:h-[100vh] flex justify-center p-5">
      <div className="max-w-7xl flex flex-col md:flex-row md:justify-center items-center gap-5">
        <div className="md:flex absolute bottom-8 hidden ">
          Dropdown {rotatingText}
        </div>
        {/* Text area */}
        <div className="space-y-3 w-full basis-1/2">
          <h1>
            Hi, my name is Brian <br /> I am{" "}
            <span className="text-cyan-600" id="dynamicText"></span>
          </h1>
          <p>
            Jag heter Brian och jag är en datateknik student på Chalmers
            Tekniska Högskola. Jag har programmerat sedan gymnasiet och skapat
            IoT-enheter och applikationer. Jag fortsatt med programmering och
            lärt mig olika koncept som funktionell programmering,
            objektorienterad programmering, datastrukturer, parallell
            programmering osv. För tillfället lär jag mig fullstack-utveckling
            med Next.js. Har dessutom programmerat i Python, JavaScript, C#, C++
            och Java.{" "}
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
        <div className="hidden md:flex">
          <div className="w-[300px] h-[300px] bg-slate-500 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSecion;
