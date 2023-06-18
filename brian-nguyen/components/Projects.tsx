import Image from "next/image";
import ProjectCard from "./ProjectCard";
import { highlightProject } from "@/const";

const Projects = () => {
  return (
    <div id="projects" className="flex flex-col items-star container gap-5">
      <div className="w-full">
        <p className="sub__title border-b-2 text-center">Projekt</p>
      </div>
      {highlightProject.map((card) => (
        <ProjectCard
          title={card.title}
          desc={card.desc}
          tag={card.tag}
          gitLink={card.gitLink}
          demo={card.demo}
          image={card.thumbnail}
        />
      ))}
    </div>
  );
};

export default Projects;
