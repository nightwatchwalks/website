import { Box, Center, Link, Flex, Image, Text, Button } from "@chakra-ui/react";
import styles from "../styles/blog.module.css";
import { assetsUrl } from "../config";

export default function StoryPage() {
	return (
		<Box
			backgroundImage={assetsUrl + "/images/sections/intro.webp"}
			backgroundAttachment={"fixed"}
			fontWeight={500}
			fontSize={"nw-xs"}
			textShadow={"#000000 0px 0px 10px"}
		>
			<Center>
				<Flex
					p={"10rem"}
					maxW={"960px"}
					wordBreak={"break-word"}
					className={styles.blog}
					flexDir={"column"}
				>
					<Text
						color={"nw-yellow"}
						fontSize={"nw-2xl"}
						textTransform={"uppercase"}
						fontWeight={900}
					>
						Story Of “Night Watch”
					</Text>
					<Text fontSize={"nw-sm"}>
						Street artist Kaybid has crafted over 400 animal collages and nearly
						30 wild animal animations from these collages in his Silent Steps
						collection. This effort spanned almost half a decade.
					</Text>
					<Text>
						To bring these animations to life, Kaybid deftly repurposed waste
						paper artworks. He tore them up, turned them into animal
						silhouettes, and strategically placed them in various parts of the
						city. He was then photographed to immortalize the moment of each
						work in urban space.
					</Text>
					<Box my={5}>
						<Image src={assetsUrl + "/images/kaybid/seal.webp"} alt={"Seal"} />
						<Link
							href={
								"https://superrare.com/artwork-v2/silent-steps-%22seal%22-30276"
							}
							isExternal
						>
							<Text
								textAlign={"center"}
								fontStyle={"italic"}
								color={"blue.300"}
							>
								Seal - The Silent Steps Series, 2021, Foca, Izmir
							</Text>
						</Link>
					</Box>
					<Text fontWeight={700}>The Message</Text>
					<Text>
						Kaybid's work highlights the stark contrast between
						bustling city life and the tranquility of nature. Through his art,
						he not only illuminates the gap between cityscapes and wilderness,
						but also highlights the paradox of life thriving in nature but
						struggling in concrete jungles. These creations are a poignant
						reminder of our disconnection from the natural world and our natural
						solitude within it.
					</Text>
					<Text>
						Working predominantly under the cover of night, Kaybid transformed
						the streets of the city. Because many remained unaware, he
						discreetly placed his wild creations in secluded corners of the
						city. As dawn broke, Kaybid's animals wandered calmly as the
						townspeople began their crazy daily routines among the concrete
						towers. Their tranquility amidst the chaos seemed to raise a
						question: In this impetuous world, who is truly savage?
					</Text>
					<Text fontWeight={700}>The Night’s Essence</Text>
					<Text>
						Instinct is age-old wisdom—unlearned, yet inherited. As the day's
						clamor subsides, emotions reclaim their space. The night, then,
						becomes a realm of instinct and intuition. It belongs to those
						ancient feelings and the wild creatures that epitomize them.
						Embodying this primal wisdom, they stand guard during the nocturnal
						hours.
					</Text>
					<Text>
						At night, our latent instincts awaken. They become our silent
						partners, the true guardians of the night. As we rest, they remain
						vigilant. They embody the night's energy, its fervor, and its
						passion. They revel, roam, and resonate with the heartbeats of
						undying love and excitement.
					</Text>
					<Link href="/">
						<Button
							mt={5}
							alignSelf={"start"}
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
				</Flex>
			</Center>
		</Box>
	);
}
