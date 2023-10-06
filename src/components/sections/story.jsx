import { Flex, Box, Link, chakra, Image, Text, Center } from "@chakra-ui/react";
import DownArrow from "../icons/down-arrow";
import { motion } from "framer-motion";
import Section from "../section";
import SectionBackground from "../section-background";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import SectionContainer from "../section-container";
import { assetsUrl } from "../../config";

export default function Story() {
	return (
		<Section>
			<SectionBackground image={assetsUrl + "/images/sections/story.webp"} />
			<SectionContainer textShadow={"#000000 0px 0px 10px"}>
				<Flex
					id={"story"}
					minH={"100vh"}
					flexDir={"column"}
					align={"center"}
					justify={"center"}
					py={"4rem"}
					fontFamily={"'Cinzel', sans-serif"}
					px={["0", "2rem", "4rem"]}
				>
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: [0, 1], y: [30, 0] }}
						viewport={{ once: true }}
						transition={{ ease: "easeOut", duration: 5, delay: 0 }}
					>
						<Box maxW={"500px"} px={[0, 2]}>
							<Image
								maxW={"100vw"}
								w={"100%"}
								src={assetsUrl + "/images/story/animal-group.webp"}
								alt={"Animal Group"}
								filter={"drop-shadow(0px 0px 10px black)"}
							/>
						</Box>
					</motion.div>
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: [0, 1] }}
						viewport={{ once: true }}
						transition={{ ease: "easeOut", duration: 1, delay: 0.125 }}
					>
						<Text
							color={"nw-yellow"}
							textTransform={"uppercase"}
							fontSize={["nw-md", "nw-lg", "nw-xl", "nw-2xl", "nw-3xl"]}
							textAlign={"center"}
							maxW={"960px !important"}
							w={"max-content"}
						>
							Story Of “Night Watch”
						</Text>
					</motion.div>
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: [0, 1] }}
						viewport={{ once: true }}
						transition={{ ease: "easeOut", duration: 1, delay: 0.25 }}
					>
						<Text
							px={[0, 1]}
							textAlign={"center"}
							fontSize={["nw-xs", "nw-sm", "nw-md", "nw-lg"]}
							mt={"1.25rem"}
						>
							Night Watch creates an{" "}
							<chakra.span color={"nw-yellow"}>impossible trio</chakra.span> by
							gathering three{" "}
							<chakra.span color={"nw-yellow"}>
								unlikely animals together.
							</chakra.span>{" "}
							The places, times and purposes of these trios are unknown, and{" "}
							<chakra.span color={"nw-yellow"}>no clues</chakra.span> are found
							about them.
						</Text>
					</motion.div>

					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: [0, 1] }}
						viewport={{ once: true }}
						transition={{ ease: "easeOut", duration: 1, delay: 0.375 }}
					>
						<Flex
							gap={3}
							mt={"2.5rem"}
							fontSize={["nw-2xs", "nw-xs", "nw-xs", "nw-sm"]}
						>
							<Box w={"20px"} bg={"nw-yellow"}></Box>
							<Box textAlign={"justify"}>
								<Text>
									Each of these impossible trios, different from each other, has
									its own unique story and relationship. These trios are so
									unpredictable that we never know where the road will take
									them.
								</Text>
								<Text mt={5}>
									They may take over the world, or perhaps, they may spend their
									entire lives meaninglessly, and disappear without leaving a mere
									trace. They can be ambassadors of good, masters of evil, or
									they can wander pointlessly.
								</Text>
							</Box>
						</Flex>
					</motion.div>

					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: [0, 1] }}
						viewport={{ once: true }}
						transition={{ ease: "easeOut", duration: 1, delay: 0.5 }}
						style={{ marginTop: "2.5rem" }}
					>
						<Text
							textAlign={"center"}
							fontSize={["nw-2xs", "nw-sm", "nw-sm", "nw-md"]}
						>
							Whatever the reason for their{" "}
							<chakra.span color={"nw-yellow"}>being on the road,</chakra.span>{" "}
							there is one{" "}
							<chakra.span color={"nw-yellow"}>thing we know</chakra.span> for
							sure about them:
						</Text>
						<Text
							textAlign={"center"}
							fontWeight={"400"}
							fontSize={["nw-xs", "nw-md", "nw-md", "nw-lg"]}
							mt={5}
						>
							In all this uncertainty, although it seems impossible, they{" "}
							<chakra.span color={"nw-yellow"}>are together </chakra.span>
							and moving in the{" "}
							<chakra.span color={"nw-yellow"}>same direction!</chakra.span>
						</Text>
					</motion.div>
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: [0, 1] }}
						viewport={{ once: true }}
						transition={{ ease: "easeOut", duration: 0.5, delay: 0.5 }}
					>
						<Flex
							fontSize={["nw-2xs", "nw-xs", "nw-sm"]}
							gap={"0.75rem"}
							align={"center"}
							_hover={{
								textDecor: "underline",
							}}
							mt={"2.5rem"}
						>
							<Link href={"/story"}>
								<Text textAlign={"center"} px={[0, "2rem"]}>
									Read more about the story of Night Watch{" "}
									<ExternalLinkIcon verticalAlign={"baseline"} />
								</Text>
							</Link>
						</Flex>
						<Center>
							<DownArrow targetSection={"what-is-nw"} />
						</Center>
					</motion.div>
				</Flex>
			</SectionContainer>
		</Section>
	);
}
