import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { ArrowUpRightFromCircleIcon, InfoIcon } from "lucide-react";
import Link from "next/link";

interface projectCardProp {
	title: string;
	desc: string;
	demo?: string;
	info: string;
	imageUrl: string;
}

const ProjectCard: React.FC<projectCardProp> = ({
	title,
	desc,
	demo,
	info,
	imageUrl,
}) => {
	return (
		<div className="h-[450px] border w-full rounded-2xl relative bg-slate-900 text-white overflow-hidden z-0 group">
			{/* Blob */}
			<div
				className="absolute -z-20 bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rounded-full w-0 h-0 group-hover:w-64 group-hover:h-64  transition-all duration-700  
              bg-gradient-to-r from-pink-500 to-purple-600  blur-3xl"
			></div>
			{/* Image */}
			<div className="bg-sky-300 h-2/5 relative">
				<Image src={imageUrl} alt="Project Image" fill objectFit="cover" />
			</div>
			<div className="p-3 flex flex-col w-full h-full ">
				<div className=" absolute bottom-5 right-5 text-black">
					{demo ? (
						<Link href={demo} target="_blank">
							<Button variant="default" size="sm" className="mr-3">
								Demo
								<ArrowUpRightFromCircleIcon className="w-4 h-4 ml-2 group-hover:ml-3 group-hover:scale-110 transition-all" />
							</Button>
						</Link>
					) : (
						<></>
					)}
					{info ? (
						<Link href={info} target="_blank">
							<Button variant="outline" size="sm">
								Info
								<InfoIcon className="w-4 h-4 ml-2 group-hover:ml-3 group-hover:scale-110 transition-all" />
							</Button>
						</Link>
					) : (
						<></>
					)}
				</div>
				<div>
					<h3>{title}</h3>
					<p>{desc}</p>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
