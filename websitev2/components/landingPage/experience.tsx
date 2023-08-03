import React from "react";
import Feed from "../feed";

const ExperienceCard = [
  {
    title: "Juvumi Software",
    subtitle: "Founder (2023)",
    imageSrc: "https://logowik.com/content/uploads/images/abb8294.jpg",
    description:
      "B2B business which provides website for small business owners. Mostly frontend projects",
  },
  {
    title: "ABB Ferier",
    subtitle: "Summerwork (2021)",
    imageSrc: "https://logowik.com/content/uploads/images/abb8294.jpg",
    description:
      "Worked in a production line manufacturing electrical componets. Fast pasted and required stress tolerant.",
  },
  {
    title: "ABB Ferier",
    subtitle: "Summerwork (2019)",
    imageSrc: "https://logowik.com/content/uploads/images/abb8294.jpg",
    description:
      "Worked in pre-assembly which provided the production line with smaller components.",
  },
];

const Experience = () => {
  return (
    <div id="experience" className=" xl:text-black text-white w-full">
      <Feed title="Experience" cards={ExperienceCard} />
    </div>
  );
};

export default Experience;
