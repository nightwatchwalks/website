import {
	Flex,
	Box,
	Link,
	chakra,
	Image,
	Text,
	AspectRatio,
} from "@chakra-ui/react";
import DownArrow from "../icons/down-arrow";
import Section from "../section";
import SectionBackground from "../section-background";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import SectionContainer from "../section-container";
import CustomDivider from "../custom-divider";
import { motion } from "framer-motion";
import { assetsUrl } from "../../config";

const MotionFlex = motion(Flex);

export default function Kaybid() {
	return (
		<Section>
			<SectionBackground image={assetsUrl + "/images/sections/kaybid.webp"} />
			<SectionContainer maxW={"1200px"} textShadow={"#000000 0px 0px 10px"}>
				<Flex
					id={"kaybid"}
					minH={"100vh"}
					align={"center"}
					justify={"center"}
					py={"6rem"}
					flexDir={"column"}
					textAlign={"center"}
					px={["1rem", "2rem", "2rem", "4rem", 0]}
				>
					<Box
						fontSize={["nw-lg", "nw-xl", "nw-2xl", "nw-3xl"]}
						fontWeight={"700"}
					>
						<motion.div
							initial={{ opacity: 0 }}
							whileInView={{ opacity: [0, 1] }}
							viewport={{ once: true }}
							transition={{ ease: "easeOut", delay: 0.125, duration: 1 }}
						>
							<chakra.span color={"nw-yellow"}>{"KAYBID "}</chakra.span>
							<chakra.span fontWeight={400}>{"AND "}</chakra.span>
							<chakra.span color={"nw-yellow"}>{"SILENT STEPS"}</chakra.span>
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
							fontWeight={500}
							mt={5}
						>
							<chakra.span color={"nw-yellow"} fontWeight={"700"}>
								SILENT STEPS,
							</chakra.span>{" "}
							is the premise project of{" "}
							<chakra.span color={"nw-yellow"} fontWeight={"700"}>
								Night Watch
							</chakra.span>{" "}
							that was created by the street artist,{" "}
							<chakra.span color={"nw-yellow"} fontWeight={"700"}>
								Kaybid.
							</chakra.span>
						</Text>
						<CustomDivider />
					</motion.div>
					<Flex
						flexDir={["column", "column", "row"]}
						align={["center", "center", "start"]}
						gap={8}
						justify={"center"}
						textAlign={["center", "center", "left"]}
					>
						<MotionFlex
							initial={{ opacity: 0 }}
							whileInView={{ opacity: [0, 1] }}
							viewport={{ once: true }}
							transition={{ ease: "easeOut", delay: 0.375, duration: 1 }}
							flex={1}
							flexDir={"column"}
						>
							<AspectRatio
								w={"full"}
								maxW={"720px"}
								ratio={16 / 10}
								boxShadow="0px 0px 10px 0px #000000"
							>
								<iframe
									src="https://www.youtube-nocookie.com/embed/lyU31zPyY6I?cc_lang_pref=en&cc_load_policy=1"
									title="YouTube video player"
									frameBorder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
									allowFullScreen
								></iframe>
							</AspectRatio>
							<Box mt={3} textAlign={"center"}>
								<Text fontStyle={"italic"} fontWeight={"300"}>
									Kaybid's Documentary in the National Turkish Television
								</Text>
							</Box>
						</MotionFlex>

						<Box flex={1} fontSize={["nw-xs", "nw-sm", "nw-xs", "nw-sm"]}>
							<motion.div
								initial={{ opacity: 0 }}
								whileInView={{ opacity: [0, 1] }}
								viewport={{ once: true }}
								transition={{ ease: "easeOut", delay: 0.5, duration: 1 }}
							>
								<Text>
									The project has been ongoing for over four years, and{" "}
									<chakra.span fontWeight={"700"}>
										nearly 400 unique collages
									</chakra.span>
									, featuring{" "}
									<chakra.span fontWeight={"700"}>
										30 different species,
									</chakra.span>{" "}
									have been created and displayed on the streets.
								</Text>
							</motion.div>
							<motion.div
								initial={{ opacity: 0 }}
								whileInView={{ opacity: [0, 1] }}
								viewport={{ once: true }}
								transition={{ ease: "easeOut", delay: 0.675, duration: 1 }}
							>
								<Card
									image={assetsUrl + "/images/kaybid/unicorn-in-streets.webp"}
									title={"KAYBID, SILENT STEPS, AND STREET ART"}
									url={"/kaybid"}
								/>
							</motion.div>
							<motion.div
								initial={{ opacity: 0 }}
								whileInView={{ opacity: [0, 1] }}
								viewport={{ once: true }}
								transition={{ ease: "easeOut", delay: 0.75, duration: 1 }}
							>
								<Card
									image={assetsUrl + "/images/kaybid/map.webp"}
									title={
										"DOCUMENTING MAPPING, AND THE EXTINCTION OF SILENT STEPS"
									}
									url={"/silentsteps"}
								/>
							</motion.div>
							<motion.div
								initial={{ opacity: 0 }}
								whileInView={{ opacity: [0, 1] }}
								viewport={{ once: true }}
								transition={{ ease: "easeOut", delay: 0.875, duration: 1 }}
							>
								<Card
									image={assetsUrl + "/images/kaybid/wwf1.webp"}
									title={"Cooperation For Wildlife With WWF"}
									url={"/wwf"}
								/>
							</motion.div>
							<motion.div
								initial={{ opacity: 0 }}
								whileInView={{ opacity: [0, 1] }}
								viewport={{ once: true }}
								transition={{ ease: "easeOut", delay: 1, duration: 1 }}
							>
								<Text
									fontSize={"nw-xs"}
									fontWeight={400}
									textShadow={"0px 0px 20px 0px #000000"}
									mt={2}
								>
									You can find more about Kaybid on{" "}
									<Link
										color={"blue.300"}
										href={"https://superrare.com/kaybid"}
										isExternal
									>
										SuperRare
									</Link>{" "}
									and{" "}
									<Link
										color={"blue.300"}
										href={"https://kaybid.live"}
										isExternal
									>
										his website.
									</Link>
								</Text>
							</motion.div>
						</Box>
					</Flex>
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: [0, 1] }}
						viewport={{ once: true }}
						transition={{ ease: "easeOut", delay: 1, duration: 1 }}
					>
						<DownArrow targetSection={"project-details"} targetArea={"start"} />
					</motion.div>
				</Flex>
			</SectionContainer>
		</Section>
	);

	function Card({ title, image, url, ...props }) {
		return (
			<Flex
				boxShadow={"0px 0px 10px 0px #000000"}
				fontSize={["nw-2xs", "nw-xs", "nw-2xs", "nw-xs"]}
				bg={"#ffffff10"}
				align={"center"}
				justify={"start"}
				mt={3}
				gap={1}
				{...props}
			>
				<Box flex={"1 1 0px"}>
					<Image
						boxShadow={"0px 0px 10px 0px #000000"}
						objectFit={"cover"}
						src={image}
						alt={"Night Watch Card"}
						maxH={"70px"}
					/>
				</Box>

				<Box
					flex={"3 1 0px"}
					_hover={{
						textDecor: "underline",
					}}
				>
					<Link
						textTransform={"uppercase"}
						fontWeight={"700"}
						color={"nw-yellow"}
						href={url}
						isExternal
					>
						{title + " "}
						<ExternalLinkIcon verticalAlign={"baseline"} />
					</Link>
				</Box>
			</Flex>
		);
	}
}
