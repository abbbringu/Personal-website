"use client";
import React from "react";

import Link from "next/link";
import { cn } from "@/lib/utils";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const components: { title: string; href: string; description: string }[] =
	[
		{
			title: "Education",
			href: "/#education",
			description:
				"About high school, university and other relevant information",
		},
		{
			title: "Experience",
			href: "/#experience",
			description:
				"See previous work experiences. Summer work and freelance",
		},
		{
			title: "Certification",
			href: "/#certification",
			description:
				"Online certifications I've been taking. Mostly from Coursera.",
		},
		{
			title: "My work",
			href: "/#myWork",
			description: "Showcase my proudest projects related to coding.",
		},
		{
			title: "View CV",
			href: "/#cv",
			description:
				"View my most up to date CV, either in browser or download",
		},
		{
			title: "Contact",
			href: "/#contact",
			description:
				"How can I help you? Get in touch and we'll set up a date",
		},
	];

const Navigation = () => {
	return (
		<NavigationMenu className="">
			<NavigationMenuList>
				<NavigationMenuItem className="pr-10 md:pr-0">
					<Link href="/" legacyBehavior passHref>
						<NavigationMenuLink className={navigationMenuTriggerStyle()}>
							Home
						</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuTrigger>Projects</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid gap-3 p-6 w-[290px] md:w-[500px] sm:w-[400px] lg:grid-cols-[.75fr_1fr] ">
							<li className="row-span-3">
								<NavigationMenuLink asChild>
									<a
										className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-gray-300 hover:from-purple-600/50  hover:to-pink-600/50  p-6 no-underline outline-none focus:shadow-md"
										href="/projects/all"
									>
										<div className="mb-2 mt-4 text-lg font-medium">
											View All Projects
										</div>
										<p className="text-sm leading-tight text-muted-foreground">
											All my projects from my 5 years of coding experience.
										</p>
									</a>
								</NavigationMenuLink>
							</li>
							<ListItem href="/projects/webdev" title="Web Development">
								View all my frontend / fullstack projects.
							</ListItem>
							<ListItem href="/projects/python" title="Python">
								Everything from automation bots to problem solving with
								python.
							</ListItem>
							<ListItem href="/projects/uniwork" title="University Work">
								Projects made in conjunction with courses. Java, Erland, c
								etc
							</ListItem>
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem className="pl-5 md:pl-0">
					<NavigationMenuTrigger>Find</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid w-[280px] sm:w-[380px] gap-3 p-4 md:w-[510px] md:grid-cols-2 lg:w-[600px] ">
							{components.map((component) => (
								<ListItem
									key={component.title}
									title={component.title}
									href={component.href}
								>
									{component.description}
								</ListItem>
							))}
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	);
};

const ListItem = React.forwardRef<
	React.ElementRef<"a">,
	React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<a
					ref={ref}
					className={cn(
						"block select-none max-w-max space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
						className
					)}
					{...props}
				>
					<div className="text-sm font-medium leading-none">{title}</div>
					<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
						{children}
					</p>
				</a>
			</NavigationMenuLink>
		</li>
	);
});
ListItem.displayName = "ListItem";

export default Navigation;
