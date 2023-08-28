import {
	Flex,
	Heading,
	Image,
	SimpleGrid,
	Text,
	Spacer,
	Icon,
	Link,
	AspectRatio,
	Tooltip,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaTwitter, FaInstagram, FaLink, FaGithub } from "react-icons/fa";
import Section from "../section";
import DownArrow from "../icons/down-arrow";
import SectionBackground from "../section-background";
import SectionContainer from "../section-container";
import { assetsUrl } from "../../config";

export default function Crew() {
	return (
		<>
			<Section id={"crew"}>
				<SectionBackground image={assetsUrl + "/images/sections/crew.webp"} />
				<SectionContainer justify={"center"} maxW={"1300px"}>
					<SimpleGrid
						columns={[1, 1, 1, 1, 3, 3]}
						spacing={3}
						alignItems={"start"}
					>
						<Heading
							fontFamily={"unset"}
							fontSize={["nw-2xl", "nw-2xl", "nw-3xl"]}
							color={"nw-yellow"}
							fontWeight={"800"}
							textShadow={"#000000 0px 0px 10px"}
							textAlign={"center"}
							my={"3rem"}
						>
							<motion.div
								initial={{ opacity: 0 }}
								whileInView={{ opacity: [0, 1] }}
								viewport={{ once: true }}
								transition={{ ease: "easeIn", duration: 0.5 }}
							>
								{"CREW"}
							</motion.div>
						</Heading>
						<Kaybid />
						<Yigit />
					</SimpleGrid>

					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: [0, 1] }}
						viewport={{ once: true }}
						transition={{ ease: "easeOut", duration: 1, delay: 0.125 }}
					>
						<DownArrow targetSection={"footer"} targetArea={"start"} />
					</motion.div>
				</SectionContainer>
			</Section>
		</>
	);
}

function Yigit() {
	return (
		<CrewCard
			name={"Yigit Duman"}
			title={"Developer"}
			title2={"Dream Maker"}
			title3={"Multitasking Wizard"}
			animDelay={0.4}
			description={
				'"From virtual worlds of Minecraft to the virtual world of art. A former game developer turned Web3 creator. With more than a decade of experience in coding and a passion for self-expression. Always learning and growing in my craft."'
			}
			twitterUrl={"https://twitter.com/YigitDuman"}
			profilePhoto={assetsUrl + "/images/crew/yigit.jpg"}
			socials={() => {
				return (
					<Flex mt={"1em"} gap={2} flexDir={"row"} flex={1}>
						<Tooltip label="Twitter" bg={"nw-yellow"} placement={"top"}>
							<Link isExternal href={"https://twitter.com/YigitDuman"}>
								<Icon boxSize={"24px"} as={FaTwitter} />
							</Link>
						</Tooltip>
						<Tooltip label="GitHub" bg={"nw-yellow"} placement={"top"}>
							<Link isExternal href={"https://github.com/ygtdmn"}>
								<Icon boxSize={"24px"} as={FaGithub} />
							</Link>
						</Tooltip>
					</Flex>
				);
			}}
		/>
	);
}

function Kaybid() {
	return (
		<CrewCard
			name={"Kaybid"}
			title={"Artist"}
			title2={"Dreamer"}
			title3={"Multi Disciplinary Artist"}
			description={
				'"Kaybid produces interdisciplinary works by focusing on street art and animation. Video, gif, traditional painting and collage are among the basic disciplines. For the last 2.5+ years, he has been exploring crypto art and finding new ways to create."'
			}
			profilePhoto={assetsUrl + "/images/crew/kaybid.jpg"}
			twitterUrl={"https://twitter.com/KaybidSteps"}
			socials={() => {
				return (
					<Flex mt={"1em"} gap={2} flexDir={"row"} flex={1} align={"start"}>
						<Tooltip label="Twitter" bg={"nw-yellow"} placement={"top"}>
							<Link isExternal href={"https://twitter.com/KaybidSteps"}>
								<Icon boxSize={"24px"} as={FaTwitter} />
							</Link>
						</Tooltip>

						<Tooltip label="Instagram" bg={"nw-yellow"} placement={"top"}>
							<Link isExternal href={"https://instagram.com/Kaybid"}>
								<Icon boxSize={"24px"} as={FaInstagram} />
							</Link>
						</Tooltip>
						<Tooltip label="SuperRare" bg={"nw-yellow"} placement={"top"}>
							<Link isExternal href={"https://superrare.com/Kaybid"}>
								<Image
									borderRadius={"10px"}
									src={assetsUrl + "/images/socials/sr_square.png"}
									h={"24px"}
									alt={"Superrare"}
								/>
							</Link>
						</Tooltip>
						<Tooltip label="Website" bg={"nw-yellow"} placement={"top"}>
							<Link isExternal href={"https://kaybid.live"}>
								<Icon boxSize={"24px"} as={FaLink} />
							</Link>
						</Tooltip>
					</Flex>
				);
			}}
			animDelay={0.2}
		/>
	);
}

function CrewCard({
	name,
	title,
	title2,
	title3,
	description,
	socials,
	profilePhoto,
	animDelay,
	twitterUrl,
}) {
	return (
		<motion.div
			initial={{ y: -100, opacity: 0 }}
			whileInView={{
				y: [-100, 0],
				opacity: [0, 1],
			}}
			viewport={{ once: true }}
			transition={{ ease: "easeOut", duration: 1, delay: animDelay }}
			style={{ height: "100%" }}
		>
			<Flex
				boxShadow={"-2px 6px 20px 0px #000000"}
				p={"2rem"}
				flexDir={"column"}
				backgroundColor={"#121212"}
				height={"inherit"}
				maxW={"600px"}
			>
				<Flex gap={5} mt={0} flexDir={["column", "row"]}>
					<AspectRatio ratio={1} minW={"160px"} h={"auto"}>
						<Image
							objectFit="cover"
							borderRadius={[5, "50%"]}
							src={profilePhoto}
							alt={name + " Profile Photo"}
						/>
					</AspectRatio>

					<Flex flexDir={"column"} justify={"center"} align={"start"}>
						<Flex flexDir={"column"}>
							<Heading
								fontFamily={"unset"}
								fontSize={"nw-md"}
								color={"nw-yellow"}
								fontWeight={"700"}
								textAlign={"left"}
								textTransform={"uppercase"}
								mt={1}
							>
								{name}
							</Heading>
						</Flex>
						<Flex flexDir={"column"}>
							<Text
								mt={3}
								fontWeight={700}
								textAlign={"left"}
								color={"nw-yellow"}
							>
								{title}
							</Text>
							<Text fontWeight={500} textAlign={"left"}>
								{title2}
							</Text>
							<Text fontWeight={500} textAlign={"left"} fontSize={"sm"}>
								{title3}
							</Text>
						</Flex>
					</Flex>
				</Flex>

				<Text mt={"1rem"}>{description}</Text>
				<Spacer />
				<>{socials()}</>
			</Flex>
		</motion.div>
	);
}
