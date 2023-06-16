import Image from "next/image";
import { ProjectCard } from "@/types";

const ProjectCard = ({
  title,
  tag,
  desc,
  gitLink,
  demo,
  image,
}: ProjectCard) => {
  return (
    <div className="flex flex-col md:flex-row justify-between rounded-lg bg-gray-100 p-5">
      <div className="relative basis-1/2">
        <Image
          src={image}
          width={700}
          height={300}
          alt="project thumbnail"
          className="object-contain"
        />
      </div>
      {/* Text Box */}
      <div className="flex flex-col gap-3 pl-10 items-start basis-1/2">
        <div className="sub_sub__title">{title}</div>
        {/* Project Tags */}
        <div className="flex flex-row justify-start gap-3 ">
          {tag.length ? (
            tag.map((item) => (
              <div className="bg-blue-700/50 text-sm text-white p-2 rounded-full">
                {item}
              </div>
            ))
          ) : (
            <></>
          )}
        </div>
        <div>{desc}</div>
        {/* Buttons for refference */}
        <div className="flex flex-row gap-3">
          <a
            className="flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-5 py-2 text-md text-gray-600 shadow-md transition-colors hover:border-gray-800"
            href={gitLink}
            target="_blank"
          >
            <p>Mer info</p>
          </a>
          {demo ? (
            <a
              className=" flex max-w-fit items-center justify-center space-x-2 rounded-full border-gray-300 bg-black px-5 py-2 text-md text-gray-600 shadow-md transition-colors hover:border-blue-700 border-2"
              href="https://github.com/steven-tey/precedent"
              target="_blank"
            >
              <p className="text-white">Demo</p>
            </a>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
