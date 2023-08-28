import {
	Flex,
	Box,
	Heading,
	Image,
	Center,
	Grid,
	chakra,
	Icon,
	Link,
	GridItem,
	Text,
	useInterval,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Section from "../section";
import DownArrow from "../icons/down-arrow";
import SectionBackground from "../section-background";
import { useEffect, useState } from "react";
import { RxShuffle } from "react-icons/rx";
import SectionContainer from "../section-container";
import CustomDivider from "../custom-divider";
import CollectNowButton from "components/collect-now-button";
import { assetsUrl } from "../../config";

const MotionGridItem = motion(GridItem);

export default function Merge() {
	const emptyImage = assetsUrl + "/images/sections/intro.webp";
	const images = [
		assetsUrl +
			"/images/dolphin-penguin-gorilla/Dolphin-Penguin-Gorilla_01.webp",
		assetsUrl +
			"/images/dolphin-penguin-gorilla/Dolphin-Penguin-Gorilla_02.webp",
		assetsUrl +
			"/images/dolphin-penguin-gorilla/Dolphin-Penguin-Gorilla_03.webp",
		assetsUrl +
			"/images/dolphin-penguin-gorilla/Dolphin-Penguin-Gorilla_04.webp",
		assetsUrl +
			"/images/dolphin-penguin-gorilla/Dolphin-Penguin-Gorilla_05.webp",
		assetsUrl +
			"/images/dolphin-penguin-gorilla/Dolphin-Penguin-Gorilla_06.webp",
		assetsUrl +
			"/images/dolphin-penguin-gorilla/Dolphin-Penguin-Gorilla_07.webp",
		assetsUrl +
			"/images/dolphin-penguin-gorilla/Dolphin-Penguin-Gorilla_08.webp",
		assetsUrl +
			"/images/dolphin-penguin-gorilla/Dolphin-Penguin-Gorilla_09.webp",
		assetsUrl +
			"/images/dolphin-penguin-gorilla/Dolphin-Penguin-Gorilla_10.webp",
		assetsUrl +
			"/images/dolphin-penguin-gorilla/Dolphin-Penguin-Gorilla_11.webp",
		assetsUrl +
			"/images/dolphin-penguin-gorilla/Dolphin-Penguin-Gorilla_12.webp",
		assetsUrl +
			"/images/dolphin-penguin-gorilla/Dolphin-Penguin-Gorilla_13.webp",
		assetsUrl +
			"/images/dolphin-penguin-gorilla/Dolphin-Penguin-Gorilla_14.webp",
		assetsUrl +
			"/images/dolphin-penguin-gorilla/Dolphin-Penguin-Gorilla_15.webp",
	];

	const [selectedFrames, setSelectedFrames] = useState(["3", "11"]);
	const [image, setImage] = useState(images[0]);
	const [imageIndex, setImageIndex] = useState(0);
	const [shouldClean, setShouldClean] = useState(false);

	useEffect(() => {
		setSelectedFrames(createRandomArray());
	}, []);

	const getSelectedFramesSorted = () => {
		const copyOfSelectedFrames = [...selectedFrames];
		const sorted = copyOfSelectedFrames.sort(
			(a, b) => parseInt(a) - parseInt(b)
		);
		for (const item of sorted) {
			if (parseInt(item) < 10) {
				sorted[sorted.indexOf(item)] = parseInt(item).toString();
			}
		}
		return sorted;
	};

	const refreshFrame = () => {
		const sorted = getSelectedFramesSorted();

		const imagesToShow = [];
		for (let i = 0; i < sorted.length; i++) {
			const fr = parseInt(sorted[i]);
			imagesToShow.push(fr - 1);
		}

		if (shouldClean) {
			if (imagesToShow.length === 0) {
				setImage(emptyImage);
				setImageIndex(0);
			} else {
				setImage(images[imagesToShow[0]]);
				setImageIndex(imagesToShow[0]);
			}
			setShouldClean(false);
		} else {
			if (imagesToShow.includes(imageIndex)) {
				setImage(images[imageIndex]);
			}
		}

		let newImageIndex = imageIndex + 1;

		if (newImageIndex === images.length) {
			newImageIndex = 0;
		}

		setImageIndex(newImageIndex);
	};
	useInterval(refreshFrame, 100);

	return (
		<>
			<Section id={"merge"}>
				<SectionBackground image={assetsUrl + "/images/sections/merge.webp"} />
				<SectionContainer textShadow={"#000000 0px 0px 10px"}>
					<Flex
						minH={"100vh"}
						flexDir={"column"}
						align={"center"}
						justify={"center"}
						py={"4rem"}
						px={["1rem", "3rem", 0]}
					>
						<motion.div
							initial={{ opacity: 0 }}
							whileInView={{ opacity: [0, 1] }}
							viewport={{ once: true }}
							transition={{ ease: "easeOut", duration: 1, delay: 0.125 }}
						>
							<Heading
								fontFamily={"unset"}
								fontSize={["nw-lg", "nw-xl", "nw-2xl", "nw-4xl"]}
								fontWeight={"800"}
								textAlign={"center"}
								whiteSpace={"pre-wrap"}
								mt={5}
							>
								<chakra.span color={"nw-yellow"}>{"MERGE "}</chakra.span>
								<chakra.span fontWeight={400}>{"MECHANISM"}</chakra.span>
							</Heading>
							<CustomDivider />
						</motion.div>
						<motion.div
							initial={{ opacity: 0 }}
							whileInView={{ opacity: [0, 1] }}
							viewport={{ once: true }}
							transition={{ ease: "easeOut", duration: 1, delay: 0.25 }}
						>
							<Center>
								<Text
									px={["0rem", "1rem", "4rem", "6rem", "8rem", "10rem"]}
									textAlign={"center"}
									fontSize={["nw-xs", "nw-sm"]}
								>
									The merge function is a crucial aspect of Night Watch. Despite
									its intricate mechanism, it's straightforward to grasp and
									utilize.
								</Text>
							</Center>
						</motion.div>
						<motion.div
							initial={{ opacity: 0 }}
							whileInView={{ opacity: [0, 1] }}
							viewport={{ once: true }}
							transition={{ ease: "easeOut", delay: 0.375, duration: 1 }}
						>
							<Center>
								<Text
									textAlign={"center"}
									px={["0rem", "1rem", "4rem", "6rem", "8rem", "12rem"]}
									fontSize={["nw-xs", "nw-sm"]}
									fontWeight={"300"}
									mt={5}
								>
									Below, you will see a representation of the Night Watch
									tokens, which are combined from several frames, and how the
									merge system works.
								</Text>
							</Center>
						</motion.div>

						<Flex
							my={"4rem"}
							align={"center"}
							justify={"center"}
							id={"what-is-nw-5"}
							flexDir={"column"}
						>
							<Grid
								alignItems={"start"}
								justifyContent={"center"}
								templateColumns={[
									"repeat(1, 1fr)",
									"repeat(1, 1fr)",
									"repeat(3, 1fr)",
								]}
								gap={[8, 8, 3, 8]}
								textShadow={"0 0 black"}
							>
								<MergeCard
									name={"COLLECT THE FRAMES"}
									image={assetsUrl + "/images/merge/mergecard1.webp"}
									description={
										"Collect the frames of the same gifs/trios in your wallet, and they will automatically form an animation by merging!"
									}
									animDelay={0.5}
								/>
								<MergeCard
									name={"MERGE MAGIC"}
									image={assetsUrl + "/images/merge/mergecard2.webp"}
									description={
										"The merge magic will happen with our state-of-the-art smart contract the moment you transfer your tokens!"
									}
									animDelay={0.675}
								/>
								<MergeCard
									name={"HASSLE-FREE"}
									image={assetsUrl + "/images/merge/mergecard3.webp"}
									description={
										"You don't need to do anything other than choosing and collecting the frames."
									}
									animDelay={0.75}
								/>
							</Grid>
							<motion.div
								initial={{ opacity: 0 }}
								whileInView={{ opacity: [0, 1] }}
								viewport={{ once: true }}
								transition={{ ease: "easeOut", duration: 1, delay: 0.75 }}
							>
								<Text
									mt={10}
									px={["0rem", "1rem", "4rem", "6rem", "8rem", "12rem"]}
									fontSize={["nw-xs", "nw-sm"]}
									textAlign={"center"}
								>
									You can read more about merge on our{" "}
									<Link
										href={
											"https://mirror.xyz/yigitduman.eth/HpAiWD8vX-mTAoU7jHAWkYK39KP13AzXawwk5RT821k"
										}
										isExternal
										color={"blue.300"}
									>
										"How Night Watch Works?"
									</Link>{" "}
									article.
								</Text>
							</motion.div>

							<motion.div
								initial={{ opacity: 0 }}
								whileInView={{ opacity: [0, 1] }}
								viewport={{ once: true }}
								transition={{ ease: "easeOut", duration: 1, delay: 0.75 }}
							>
								<DownArrow targetSection={"simulate"} targetArea={"start"} />
							</motion.div>
						</Flex>
					</Flex>

					<Flex
						id={"simulate"}
						minH={"100vh"}
						flexDir={"column"}
						align={"center"}
						justify={"center"}
						py={"4rem"}
						px={["1rem", "3rem", 0]}
					>
						<motion.div
							initial={{ opacity: 0 }}
							whileInView={{ opacity: [0, 1] }}
							viewport={{ once: true }}
							transition={{ ease: "easeOut", duration: 1, delay: 0.125 }}
						>
							<Text
								fontSize={["nw-md", "nw-lg", "nw-xl", "nw-2xl"]}
								textAlign={"center"}
								fontWeight={"900"}
								textTransform={"uppercase"}
							>
								SIMULATE <chakra.span fontWeight={400}>the</chakra.span>{" "}
								<chakra.span color={"nw-yellow"}>merge</chakra.span>
							</Text>
						</motion.div>
						<motion.div
							initial={{ opacity: 0 }}
							whileInView={{ opacity: [0, 1] }}
							viewport={{ once: true }}
							transition={{ ease: "easeOut", duration: 1, delay: 0.25 }}
						>
							<Text
								fontWeight={"500"}
								px={["0rem", "1rem", "4rem", "6rem", "8rem", "10rem"]}
								mt={3}
								textAlign={"center"}
								fontSize={["nw-xs", "nw-xs", "nw-sm"]}
							>
								Below is a simulation of Night Watch's merge mechanic.
							</Text>
						</motion.div>
						<motion.div
							initial={{ opacity: 0 }}
							whileInView={{ opacity: [0, 1] }}
							viewport={{ once: true }}
							transition={{ ease: "easeOut", duration: 1, delay: 0.375 }}
						>
							<Text mt={10} maxW={"800px"} textAlign={"center"}>
								You can see all 15 frames that make up a complete animation on
								the side. To experience the animation created by the merge, you
								can use the{" "}
								<chakra.span color={"nw-yellow"} fontWeight={"900"}>
									SHUFFLE
								</chakra.span>{" "}
								button, or you can select the frame you want to create your own
								Night Watch animation.
							</Text>
						</motion.div>

						<Flex
							justify={"center"}
							px={[0, 0, 0, 0, "2rem"]}
							py={"2em"}
							mt={"1rem"}
							align={"center"}
							flexDir={["column", "column", "column", "column", "row"]}
							gap={5}
						>
							<motion.div
								initial={{ opacity: 0 }}
								whileInView={{ opacity: [0, 1] }}
								viewport={{ once: true }}
								transition={{ ease: "easeOut", duration: 1, delay: 0.5 }}
							>
								<Center>
									<Box pos={"relative"} w={"full"} h={"full"}>
										<Image
											src={image}
											boxShadow={"0px 0px 10px 0px #000000"}
											alt={"Caretta Seal Lion animation"}
											w={"100%"}
											maxW={["772px"]}
										/>
										<Center>
											<Heading
												fontFamily={"unset"}
												fontSize={["3xs", "nw-2xs"]}
												color={"white"}
												fontWeight={"500"}
												textAlign={"center"}
												textTransform={"uppercase"}
												pos={"absolute"}
												whiteSpace={"pre-wrap"}
												bottom={3}
											>
												<chakra.span
													color={"nw-yellow"}
													fontSize={["2xs", "nw-xs"]}
												>
													{getSelectedFramesSorted().join(", ")}
												</chakra.span>
												<chakra.span>
													{"\nFrames of Dolphin-Penguin-Gorilla trio"}
												</chakra.span>
											</Heading>
										</Center>
									</Box>
								</Center>
							</motion.div>
							<motion.div
								initial={{ opacity: 0 }}
								whileInView={{ opacity: [0, 1] }}
								viewport={{ once: true }}
								transition={{ ease: "easeOut", duration: 1, delay: 0.675 }}
							>
								<Grid
									p={1}
									templateColumns={[
										"repeat(5, 3fr)",
										"repeat(5, 3fr)",
										"repeat(5, 3fr)",
										"repeat(5, 3fr)",
										"repeat(3, 5fr)",
									]}
									rowGap={1}
									columnGap={1}
								>
									{[...Array(15)].map((_, i) => {
										let frameInt = i + 1;
										let frame = frameInt.toString();
										if (frameInt < 10) {
											frame = "0" + frame;
										}
										return (
											<ClickableGridItem
												key={frame}
												frame={frame}
												isSelected={selectedFrames.includes(frame)}
												toggleSelected={() => {
													if (selectedFrames.includes(frame)) {
														setSelectedFrames(
															selectedFrames.filter((f) => f !== frame)
														);
													} else {
														setSelectedFrames([...selectedFrames, frame]);
													}
													setShouldClean(true);
													refreshFrame();
												}}
											/>
										);
									})}
								</Grid>
							</motion.div>
						</Flex>
						<motion.div
							initial={{ opacity: 0 }}
							whileInView={{ opacity: [0, 1] }}
							viewport={{ once: true }}
							transition={{ ease: "easeOut", duration: 1, delay: 0.75 }}
						>
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
									setSelectedFrames(createRandomArray());
									setShouldClean(true);
									refreshFrame();
								}}
							>
								<Text
									textShadow={"0 0 black"}
									fontWeight={700}
									fontSize={["nw-xs", "nw-sm"]}
								>
									{"SHUFFLE"}
								</Text>

								<Icon as={RxShuffle} boxSize={"2rem"} pl={2} />
							</Flex>
						</motion.div>
						<motion.div
							initial={{ opacity: 0 }}
							whileInView={{ opacity: [0, 1] }}
							viewport={{ once: true }}
							transition={{ ease: "easeOut", duration: 1, delay: 0.75 }}
							style={{ marginTop: "5.5rem" }}
						>
							<Text
								px={["0rem", "1rem", "4rem", "6rem", "8rem", "11rem"]}
								textAlign={"center"}
								fontSize={"nw-sm"}
								fontWeight={"500"}
							>
								With its fundamental structure, although{" "}
								<chakra.span color={"nw-yellow"} fontWeight={"700"}>
									Night Watch
								</chakra.span>{" "}
								has been minted as individual pieces, it encourages collectors
								to{" "}
								<chakra.span color={"nw-yellow"} fontWeight={"700"}>
									complete the animation
								</chakra.span>{" "}
								by collecting all 15 frames. After all, a completed animation is
								the{" "}
								<chakra.span color={"nw-yellow"} fontWeight={"700"}>
									grand prize
								</chakra.span>{" "}
								promised by the game.
							</Text>
						</motion.div>
						<motion.div
							initial={{ opacity: 0 }}
							whileInView={{ opacity: [0, 1] }}
							viewport={{ once: true }}
							transition={{ ease: "easeOut", delay: 0.5, duration: 1 }}
						>
							<CollectNowButton mt={"4rem"} />
						</motion.div>
					</Flex>
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: [0, 1] }}
						viewport={{ once: true }}
						transition={{ ease: "easeOut", duration: 1, delay: 0.75 }}
					>
						<DownArrow
							mt={"2.5rem"}
							targetArea={"start"}
							targetSection={"faq"}
						/>
					</motion.div>
				</SectionContainer>
			</Section>
		</>
	);
}

