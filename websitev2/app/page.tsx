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
            imageUrl:
              "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/b4/339da416653830d015f5a179f864e1/square_logo_large.png?auto=format%2Ccompress&dpr=1&w=56px&h=56px&auto=format%2Ccompress&dpr=2&w=&h=",
            certificateUrl:
              "https://www.coursera.org/account/accomplishments/certificate/ZBSWACGUPZMX",
          },
          {
            title: "The Science of Well-Being",
            subtitle: "Coursera - Yale",
            imageUrl:
              "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/b4/339da416653830d015f5a179f864e1/square_logo_large.png?auto=format%2Ccompress&dpr=1&w=56px&h=56px&auto=format%2Ccompress&dpr=2&w=&h=",
            certificateUrl:
              "https://www.coursera.org/account/accomplishments/certificate/5GMA6LXQSZTV",
          },
          {
            title: "Scientific Computing with Python",
            subtitle: "freeCodeCamp",
            imageUrl:
              "https://media.licdn.com/dms/image/C4E0BAQGLKj3JHcof0w/company-logo_100_100/0/1589990867649?e=1698883200&v=beta&t=EvVkawkMBGjoSaKD07SWTdT9QlwAqNtssA6DkUoHg28",
            certificateUrl:
              "https://freecodecamp.org/certification/fccf6334585-b9db-465a-8da3-07fa25b0557a/scientific-computing-with-python-v7",
          },
          {
            title: "Meta certification on frontend",
            subtitle: "Coursera - Meta",
            imageUrl: "next.svg",
            certificateUrl:
              "https://www.coursera.org/account/accomplishments/certificate/ZBSWACGUasfPZMX",
          },
        ]}
      />
    </div>
  );
};

export default page;
