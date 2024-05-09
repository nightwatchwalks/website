import {
	Flex,
	Heading,
	chakra,
	Image,
	LinkBox,
	Text,
	Link,
	LinkOverlay,
} from "@chakra-ui/react";
import DownArrow from "../icons/down-arrow";
import styles from "../../styles/intro.module.css";
import { useInView } from "react-intersection-observer";
import Section from "../section";
import SectionBackground from "../section-background";
import SectionContainer from "../section-container";
import { assetsUrl } from "../../config";
import { motion } from "framer-motion";

export default function Intro() {
	const { ref, inView } = useInView({ initialInView: true });

	return (
		<>
			<Section id={"intro"} minH={"100vh"} pt={0} justify={"center"}>
				<SectionBackground image={assetsUrl + "/images/sections/intro.webp"} />
				<SectionContainer px={0} minH={"none"}>
					<Image
						alt={"Heading GIF"}
						w={["270px", "320px", "350px"]}
						src={assetsUrl + "/images/heading.webp"}
						filter={"drop-shadow(0px 0px 10px black)"}
					/>

					<Flex
						ref={ref}
						justify={"center"}
						flexDir={"column"}
						align={"center"}
						mb={4}
					>
						<Heading
							className={
								inView
									? "animate__animated animate__zoomIn " + styles.logoAnimation
									: ""
							}
							mt={[-3, -3, -7]}
							fontSize={["7xl", "8xl", "9xl"]}
							color={"nw-yellow"}
							fontWeight={"900"}
							lineHeight={"0.93"}
							textAlign={"center"}
							whiteSpace={"pre-wrap"}
							textShadow={"#000000 0px 0px 10px"}
						>
							{"NIGHT\nWATCH"}
						</Heading>
						<Text
							className={
								inView
									? "animate__animated animate__zoomIn " + styles.subTextAnim
									: ""
							}
							mt={2}
							px={4}
							fontSize={["nw-sm", "nw-md", "nw-md"]}
							fontWeight={500}
							letterSpacing={["0.2rem", "0.25rem", "0.5rem"]}
							borderTop={"1px solid #ffffffcc"}
							borderBottom={"1px solid #ffffffcc"}
							py={2}
							textShadow={"#000000 0px 0px 10px"}
						>
							{"•"}
							<chakra.span fontWeight={"400"}>IMPOSSIBLE </chakra.span>
							<chakra.span fontWeight={"400"}>TRIOS</chakra.span>
							{"•"}
						</Text>
					</Flex>

					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: [0, 1] }}
						viewport={{ once: true }}
						transition={{ ease: "easeOut", duration: 1, delay: 0.75 }}
					>
						<LinkBox>
							<Flex
								mt={"1rem"}
								bg={"nw-yellow"}
								p={2}
								boxShadow={"0px 0px 15px 3px #000000"}
								justify={"center"}
								align={"center"}
								borderRadius={10}
								color={"black"}
								_hover={{
									bg: "#c79e24",
									cursor: "pointer",
								}}
							>
								<LinkOverlay href="https://bullrun.nightwatch.art">
									<Text
										textShadow={"0 0 black"}
										fontWeight={700}
										fontSize={["nw-xs", "nw-sm"]}
									>
										{"START THE BULL RUN"}
									</Text>
								</LinkOverlay>
							</Flex>
						</LinkBox>
						<Flex
							mt={"1rem"}
							bg={"nw-yellow"}
							p={2}
							boxShadow={"0px 0px 15px 3px #000000"}
							justify={"center"}
							align={"center"}
							borderRadius={10}
							color={"black"}
							_hover={{
								bg: "#c79e24",
								cursor: "pointer",
							}}
							onClick={() => {
								const target = document.getElementById("story");
								target.scrollIntoView({
									behavior: "smooth",
									block: "start",
								});
							}}
							px={4}
						>
							<Text
								textShadow={"0 0 black"}
								fontWeight={700}
								fontSize={["nw-xs", "nw-sm"]}
							>
								{"EXPLORE IMPOSSIBLE TRIOS"}
							</Text>
						</Flex>
					</motion.div>
					<DownArrow targetArea={"start"} targetSection={"story"} m={"2rem"} />
				</SectionContainer>
			</Section>
		</>
	);
}