function ClickableGridItem({ frame, isSelected, toggleSelected }) {
	return (
		<GridItem
			boxShadow={"0px 0px 0px 3px rgba(255, 255, 255, 0.1)"}
			_hover={{ cursor: "pointer" }}
			w="100%"
			maxW={"150px"}
			h="auto"
		>
			<Image
				boxShadow={"0px 0px 10px 0px #000000"}
				src={
					assetsUrl +
					"/images/dolphin-penguin-gorilla/Dolphin-Penguin-Gorilla_" +
					frame +
					".webp"
				}
				alt={"Frame " + frame}
				w={"full"}
				filter={
					isSelected ? "brightness(200%)" : "grayscale(100%) brightness(0.7)"
				}
				onClick={toggleSelected}
			/>
		</GridItem>
	);
}

function createRandomArray() {
	const arrayLength = Math.floor(Math.random() * 5) + 2;
	let randomArray = [];

	for (let i = 0; i < arrayLength; i++) {
		let formattedNumber;
		do {
			let randomNumber = 1 + Math.floor(Math.random() * 15);
			formattedNumber = randomNumber < 10 ? "0" + randomNumber : randomNumber;
		} while (randomArray.includes(formattedNumber.toString()));

		randomArray.push(formattedNumber.toString());
	}

	return randomArray;
}

function MergeCard({ image, name, description, animDelay, ...props }) {
	return (
		<MotionGridItem
			flex={"1 1 0px"}
			height={"100%"}
			flexDir={"column"}
			backgroundColor={"nw-yellow"}
			boxShadow={"0px 0px 10px 0px #000000"}
			initial={{ opacity: 0 }}
			whileInView={{ opacity: [0, 1] }}
			viewport={{ once: true }}
			transition={{ ease: "easeOut", duration: 1, delay: animDelay }}
			{...props}
		>
			<Image src={image} alt={"Night Watch Trio"} w={"full"} />
			<Heading
				fontFamily={"unset"}
				fontSize={"nw-sm"}
				color={"black"}
				fontWeight={"800"}
				textAlign={"center"}
				mt={5}
			>
				{name}
			</Heading>
			<Text
				px={7}
				my={7}
				textAlign={"center"}
				color={"black"}
				fontWeight={"600"}
				fontSize={"nw-xs"}
			>
				{description}
			</Text>
		</MotionGridItem>
	);
}
