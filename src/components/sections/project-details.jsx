import { Flex, Box, chakra, Image, Text, Icon, Center } from "@chakra-ui/react";
import DownArrow from "../icons/down-arrow";
import Section from "../section";
import SectionBackground from "../section-background";
import { GiCircle } from "react-icons/gi";
import SectionContainer from "../section-container";
import CustomDivider from "../custom-divider";
import { Chrono } from "react-chrono";
import { useIsMounted } from "../../hooks/useIsMounted";
import { motion } from "framer-motion";
import CollectNowButton from "components/collect-now-button";
import { assetsUrl } from "../../config";
const MotionBox = motion(Box);
const MotionImage = motion(Image);

const items = [
	{
		title: (
			<MotionImage
				filter={"drop-shadow(0px 0px 10px black)"}
				src={assetsUrl + "/images/project-details/caretta.webp"}
				alt={"Caretta"}
				initial={{ opacity: 0 }}
				whileInView={{ opacity: [0, 1] }}
				viewport={{ once: true }}
				transition={{ ease: "easeOut", duration: 1, delay: 0.675 }}
			/>
		),
	},
	{
		title: (
			<MotionImage
				filter={"drop-shadow(0px 0px 10px black)"}
				src={assetsUrl + "/images/project-details/giraffe.webp"}
				alt={"Giraffe"}
				initial={{ opacity: 0 }}
				whileInView={{ opacity: [0, 1] }}
				viewport={{ once: true }}
				transition={{ ease: "easeOut", duration: 1, delay: 0.675 }}
			/>
		),
	},
	{
		title: (
			<MotionImage
				filter={"drop-shadow(0px 0px 10px black)"}
				src={assetsUrl + "/images/project-details/gorilla.webp"}
				alt={"Gorilla"}
				initial={{ opacity: 0 }}
				whileInView={{ opacity: [0, 1] }}
				viewport={{ once: true }}
				transition={{ ease: "easeOut", duration: 1, delay: 0.675 }}
			/>
		),
	},
];

