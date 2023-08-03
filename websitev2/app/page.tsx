import React from "react";
import HeroSecion from "@/components/landingPage/heroSection";
import Education from "@/components/landingPage/education";
import Experience from "@/components/landingPage/experience";
import Certifications from "@/components/landingPage/certifications";
import WorkShowcase from "@/components/landingPage/myWork";

const page = () => {
  return (
    <div>
      <HeroSecion />
      <div className="w-full bg-white text-black flex xl:flex-row flex-col justify-center">
        <div className="p-5 flex-1">
          <Education />
        </div>
        <div className="p-5 flex-1 bg-gray-900 xl:bg-white">
          <Experience />
        </div>
      </div>
      <Certifications />
      <WorkShowcase />
    </div>
  );
};

export default page;
