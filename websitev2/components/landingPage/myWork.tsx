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
      imageUrl: "https://logowik.com/content/uploads/images/abb8294.jpg",
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
        "data:image/png;base64,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",
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