export default function ProjectDetails() {
	const isMounted = useIsMounted();
	return (
		isMounted && (
			<Section>
				<SectionBackground
					image={assetsUrl + "/images/sections/project-details.webp"}
				/>
				<SectionContainer textShadow={"#000000 0px 0px 10px"}>
					<Flex
						id={"project-details"}
						minH={"100vh"}
						flexDir={"column"}
						align={"center"}
						justify={"center"}
						py={"4rem"}
					>
						<Box maxW={["300px"]}>
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: [0, 1], y: [20, 0] }}
								viewport={{ once: true }}
								transition={{ ease: "easeOut", duration: 2.5, delay: 0 }}
							>
								<Image
									src={
										assetsUrl +
										"/images/project-details/giraffe-seahorse-elephant.webp"
									}
									alt={"Project Details"}
									filter={"drop-shadow(0px 0px 10px black)"}
									marginTop={5}
								/>
							</motion.div>
						</Box>
						<Box
							fontSize={["nw-lg", "nw-xl", "nw-2xl", "nw-4xl"]}
							textAlign={"center"}
						>
							<motion.div
								initial={{ opacity: 0 }}
								whileInView={{ opacity: [0, 1] }}
								viewport={{ once: true }}
								transition={{ ease: "easeOut", duration: 1, delay: 0.125 }}
							>
								<chakra.span fontWeight={"300"}>{"PROJECT "}</chakra.span>
								<chakra.span color={"nw-yellow"} fontWeight={900}>
									DETAILS
								</chakra.span>
							</motion.div>
						</Box>
						<motion.div
							initial={{ opacity: 0 }}
							whileInView={{ opacity: [0, 1] }}
							viewport={{ once: true }}
							transition={{ ease: "easeOut", duration: 1, delay: 0.25 }}
						>
							<Text
								px={["0rem", "1rem", "4rem", "6rem", "8rem", "10rem"]}
								textAlign={"center"}
								fontSize={["nw-xs", "nw-sm"]}
								fontWeight={500}
							>
								<chakra.span color={"nw-yellow"} fontWeight={"700"}>
									NIGHT WATCH
								</chakra.span>{" "}
								is a unique project with distinctive mechanisms, including
								multiple layers such as the merging of frames on-chain.
							</Text>
						</motion.div>
						<motion.div
							initial={{ opacity: 0 }}
							whileInView={{ opacity: [0, 1] }}
							viewport={{ once: true }}
							transition={{ ease: "easeOut", duration: 1, delay: 0.375 }}
						>
							<Text
								px={["0rem", "1rem", "4rem", "6rem", "8rem", "10rem"]}
								textAlign={"center"}
								fontSize={["nw-xs", "nw-sm"]}
								fontWeight={500}
								mt={5}
							>
								<chakra.span fontWeight={"700"} color={"nw-yellow"}>
									NIGHT WATCH
								</chakra.span>{" "}
								features{" "}
								<chakra.span color={"nw-yellow"}>
									15 different animals
								</chakra.span>{" "}
								forming unique trios, none of which are repeated. Hence, they
								are termed{" "}
								<chakra.span fontWeight={"700"} color={"nw-yellow"}>
									"impossible trios."
								</chakra.span>
							</Text>
							<CustomDivider />
						</motion.div>
						<motion.div
							initial={{ opacity: 0 }}
							whileInView={{ opacity: [0, 1] }}
							viewport={{ once: true }}
							transition={{ ease: "easeOut", duration: 1, delay: 0 }}
						>
							<Timeline />
							<MobileView />
						</motion.div>
						<motion.div
							initial={{ opacity: 0 }}
							whileInView={{ opacity: [0, 1] }}
							viewport={{ once: true }}
							transition={{ ease: "easeOut", duration: 1, delay: 0.5 }}
						>
							<Center>
								<MotionImage
									filter={"drop-shadow(0px 0px 10px black)"}
									maxW={"300px"}
									src={assetsUrl + "/images/project-details/giraffe.webp"}
									alt={"Giraffe"}
									initial={{ opacity: 0 }}
									whileInView={{ opacity: [0, 1] }}
									viewport={{ once: true }}
									transition={{ ease: "easeOut", duration: 1, delay: 0.675 }}
									display={["block", "block", "block", "none"]}
								/>
							</Center>
							<Box mt={[0, 0, 0, "4rem"]} maxW={"900px"} textAlign={"center"}>
								<Text
									fontSize={["nw-lg", "nw-lg", "nw-xl"]}
									fontWeight={700}
									color={"nw-yellow"}
								>
									{"6825 ⇒ 455"}
								</Text>
								<Text
									px={["0rem", "1rem", "4rem", "6rem", "8rem", "8rem"]}
									fontSize={["nw-xs", "nw-xs", "nw-sm"]}
									fontWeight={"400"}
									mt={"1rem"}
								>
									Initially, all 6,825 frames of Night Watch are created
									individually. With our innovative smart contract, they
									automatically merge in your wallet, so all you need to do is
									collect them. In theory, the total supply of Night Watch can
									reduce to just 455.
								</Text>
							</Box>
						</motion.div>
						<motion.div
							initial={{ opacity: 0 }}
							whileInView={{ opacity: [0, 1] }}
							viewport={{ once: true }}
							transition={{ ease: "easeOut", duration: 1, delay: 0.5 }}
						>
							<Text
								px={["0rem", "1rem", "4rem", "6rem", "8rem", "8rem"]}
								fontSize={"nw-xs"}
								mt={"3rem"}
								fontWeight={"400"}
							>
								You can read more about the merge below.
							</Text>
						</motion.div>
						<motion.div
							initial={{ opacity: 0 }}
							whileInView={{ opacity: [0, 1] }}
							viewport={{ once: true }}
							transition={{ ease: "easeOut", delay: 0.5, duration: 1 }}
						>
							<CollectNowButton mt={"3rem"} />
						</motion.div>
						<motion.div
							initial={{ opacity: 0 }}
							whileInView={{ opacity: [0, 1] }}
							viewport={{ once: true }}
							transition={{ ease: "easeOut", duration: 1, delay: 0.5 }}
						>
							<DownArrow targetSection={"merge"} targetArea={"start"} />
						</motion.div>
					</Flex>
				</SectionContainer>
			</Section>
		)
	);
}

