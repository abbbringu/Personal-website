import React from "react";
import {
	Avatar,
	AvatarFallback,
	AvatarImage,
} from "@/components/ui/avatar";
import Link from "next/link";

const contacts = () => {
	return (
		<div
			className="w-full flex-col justify-center items-center p-5 bg-white text-black"
			id="contacts"
		>
			<div className="text-center">
				<h1>Contacts</h1>
			</div>

			<div className="w-full flex items-center gap-10 py-5 p justify-center">
				<Link href={"https://github.com/abbbringu"} target="_blank">
					<Avatar>
						<AvatarImage src="https://cdn.discordapp.com/attachments/959117190735495228/1180268509947772948/image.png?ex=657ccdb5&is=656a58b5&hm=c23df48a0a20d944c100a7786ec27dd79cd88b99ad1c423f78c4fca4d02d9569&" />
						<AvatarFallback>GH</AvatarFallback>
					</Avatar>
				</Link>
				<Link
					href={"https://www.linkedin.com/in/brian-nguyen-data/"}
					target="_blank"
				>
					<Avatar>
						<AvatarImage src="https://cdn.discordapp.com/attachments/959117190735495228/1180268240690221056/image.png?ex=657ccd74&is=656a5874&hm=4f76d9f48ae7fa4cb887090e873c6f905bd2fe42aea999b4a8338025b3d0b327&" />
						<AvatarFallback>Ln</AvatarFallback>
					</Avatar>
				</Link>
				<Link href={"mailto:brianphi.nguyen@gmail.com"} target="_blank">
					<Avatar>
						<AvatarImage src="https://cdn.discordapp.com/attachments/959117190735495228/1180268680978911312/image.png?ex=657ccddd&is=656a58dd&hm=69ae77d0b3c5886064fe154de9dc1ac51f3b9f07073461f32d8a70e898028bb9&" />
						<AvatarFallback>Ml</AvatarFallback>
					</Avatar>
				</Link>
			</div>
		</div>
	);
};

export default contacts;
