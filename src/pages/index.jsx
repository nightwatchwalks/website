import { Flex, Icon, IconButton, useDisclosure } from "@chakra-ui/react";
import Intro from "../components/sections/intro";
import WhatIsNW from "../components/sections/what-is-nw";
import Merge from "../components/sections/merge";
import FAQ from "../components/sections/faq";
import Crew from "../components/sections/crew";
import Footer from "../components/sections/footer";
import { AiOutlineArrowUp, AiOutlineMenu } from "react-icons/ai";
import DrawerMenu from "../components/drawer";
import { useEffect, useRef, useState } from "react";
import ProjectDetails from "../components/sections/project-details";
import Kaybid from "../components/sections/kaybid";
import dynamic from "next/dynamic";
import { useIsMounted } from "../hooks/useIsMounted";

const Story = dynamic(() => import("../components/sections/story"), {
	ssr: false,
});

export default function Home() {
	const isMounted = useIsMounted();

	return (
		isMounted && (
			<Flex flexDir={"column"}>
				<Intro />
				<Story />
				<WhatIsNW />
				<Kaybid />
				<ProjectDetails />
				<Merge />
				<FAQ />
				<Crew />
				<Footer />
				<FixedIcons />
			</Flex>
		)
	);
}

function FixedIcons() {
	const [scrollY, setScrollY] = useState(0);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			setScrollY(window.scrollY);
		});
	}, []);
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = useRef();

	return (
		<>
			<IconButton
				display={scrollY > 100 ? "block" : "none"}
				position={"fixed"}
				zIndex={100}
				bottom={"3em"}
				right={"3em"}
				boxSize={"3rem"}
				onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
				icon={<Icon boxSize={"2rem"} as={AiOutlineArrowUp} />}
				aria-label={"Go To Top"}
			/>
			<IconButton
				aria-label={"Menu"}
				position={"fixed"}
				zIndex={100}
				top={[4, 6, 8, 10]}
				left={[4, 6, 8, 10]}
				ref={btnRef}
				variant={"outline"}
				onClick={onOpen}
				boxSize={["2.5em", "3em", "3.5em"]}
				transform={"rotate(180deg)"}
				icon={
					<Icon boxSize={["1.5em", "2.25em", "2.5em"]} as={AiOutlineMenu} />
				}
			/>
			<DrawerMenu isOpen={isOpen} onClose={onClose} btnRef={btnRef} />
		</>
	);
}