function Timeline() {
	return (
		<Box display={["none", "none", "none", "block"]}>
			<Chrono
				items={items}
				enableBreakPoint={false}
				borderLessCards={true}
				hideControls={true}
				theme={{
					primary: "white",
					secondary: "transparent",
					cardBgColor: "transparent",
					titleColor: "black",
					titleColorActive: "transparent",
					iconBackgroundColor: "white",
				}}
				mode="VERTICAL_ALTERNATING"
			>
				<div className="chrono-icons">
					<Icon p={"1px"} color={"black"} as={GiCircle} />
					<Icon p={"1px"} color={"black"} as={GiCircle} />
					<Icon p={"1px"} color={"black"} as={GiCircle} />
				</div>

				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: [0, 1] }}
					viewport={{ once: true }}
					transition={{ ease: "easeOut", duration: 1, delay: 0.5 }}
				>
					<Text
						textAlign={"right"}
						fontWeight={700}
						lineHeight={"normal"}
						fontSize={"nw-lg"}
						color={"nw-yellow"}
					>
						15 ANIMALS, 15 FRAMES
					</Text>
					<Text
						textAlign={"right"}
						fontWeight={400}
						lineHeight={"normal"}
						fontSize={"nw-sm"}
						mt={5}
					>
						The project features 15 distinct animals. Each animal has an
						animation made up of 15 handmade collages from Kaybid's 'Silent
						Steps' series. Three of these animals come together to form the
						'Night Watch'.
					</Text>
					<Flex mt={5} gap={5}>
						<Box flex={1}>
							<Image
								boxShadow={"0px 0px 10px 0px #000000"}
								src={
									assetsUrl +
									"/images/project-details/Dolphin-Lemur-Penguin.webp"
								}
								alt={"Dolphin Lemur Penguin trio"}
							/>
						</Box>
						<Box flex={1}>
							<Image
								boxShadow={"0px 0px 10px 0px #000000"}
								src={
									assetsUrl +
									"/images/project-details/Gorilla-Elephant-Penguin.webp"
								}
								alt={"Gorilla Elephant Penguin trio"}
							/>
						</Box>
					</Flex>
				</motion.div>
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: [0, 1] }}
					viewport={{ once: true }}
					transition={{ ease: "easeOut", duration: 1, delay: 0.5 }}
				>
					<Text
						textAlign={"left"}
						fontWeight={700}
						lineHeight={"normal"}
						fontSize={"nw-lg"}
						color={"nw-yellow"}
					>
						C(15,3) = 455 UNIQUE TRIOS
					</Text>
					<Text
						textAlign={"left"}
						fontWeight={400}
						lineHeight={"normal"}
						fontSize={"nw-sm"}
						mt={5}
					>
						In 'Night Watch', there are 455 trios. This is because,
						mathematically, when we calculate the combinations without
						repetition using the formula C(15,3), we get the result of 455. This
						means that these 15 animals can form 455 unique trios, which
						translates into 455 different animations.
					</Text>
				</motion.div>
				<MotionBox
					textAlign={"right"}
					fontWeight={700}
					lineHeight={"normal"}
					fontSize={"nw-md"}
					initial={{ opacity: 0 }}
					whileInView={{ opacity: [0, 1] }}
					viewport={{ once: true }}
					transition={{ ease: "easeOut", duration: 1, delay: 0.5 }}
				>
					<Text
						textAlign={"right"}
						fontWeight={700}
						lineHeight={"normal"}
						fontSize={"nw-lg"}
						color={"nw-yellow"}
					>
						455 x 15 = 6825
					</Text>
					<Text
						textAlign={"right"}
						fontWeight={700}
						lineHeight={"normal"}
						fontSize={"nw-lg"}
						color={"nw-yellow"}
					>
						UNIQUE FRAMES
					</Text>
					<Text
						textAlign={"right"}
						fontWeight={400}
						lineHeight={"normal"}
						fontSize={"nw-sm"}
						mt={5}
					>
						Since each frame is an NFT, 455 unique animations multiplied by 15
						frames means there are 6825 unique frames in total.
					</Text>
					<Text
						textAlign={"right"}
						fontWeight={400}
						lineHeight={"normal"}
						fontSize={"nw-sm"}
						mt={5}
					>
						And this is how we reach the initial supply of Night Watch.
					</Text>
					<Text
						textAlign={"right"}
						fontWeight={400}
						lineHeight={"normal"}
						fontSize={"nw-sm"}
						mt={5}
					>
						However, the supply of Night Watch will always decrease by design.
					</Text>
				</MotionBox>
			</Chrono>
		</Box>
	);
}

