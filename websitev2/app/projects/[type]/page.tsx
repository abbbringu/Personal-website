"use client";

import React, { useEffect, useState, useRef } from "react";
import ProjectCard from "@/components/projectCard";
import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "@/components/ui/tabs";

import { projects } from "@/lib/consts";

const Projects = ({ params }: any) => {
	const changeValue = useRef(null);
	const [defaultValue, setDefaultValue] = useState("all");
	useEffect(() => {
		console.log("changed to something %s", changeValue?.current.value);
	}, [params.type]);

	return (
		<div className="flex justify-center p-5">
			<div className="flex flex-col">
				<h1 className="text-center">Projects</h1>
				<div className="w-full flex justify-center items-center text-black">
					<div className="max-w-6xl h-full w-full flex-col flex p-5 gap-3">
						<Tabs defaultValue={defaultValue} className="w-full">
							<div className="flex justify-center p-3">
								<TabsList ref={changeValue}>
									<TabsTrigger value="all">All</TabsTrigger>
									<TabsTrigger value="webdev">Web Dev</TabsTrigger>
									<TabsTrigger value="python">Python</TabsTrigger>
									<TabsTrigger value="univeristy">Univeristy</TabsTrigger>
								</TabsList>
							</div>
							<TabsContent value="all">
								<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 place-items-center">
									{/* card */}
									{projects.frontend
										.concat(projects.python)
										.concat(projects.univeristy)
										.map((project) => (
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
					</div>
				</div>
			</div>
		</div>
	);
};

export default Projects;
