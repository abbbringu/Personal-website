import React from "react";
import { Button } from "../ui/button";
import ProjectCard from "../projectCard";
import Link from "next/link";
import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "@/components/ui/tabs";
import { projects } from "@/lib/consts";

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
					<Link href="/projects/all">
						<Button size="lg" variant="outline">
							<h3>Vew More Projects</h3>
						</Button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Certifications;