function MobileView() {
	return (
		<Box
			textAlign={"center"}
			display={["block", "block", "block", "none"]}
			px={["0rem", "1rem", "4rem", "6rem", "8rem", "8rem"]}
		>
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: [0, 1] }}
				viewport={{ once: true }}
				transition={{ ease: "easeOut", duration: 1, delay: 0.5 }}
			>
				<Center>
					<MotionImage
						filter={"drop-shadow(0px 0px 10px black)"}
						src={assetsUrl + "/images/project-details/caretta.webp"}
						transform={"scaleX(-1)"}
						maxW={"300px"}
						alt={"Caretta"}
						initial={{ opacity: 0 }}
						whileInView={{ opacity: [0, 1] }}
						viewport={{ once: true }}
						transition={{ ease: "easeOut", duration: 1, delay: 0.5 }}
					/>
				</Center>
				<Text
					fontWeight={700}
					lineHeight={"normal"}
					fontSize={"nw-md"}
					color={"nw-yellow"}
				>
					15 ANIMALS, 15 FRAMES
				</Text>
				<Text fontWeight={400} lineHeight={"normal"} fontSize={"nw-xs"} mt={5}>
					The project features 15 distinct animals. Each animal has an animation
					made up of 15 handmade collages from the Kaybid's 'Silent Steps'
					series. Three of these animals come together to form the 'Night
					Watch'.
				</Text>
				<Flex mt={5} gap={5}>
					<Box maxW={"300px"} flex={1}>
						<Image
							boxShadow={"0px 0px 10px 0px #000000"}
							src={
								assetsUrl + "/images/project-details/Dolphin-Lemur-Penguin.webp"
							}
							alt={"Dolphin Lemur Penguin trio"}
						/>
					</Box>
					<Box maxW={"300px"} flex={1}>
						<Image
							boxShadow={"0px 0px 10px 0px #000000"}
							src={
								assetsUrl +
								"/images/project-details/Gorilla-Elephant-Penguin.webp"
							}
							alt={"Gorilla Elephant Penguin trio"}
						/>
					</Box>
				</Flex>
			</motion.div>

			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: [0, 1] }}
				viewport={{ once: true }}
				transition={{ ease: "easeOut", duration: 1, delay: 0.5 }}
				style={{ marginTop: "3rem" }}
			>
				<Text
					fontWeight={700}
					lineHeight={"normal"}
					fontSize={"nw-md"}
					color={"nw-yellow"}
				>
					C(15,3) = 455 UNIQUE TRIOS
				</Text>
				<Text fontWeight={400} lineHeight={"normal"} fontSize={"nw-xs"} mt={5}>
					In 'Night Watch', there are 455 trios. This is because,
					mathematically, when we calculate the combinations without repetition
					using the formula C(15,3), we get the result of 455. This means that
					these 15 animals can form 455 unique trios, which translates into 455
					different animations.
				</Text>
			</motion.div>
			<MotionBox
				fontWeight={700}
				lineHeight={"normal"}
				fontSize={"nw-xs"}
				initial={{ opacity: 0 }}
				whileInView={{ opacity: [0, 1] }}
				viewport={{ once: true }}
				transition={{ ease: "easeOut", duration: 1, delay: 0.5 }}
				style={{ marginTop: "3rem" }}
			>
				<Center>
					<MotionImage
						filter={"drop-shadow(0px 0px 10px black)"}
						src={assetsUrl + "/images/project-details/gorilla.webp"}
						alt={"Gorilla"}
						maxW={"300px"}
						initial={{ opacity: 0 }}
						whileInView={{ opacity: [0, 1] }}
						viewport={{ once: true }}
						transition={{ ease: "easeOut", duration: 1, delay: 0.675 }}
						transform={"scaleX(-1)"}
					/>
				</Center>
				<Text
					fontWeight={700}
					lineHeight={"normal"}
					fontSize={"nw-md"}
					color={"nw-yellow"}
				>
					455 x 15 = 6825
				</Text>
				<Text
					fontWeight={700}
					lineHeight={"normal"}
					fontSize={"nw-md"}
					color={"nw-yellow"}
				>
					UNIQUE FRAMES
				</Text>
				<Text fontWeight={400} lineHeight={"normal"} fontSize={"nw-xs"} mt={5}>
					Since each frame is an NFT, 455 unique animations multiplied with 15
					frames means, there are 6825 unique frames in total.
				</Text>
				<Text fontWeight={400} lineHeight={"normal"} fontSize={"nw-xs"} mt={5}>
					And this is how we reach to the initial supply of Night Watch.
				</Text>
				<Text fontWeight={400} lineHeight={"normal"} fontSize={"nw-xs"} mt={5}>
					However, the supply of Night Watch will always decrease by design.
				</Text>
			</MotionBox>
		</Box>
	);
}
