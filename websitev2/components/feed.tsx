import React from "react";
import Image from "next/image";

interface FeedCard {
  title: string;
  subtitle: string;
  description: string;
  imageSrc?: string;
}

interface FeedProps {
  title: string;
  textStyle?: string;
  cards?: FeedCard[];
}

const Feed: React.FC<FeedProps> = ({ title, cards }) => {
  return (
    <div className="max-w-6xl w-full">
      {/*<!-- Component: User feed --> */}
      <div className="text-center">
        <h1>{title}</h1>
      </div>
      <ul
        aria-label="Education feed"
        role="feed"
        className="relative flex flex-col gap-12 py-12 pl-8 before:absolute before:top-0 before:left-8 before:h-full before:-translate-x-1/2 before:border before:border-dashed before:border-slate-300 after:absolute after:top-6 after:left-8 after:bottom-6 after:-translate-x-1/2 after:border after:border-slate-300 "
      >
        {cards?.map((card) => (
          <li role="article" className="relative pl-8" key={card.subtitle}>
            <div className="flex flex-col flex-1 gap-4">
              <a
                href="#"
                className="absolute z-10 inline-flex items-center justify-center w-8 h-8 text-white rounded-full -left-4 ring-2 ring-white"
              >
                <Image
                  src={card.imageSrc || ""}
                  alt="user name"
                  title="user name"
                  width="48"
                  height="48"
                  className="max-w-full rounded-full"
                />
              </a>
              <h4 className="flex flex-col items-start text-lg font-medium leading-8  md:flex-row lg:items-center">
                <span className="flex-1">
                  {card.title}
                  <span className="text-base font-normal text-slate-500">
                    {" "}
                    {card.subtitle}
                  </span>
                </span>
              </h4>
              <p className=" text-slate-500">{card.description}</p>
            </div>
          </li>
        ))}
      </ul>
      {/*<!-- End User feed --> */}
    </div>
  );
};

export default Feed;
