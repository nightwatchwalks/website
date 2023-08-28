import {
	Box,
	Center,
	Flex,
	Image,
	Text,
	Button,
	AspectRatio,
	Link,
} from "@chakra-ui/react";
import styles from "../styles/blog.module.css";
import { assetsUrl } from "../config";

export default function KaybidPage() {
	return (
		<Box
			backgroundImage={assetsUrl + "/images/sections/intro.webp"}
			backgroundAttachment={"fixed"}
			fontWeight={500}
			fontSize={"nw-xs"}
			textShadow={"#000000 0px 0px 10px"}
			className={styles.blog}
		>
			<Center>
				<Box maxW={"960px"} p={"10rem"}>
					<Text fontSize={"nw-2xl"} fontWeight={800} color={"nw-yellow"}>
						KAYBID, SILENT STEPS, AND STREET ART
					</Text>
					<Text fontWeight={700}>
						Kaybid produces interdisciplinary works by focusing on street art
						and animation. Video, animated gif, traditional painting and collage
						are among the basic disciplines.
					</Text>
					<Text>
						Kaybid, who uses traditional methods and new media together,
						examines the transition between these two in his works; In the
						Silent Steps series, he examines topics such as vitality and
						movement, being and existence, the city, urbanization and
						extinction, isolation and existence ethics, Diminished Value (the
						translated name origin of Kaybid) and value attribution.
					</Text>
					<AspectRatio mt={"5rem"} ratio={16 / 9}>
						<iframe
							src="https://www.youtube-nocookie.com/embed/CI9zdxNCSxk"
							title="YouTube video player"
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							allowFullScreen
						></iframe>
					</AspectRatio>
					<Link
						color={"blue.300"}
						href="https://superrare.com/artwork-v2/silent-steps-%22panda%22-34492"
						isExternal
					>
						<Text textAlign={"center"}>Silent Steps “Panda”</Text>
					</Link>
					<Flex gap={3} mt={"5rem"}>
						<Box w={"30px"} bg={"nw-yellow"}></Box>
						<Text my={"0 !important"}>
							The project ongoing for over four years and nearly 400 individual
							unique collages created from 30 different species were created and
							placed to the streets. All my collage works are original and
							unique. None of them are copies, prints, or stickers. That is all
							organic. I make them with traditional methods.
						</Text>
					</Flex>
					<Box my={5}>
						<Flex mt={5} mx={"-10rem"} gap={10}>
							<Box flex={"1 1 0px"}>
								<Image
									src={assetsUrl + "/images/kaybid/birth-of-unicorn.webp"}
									alt={"Birth of Unicorn"}
									width={"355"}
									height={"auto"}
									mx={5}
								/>
							</Box>
							<Box flex={"1 1 0px"}>
								<Image
									src={assetsUrl + "/images/kaybid/unicorn-in-streets.webp"}
									alt={"Unicorn in Streets"}
									width={"371"}
									height={"auto"}
									mx={5}
								/>
							</Box>
						</Flex>
						<Link
							href={"https://superrare.com/artwork-v2/uni's-24289"}
							isExternal
						>
							<Text
								color={"blue.300"}
								fontStyle={"italic"}
								textAlign={"center"}
							>
								Uni'S, 2021, Istanbul
							</Text>
						</Link>
					</Box>
					<Text>
						The animal images not only bring about an immediate reaction of
						compassion, but also due their ubiquity, archaicness and
						approachability exist beyond all norms and biases. Every single
						frame of the movement of the animals is created individually, and
						makes up the cohesive walking animation when watched back to back
						thus bringing motion and life to the image of the animal.
					</Text>
					<Text>
						The singular animals that are installed on the walls are actually
						each a single moment of continuous inertia. The passer-by on the
						street does not only see “an animal”, but also gets to witness “a
						moment”.
					</Text>
					<Link href="/">
						<Button
							mt={5}
							alignSelf={"end"}
							justifySelf={"end"}
							maxW={"fit-content"}
							color={"black"}
							colorScheme={"yellow"}
							bg={"nw-yellow"}
							fontWeight={"700"}
							borderRadius={"none"}
						>
							Go Back
						</Button>
					</Link>
				</Box>
			</Center>
		</Box>
	);
}
