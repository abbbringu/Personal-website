import React from "react";
import Image from "next/image";

export default function Education() {
  return (
    <div className="max-w-6xl w-full">
      {/*<!-- Component: User feed --> */}
      <div className="text-center">
        <h1>Education</h1>
      </div>
      <ul
        aria-label="Education feed"
        role="feed"
        className="relative flex flex-col gap-12 py-12 pl-8 before:absolute before:top-0 before:left-8 before:h-full before:-translate-x-1/2 before:border before:border-dashed before:border-slate-200 after:absolute after:top-6 after:left-8 after:bottom-6 after:-translate-x-1/2 after:border after:border-slate-200 "
      >
        <li role="article" className="relative pl-8 ">
          <div className="flex flex-col flex-1 gap-4">
            <a
              href="#"
              className="absolute z-10 inline-flex items-center justify-center w-8 h-8 text-white rounded-full -left-4 ring-2 ring-white"
            >
              <Image
                src="https://yt3.googleusercontent.com/ytc/AOPolaShKXWIzSyykyL-ZCtYXiYzyzEmCnD8sKCCmEKcXw=s900-c-k-c0x00ffffff-no-rj"
                alt="user name"
                title="user name"
                width="48"
                height="48"
                className="max-w-full rounded-full"
              />
            </a>
            <h4 className="flex flex-col items-start text-lg font-medium leading-8 text-slate-700 md:flex-row lg:items-center">
              <span className="flex-1">
                Chalmers University of Technology
                <span className="text-base font-normal text-slate-500">
                  {" "}
                  Computer Science (2021 - 2026)
                </span>
              </span>
            </h4>
            <p className=" text-slate-500">
              Relevant courses: Intro Object Oriented Programming, Intro
              Functional Programming, Datakommunikation, Maskinorienterad
              programmering, Datastrukturer och algoritmer, Digital
              konstruktion, Principer för parallell programmering och
              Datorsystemteknik
            </p>
          </div>
        </li>
        <li role="article" className="relative pl-8 ">
          <div className="flex flex-col flex-1 gap-4">
            <a
              href="#"
              className="absolute z-10 inline-flex items-center justify-center w-8 h-8 text-white rounded-full -left-4 ring-2 ring-white"
            >
              <Image
                src="data:image/png;base64,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"
                alt="user name"
                title="user name"
                width="48"
                height="48"
                className="max-w-full rounded-full"
              />
            </a>
            <h4 className="flex flex-col items-start text-lg font-medium leading-8 text-slate-700 md:flex-row lg:items-center">
              <span className="flex-1">
                Blekinge Institute of Technology
                <span className="text-base font-normal text-slate-500">
                  {" "}
                  Summer course (2022)
                </span>
              </span>
            </h4>
            <p className=" text-slate-500">Visual Design and Programming</p>
          </div>
        </li>
        <li role="article" className="relative pl-8 ">
          <div className="flex flex-col flex-1 gap-4">
            <a
              href="#"
              className="absolute z-10 inline-flex items-center justify-center w-8 h-8 text-white rounded-full -left-4 ring-2 ring-white"
            >
              <Image
                src="data:image/png;base64,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"
                alt="user name"
                title="user name"
                width="48"
                height="48"
                className="max-w-full rounded-full"
              />
            </a>
            <h4 className="flex flex-col items-start text-lg font-medium leading-8 text-slate-700 md:flex-row lg:items-center">
              <span className="flex-1">
                Mälardalens Univeristy
                <span className="text-base font-normal text-slate-500">
                  {" "}
                  Courses (2019-2020)
                </span>
              </span>
            </h4>
            <p className=" text-slate-500">
              Computer Programming With Python and Basic Project in Robotics{" "}
            </p>
          </div>
        </li>
        <li role="article" className="relative pl-8 ">
          <div className="flex flex-col flex-1 gap-4">
            <a
              href="#"
              className="absolute z-10 inline-flex items-center justify-center w-8 h-8 text-white rounded-full -left-4 ring-2 ring-white"
            >
              <Image
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAulBMVEXz8u3/ABD/UkvcAAD/AAD/VU3/AAn0+PP+JyzolJHwNzLiFRLy+vP6npb6gIH/SkP12tP/QzztAAn0AAvx3tj3uLXy/fbiAAT4paPom5bz7+n3AAz/Jif05ODsv7n119PfPDrkcm/1y8b7Y2T5k5HmhYH6e3zeJSTrr6viWlj/TEb/Fx/8TlHvzsn+NTn8UFLmQ0D+aWH9dGz8hX3+Xlb3wLj4sKnxOTTfNjTnIx/gS0njZ2PppqHke3fOscsSAAAELElEQVR4nO2bjVraMBSGpSkNjjpxQ1QmbkOnAuo2Nzfdz/3f1uS3iKXkyxPTk+57ryDfc8LJy2mytUUIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCHEDl32AmD00aiBMOqVvWIUfZFAxGdp2UvG0CfqoIaQJIElTAdKQQlr8X5YP8W2UuoNlvCqU/aiEdJPjwnRIr4PqYh6HFC9xRKeB/RL1JeThGCvibtlr9uc9MMkIbpND4PZpvp6GhDsNUkjmF6TfpwlRIvYD6WIvXlA9MA4DaSI+miREOs1tTgQOe00FwnVOyxhGHL6qKTKsojJKIgfYmewlLCSctpeDlhFOZ0qqXURWwEU8WnA6snpTEmte418Oe3cryREDwzpcrpQUutecyN8m2ZKat1rhMtp93nAaslpepSTsFJyqi9yElZJTp8oqfWBIVlO00FuwgrJaS8/INprPovdpqtKal1EuZPTdQGrIqfPlNS219TisqOsYT4lzQOVU5FFzFFS216TyJTTPCW17jUi5TRPSW2LGJ8KLKLOU9KMCshpvpJmBC+na5TUtohJLC7hOiXNgBLKk1Pd3hQw9MnpeiW1LqIwOdWbA4YtpwVKmoEeGKImp0VKar1NJU1OC5U0I+DP+sVKal1EQXJarKS2RRQ0Od2gpBnByunyh/tiApXTjUpqW0Qxk9PNSpoBJZQipwZKmhGknJooqXURW2Wnm4AEDFFOUxMlzZD8Wb/XyqX95aCJIPezvu4f7+US1SFuEqiIPien+uswckAdSuhVTvX+npOEDSiiVzntOqlhNASL6FFO07NdFwnrIyyhTzltu9mme1iv8Smn6a2bXgPV0Kuc6rtSes2VzwOj7iJhFIG9xuPkND1002uOsYQ+5bTnZJtGu2AR/QXcSr+56TXggeFTTq/d9BpUTn0eGN9dJIwiqIZ+5fSHm16DyqnHXtN1kjAaxlgRKacO0a1S5DT22Gs05dQwISqnHv8Iaze9RrCc6h3KqRmYnHqdnP4HctovRU59ftbXlZfTtCQ59Tk5dSSncienHTezYblyqk8O3IykxE5O04FyVESohh7ltK3Ug5MiggeGNzmdfLh3ETASK6fjr9U/3RRRpJxO75I23fQakXI6e3Hv5kgUKaezu6QPht/th7uFNGKIhoeEi7ukr8y43SnmNcR5++UTmt4lndNKdSEpxssHNL5LOuOXgEtNGJueN61yKeJ2IQBwl3RKcCXsAHdJx2yHVsK1L+7XIeamtinYXVKlfge3SbG7pEoJejFhhtHzpiXuQwto+Lwp409oCQ2fN2WUvWAY0+dNc/4G12dgJS17wShU0lXuguszoJI2QwsIPW8asx3cJkWeN40JTkl1fxsiuNP+MSJI2eslhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghpIr8A5jSg6E/LdvuAAAAAElFTkSuQmCC"
                alt="user name"
                title="user name"
                width="48"
                height="48"
                className="max-w-full rounded-full"
              />
            </a>
            <h4 className="flex flex-col items-start text-lg font-medium leading-8 text-slate-700 md:flex-row lg:items-center">
              <span className="flex-1">
                ABB Gymnasiet
                <span className="text-base font-normal text-slate-500">
                  {" "}
                  Teknikspets (2018-2021)
                </span>
              </span>
            </h4>
            <p className=" text-slate-500">
              Made a lot of projects involving software, hardware, IOT, AI and
              hackathons.
            </p>
          </div>
        </li>
        <li role="article" className="relative pl-8 ">
          <div className="flex flex-col flex-1 gap-4">
            <a
              href="#"
              className="absolute z-10 inline-flex items-center justify-center w-8 h-8 text-white rounded-full -left-4 ring-2 ring-white"
            >
              <Image
                src="https://yt3.googleusercontent.com/mxn6ZPPpgYtx1UQA7Uu6BaoiBvcWs_DJb9EORbGBo5NNmobgoL8Y4mniW08o--uMuxOf4nUsOw=s900-c-k-c0x00ffffff-no-rj"
                alt="user name"
                title="user name"
                width="100"
                height="100"
                className="max-w-full rounded-full"
              />
            </a>
            <h4 className="flex flex-col items-start text-lg font-medium leading-8 text-slate-700 md:flex-row lg:items-center">
              <span className="flex-1">
                Fryxellska Skolan
                <span className="text-base font-normal text-slate-500">
                  {" "}
                  Music profile (2012-2018){" "}
                </span>
              </span>
            </h4>
          </div>
        </li>
      </ul>
      {/*<!-- End User feed --> */}
    </div>
  );
}
