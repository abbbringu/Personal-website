import React from "react";
import HeroSecion from "@/components/landingPage/heroSection";
import Education from "@/components/landingPage/education";
import Experience from "@/components/landingPage/experience";
import GroupCard from "@/components/groupCard";

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
      <GroupCard
        cards={[
          {
            title: "Financial Markets (With Honors)",
            subtitle: "Coursera - Yale",
            imageUrl: "next.svg",
            certificateUrl:
              "https://www.coursera.org/account/accomplishments/certificate/ZBSWACGUPZMX",
          },
          {
            title: "Financial Markets (With Honors)",
            subtitle: "Coursera - Yale",
            imageUrl: "next.svg",
            certificateUrl:
              "https://www.coursera.org/account/accomplishments/certificate/ZBSWACGUPZMX",
          },
        ]}
      />
    </div>
  );
};

export default page;
