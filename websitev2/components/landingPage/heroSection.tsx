"use client";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";

const textRotating = [
	"CSE Student",
	"Problem Solver",
	"Learner",
	"Frontend Developer",
];

const HeroSecion = () => {
	const [_, setRotatingText] = useState(0);
	useEffect(() => {
		const interval = setInterval(() => {
			document.getElementById("dynamicText")!.innerHTML = " ";
			setRotatingText((prev) => {
				for (let i = 0; i < textRotating[prev].length; i++) {
					setTimeout(() => {
						document.getElementById("dynamicText")!.innerHTML +=
							textRotating[prev].charAt(i);
					}, 50 * i);
				}
				return (prev + 1) % textRotating.length;
			});
		}, 4000);

		return () => clearInterval(interval);
	}, []);

	const handleMove = (ev: any) => {
		const blob = document.getElementById("blob");
		const { clientX, clientY } = ev;

		blob!.animate(
			{
				left: `${clientX}px`,
				top: `${clientY}px`,
			},
			{ duration: 1000, fill: "forwards" }
		);
	};

	return (
		<div
			className="w-full  md:h-[90vh] flex justify-center overflow-hidden"
			onMouseMove={(ev) => handleMove(ev)}
		>
			<div
				className="w-[400px] h-[300px] absolute hidden lg:flex -z-20"
				id="blob"
			></div>
			<div className="w-full h-full absolute hidden md:flex -z-10 blur"></div>

			<div className="max-w-7xl flex flex-col md:flex-row md:justify-center items-center gap-5 p-5">
				{/* Text area */}
				<div className="text-center flex flex-col justify-between md:text-start space-y-3 w-full basis-1/2">
					<h1>
						Hi, my name is Brian.
						<br /> A
						<span
							className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
							id="dynamicText"
						>
							{" "}
							Fullstack Developer
						</span>
					</h1>
					<p>
						I am currently enrolled on my 3rd year at Chalmers as a
						CSE-student. I have been programming since high school (5
						years), developed IoT-products and software. In my free time, I
						like to learn and play games.
					</p>
					{/* Button group */}
					<div className="flex justify-center md:justify-normal items-center gap-3">
						<Link href="/#cv">
							<Button>View CV</Button>
						</Link>
						<Link href={"/#contacts"}>
							<Button type="button" variant="secondary">
								Contact Me
							</Button>
						</Link>
					</div>
				</div>
				{/* Image area */}
				<div className="hidden md:flex">
					<div className="w-[300px] h-[300px]  rounded-full overflow-hidden relative">
						<Image
							fill
							className="grayscale"
							src="https://cdn.discordapp.com/attachments/945421661577044051/1138563869292363856/ezgif.com-webp-to-jpg.jpg"
							objectFit="cover"
							alt="profile picture"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeroSecion;
