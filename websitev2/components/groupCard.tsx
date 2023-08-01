"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

interface cardProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  certificateUrl: string;
}

interface groupCardProps {
  cards: cardProps[];
}

const GroupCard: React.FC<groupCardProps> = ({ cards = [] }) => {
  const handleMove = () => {
    document.getElementById("cards")!.onmousemove = (e) => {
      for (const card of document.getElementsByClassName(
        "card"
      ) as HTMLCollectionOf<HTMLElement>) {
        const rect = card.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      }
    };
  };
  return (
    <div
      className="flex flex-col items-center gap-5 p-5 justify-center"
      onMouseMove={() => handleMove()}
    >
      <header className="text-center">
        <h1>Certificates</h1>
        <h3 className="text-gray-300">(Click to see certificate)</h3>
      </header>
      <div id="cards">
        {cards.map((card) => (
          <Link
            className="card"
            href={card.certificateUrl}
            key={card.certificateUrl}
            target="_blank"
          >
            <div className="card relative group">
              <div className="card-content">
                <div className="flex gap-3 items-start">
                  <div className="rounded-full relative w-12 h-12 bg-white overflow-hidden">
                    <Image
                      src={card.imageUrl}
                      alt="Image on certification"
                      fill
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                  <div>
                    <h3>{card.title}</h3>
                    <h4 className="text-sm text-slate-400">{card.subtitle}</h4>
                  </div>
                </div>
                <div className=" absolute text-black bottom-3 right-3 z-10 cursor-pointer">
                  <Button variant="outline" size="sm">
                    View Certificate
                    <ArrowRight className="w-5 h-5 ml-1 group-hover:ml-3 group-hover:scale-110 transition-all" />
                  </Button>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GroupCard;
