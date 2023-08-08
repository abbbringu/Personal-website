import React from "react";
import { Button } from "../ui/button";
import ProjectCard from "../projectCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
const projects = {
  frontend: [
    {
      title: "Personal website (current)",
      desc: "This project is a personal website developed using Next.js, React, and Tailwind CSS. ",
      demo: "sdf",
      info: "sdfasd",
      imageUrl:
        "https://cdn.discordapp.com/attachments/945421661577044051/1138565105706082354/image.png",
    },
    {
      title: "Resturant website",
      desc: "I developed a website which meet the need of my parents resturan business. Used Nextjs, React, Tailwind...",
      demo: "https://nextjs-13-resturant-app.vercel.app/",
      info: "sdfasd",
      imageUrl:
        "https://cdn.discordapp.com/attachments/945421661577044051/1138129030298746930/image.png",
    },
    {
      title: "Old personal wesite",
      desc: "First iteration of my personal website. Inspired from a car-rental tutorial I previously did.",
      demo: "https://personal-website-gules-rho.vercel.app",
      info: "sdfasd",
      imageUrl:
        "https://cdn.discordapp.com/attachments/945421661577044051/1138128618288062535/image.png",
    },
  ],
  python: [
    {
      title: "Quizlet webscraper",
      desc: "For some courses, we weren't provided with answers to the book's problems. So I build this to extract the answers from quizlet (Bypassing pay wall)",
      demo: "",
      info: "sdfasd",
      imageUrl:
        "https://cdn.discordapp.com/attachments/945421661577044051/1138132541317058740/Untitled_design.png",
    },
    {
      title: "Advent of Code",
      desc: "Given daily problems to solve in creative ways. Used python and a functional style of programming. (2022)",
      demo: "",
      info: "sdfasd",
      imageUrl:
        "https://camo.githubusercontent.com/45e775d95451f2bda211ee757d1a959671cf4c762feb1e7ccaca59925704e333/68747470733a2f2f626c6f67732e7361702e636f6d2f77702d636f6e74656e742f75706c6f6164732f323032302f31312f456b616f5151545845414d4134424e2e6a7067",
    },
    {
      title: "Web-bot Selenium",
      desc: "Will make certain actions in the web hourly. In my case doing a task in a web-game.",
      demo: "",
      info: "sdfasd",
      imageUrl:
        "https://cdn.discordapp.com/attachments/945421661577044051/1138132951700357130/Untitled_design1.png",
    },
  ],
  univeristy: [
    {
      title: "Concurrent programming basics",
      desc: "Three projects which used different mechanics to ensure concurrency and avoid deadlocks. Used Java and Erlang",
      demo: "",
      info: "sdfasd",
      imageUrl:
        "https://techdifferences.com/wp-content/uploads/2017/12/Untitled.jpg",
    },
    {
      title: "Matrix solver",
      desc: "Given a set matrix, we were tasked to write an algoithm and set hardware to solve it with minimum resource/cost. Used FPGA Assembler",
      demo: "",
      info: "sdfasd",
      imageUrl:
        "https://cdn5.vectorstock.com/i/1000x1000/40/99/matrix-mathematics-concept-flat-icon-vector-20664099.jpg",
    },
    {
      title: "Door larm system",
      desc: "Group project where different micro computers communicated with eachother. I was resposible for the door larm, and quality ensurance. Used C",
      demo: "",
      info: "sdfasd",
      imageUrl: "https://logowik.com/content/uploads/images/abb8294.jpg",
    },
  ],
};

const Certifications = () => {
  return (
    <div
      className="w-full flex justify-center items-center bg-white text-black"
      id="myWork"
    >
      <div className="max-w-6xl h-full w-full flex-col flex p-5 gap-3">
        <div className="text-center">
          <h1>My Work</h1>
        </div>
        <Tabs defaultValue="webdev" className="w-full">
          <div className="flex justify-center p-3">
            <TabsList>
              <TabsTrigger value="webdev">Web Dev</TabsTrigger>
              <TabsTrigger value="python">Python</TabsTrigger>
              <TabsTrigger value="univeristy">Univeristy</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="webdev">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 place-items-center">
              {/* card */}
              {projects.frontend.map((project) => (
                <ProjectCard
                  key={project.imageUrl}
                  title={project.title}
                  desc={project.desc}
                  demo={project.demo}
                  info={project.info}
                  imageUrl={project.imageUrl}
                />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="python">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 place-items-center">
              {/* card */}
              {projects.python.map((project) => (
                <ProjectCard
                  key={project.imageUrl}
                  title={project.title}
                  desc={project.desc}
                  demo={project.demo}
                  info={project.info}
                  imageUrl={project.imageUrl}
                />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="univeristy">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 place-items-center">
              {/* card */}
              {projects.univeristy.map((project) => (
                <ProjectCard
                  key={project.imageUrl}
                  title={project.title}
                  desc={project.desc}
                  demo={project.demo}
                  info={project.info}
                  imageUrl={project.imageUrl}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* More project card */}
        <div className="flex justify-center">
          <Button size="lg" variant="outline">
            <h3>Vew More Projects</h3>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
