import { Flex, Box, chakra, Heading, Text } from "@chakra-ui/react";
import DownArrow from "../icons/down-arrow";
import { motion } from "framer-motion";
import Section from "../section";
import SectionBackground from "../section-background";
import SectionContainer from "../section-container";
import CustomDivider from "../custom-divider";
import CollectNowButton from "components/collect-now-button";
import { assetsUrl } from "../../config";

export default function WhatIsNW() {
	return (
		<Section>
			<SectionBackground
				image={assetsUrl + "/images/sections/what-is-nw.webp"}
			/>
			<SectionContainer maxW={"1200px"} textShadow={"#000000 0px 0px 10px"}>
				<Flex
					id={"what-is-nw"}
					minH={"100vh"}
					flexDir={"column"}
					align={"center"}
					justify={"center"}
					py={"8rem"}
					px={["1rem", "2rem", 0]}
				>
					<Box textAlign={"center"}>
						<motion.div
							initial={{ opacity: 0 }}
							whileInView={{ opacity: [0, 1] }}
							viewport={{ once: true }}
							transition={{ ease: "easeOut", delay: 0.125, duration: 1 }}
						>
							<Heading
								fontSize={["nw-lg", "nw-xl", "nw-2xl", "nw-3xl"]}
								fontWeight={"700"}
							>
								WHAT IS{" "}
								<chakra.span color={"nw-yellow"}>NIGHT WATCH?</chakra.span>
							</Heading>
						</motion.div>
					</Box>

					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: [0, 1] }}
						viewport={{ once: true }}
						transition={{ ease: "easeOut", delay: 0.25, duration: 1 }}
					>
						<Text
							px={["0rem", "1rem", "4rem", "6rem", "8rem", "12rem"]}
							textAlign={"center"}
							fontSize={["nw-xs", "nw-sm"]}
							mt={5}
							fontWeight={600}
						>
							<chakra.span fontWeight={"800"} color={"nw-yellow"}>
								"NIGHT WATCH"{" "}
							</chakra.span>
							is an experimental art collection featuring{" "}
							<chakra.span color={"nw-yellow"}>455</chakra.span>{" "}
							<chakra.span color={"nw-yellow"} fontWeight={"800"}>
								animations
							</chakra.span>{" "}
							<chakra.span color={"nw-yellow"}>
								of impossible animal trios
							</chakra.span>{" "}
							wandering in a mysterious void.
						</Text>
						<CustomDivider />
					</motion.div>

					<Flex
						flexDir={["column", "column", "row"]}
						align={"center"}
						justify={"center"}
						py={["0", "0", "2rem"]}
						gap={"4rem"}
					>
						<IntroVideo />
						<Box flex={1}>
							<Box
								fontWeight={400}
								fontSize={["nw-xs", "nw-sm", "nw-xs", "nw-sm"]}
								textAlign={["center", "center", "left"]}
								wordBreak={"break-word"}
							>
								<motion.div
									initial={{ opacity: 0 }}
									whileInView={{ opacity: [0, 1] }}
									viewport={{ once: true }}
									transition={{ ease: "easeOut", delay: 0.675, duration: 1 }}
								>
									<Text mt={[0, 0, 5]}>
										Each animation consists of{" "}
										<chakra.span color={"nw-yellow"}>15 frames</chakra.span>,
										and each frame is a digital collectible.
									</Text>
									<Text fontWeight={400} mt={5}>
										To form a complete animation, same frames of a specific
										animation should be collected in a single wallet. The{" "}
										<chakra.span fontWeight={"500"}>goal </chakra.span>
										is to assemble all 15 frames to{" "}
										<chakra.span color={"nw-yellow"}>complete</chakra.span> the
										entire animation.
									</Text>
									<Text fontWeight={400} mt={5}>
										It's a project based on street artist Kaybid's "Silent
										Steps" series. Each animal in Night Watch has been featured
										in animations created by Kaybid for the streets.
									</Text>
								</motion.div>
							</Box>
						</Box>
					</Flex>
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: [0, 1] }}
						viewport={{ once: true }}
						transition={{ ease: "easeOut", delay: 0.675, duration: 1 }}
					>
						<CollectNowButton mt={"2rem"} mb={"3rem"} />
					</motion.div>
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: [0, 1] }}
						viewport={{ once: true }}
						transition={{ ease: "easeOut", delay: 0.675, duration: 1 }}
					>
						<DownArrow
							targetSection={"kaybid"}
							targetArea={"start"}
							m={0}
							mt={4}
						/>
					</motion.div>
				</Flex>
			</SectionContainer>
		</Section>
	);

	function IntroVideo() {
		return (
			<Flex flex={1} flexDir={"column"}>
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: [0, 1] }}
					viewport={{ once: true }}
					transition={{ ease: "easeOut", delay: 0.5, duration: 1 }}
					style={{ boxShadow: "0px 0px 10px 0px #000000" }}
				>
					<video autoPlay muted disablePictureInPicture loop playsInline>
						<source
							src="https://night-watch-walks.s3.us-east-1.amazonaws.com/media/night-watch-walks.webm"
							type="video/webm"
						/>
					</video>
				</motion.div>
			</Flex>
		);
	}
}
