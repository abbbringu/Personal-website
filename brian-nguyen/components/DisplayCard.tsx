import { DisplayCard } from "@/types";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const DisplayCard = ({ title, degree, from, to, link, image }: DisplayCard) => {
  return (
    <div>
      <Link href={link} target="_blank">
        <div className="w-full outline-blue-700 outline outline-0 hover:outline-2  rounded-sm transition cursor-pointer">
          <div className="flex flex-row justify-start items-center gap-4 mt-2">
            <div>
              <Image
                src={image}
                width={60}
                height={60}
                alt="logo"
                className="rounded-xl"
              />
            </div>
            <div className="flex flex-col">
              <p className="font-semibold">{title}</p>
              <div className="text-[13px] whitespace-normal">{degree}</div>
              <p>
                {from} - {to}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default DisplayCard;
