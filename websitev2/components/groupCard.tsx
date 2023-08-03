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
                  <div className="rounded-full relative w-11 h-10 bg-zinc-700 overflow-hidden">
                    <Image
                      src={card.imageUrl}
                      alt="Image on certification"
                      fill
                      style={{ objectFit: "fill" }}
                    />
                  </div>
                  <div>
                    <h4>{card.title}</h4>
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
