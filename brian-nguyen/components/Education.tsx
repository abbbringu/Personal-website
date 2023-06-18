import React from "react";
import { education, experience } from "@/const";
import DisplayCard from "./DisplayCard";
const Education = () => {
  return (
    <section id="education">
      <div className="flex flex-col xl:flex-row xl:justify-between gap-6 relative z-0 max-w-[1440px] flex-wrap mx-4">
        <div className="flex flex-col flex-wrap">
          <h3 className="sub__title text-center border-b-2 border-gray-200 xl:w-[512px] hover:border-sky-600 transition">
            Utbildning
          </h3>
          <div className="space-y-2 divide-y divide-solid">
            {education.map((edu) => (
              <DisplayCard
                title={edu.title}
                degree={edu.degree}
                from={edu.from}
                to={edu.to}
                link={edu.link}
                image={edu.image}
              />
            ))}
          </div>
        </div>
        <div className="flex-auto">
          <h3 className="sub__title text-center border-b-2 border-gray-200 xl:w-[512px] hover:border-sky-600 transition">
            Erfarenhet
          </h3>
          <div className="space-y-2 divide-y divide-solid">
            {experience.map((edu) => (
              <DisplayCard
                title={edu.title}
                degree={edu.degree}
                from={edu.from}
                to={edu.to}
                link={edu.link}
                image={edu.image}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
