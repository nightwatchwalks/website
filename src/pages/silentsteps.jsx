import {
	Box,
	Center,
	Flex,
	Text,
	Button,
	AspectRatio,
	Link,
} from "@chakra-ui/react";
import styles from "../styles/blog.module.css";
import { assetsUrl } from "../config";

export default function SilentStepsPage() {
	return (
		<Box
			backgroundImage={assetsUrl + "/images/sections/intro.webp"}
			backgroundAttachment={"fixed"}
			fontWeight={500}
			fontSize={"nw-xs"}
			className={styles.blog}
			textShadow={"#000000 0px 0px 10px"}
		>
			<Center>
				<Box maxW={"960px"} p={"10rem"}>
					<Text fontSize={"nw-2xl"} fontWeight={800} color={"nw-yellow"}>
						DOCUMENTING MAPPING, AND THE EXTINCTION OF SILENT STEPS
					</Text>
					<Text fontSize={"nw-md"} fontWeight={700}>
						“In the ongoing project, approximately over 400 individual animals
						and almost 30 different species have been implemented. Each of them
						is marked with photos on Google Maps.
					</Text>
					<Text>
						Thus, viewers can also find the opportunity to experience the city
						with a completely different route and awareness perception. You can
						find the animals on Google Maps. Where you can see the street
						applications until today.”
					</Text>
					<Box my={"5rem"} w={"100%"}>
						<iframe
							src="https://www.google.com/maps/d/embed?mid=1tHoeYbM6SzK_Q1106KHegwvG7mPNBL2d&hl=en_US&ehbc=2E312F"
							width="640"
							height="480"
							style={{ width: "100%" }}
						></iframe>
					</Box>

					<Text>
						The installation locations are all spaces that the urban life passes
						through: outside of buildings, sometimes the insides, walls, the
						pavement, abudments…
					</Text>
					<Text>
						These, the cities indeed, are spaces that these animals would
						normally not exist, nor would they ever want to. One can’t think of
						a rhino or a moose to calmly just pass through Kadife Street, or a
						bear quietly strolling down the Yüksek Kaldırım staircase in broad
						daylight. There are just a few species that have managed to adapt to
						the city habitat, cats, dogs, some birds, insects and bacteria.
						There isn’t much chance we could encounter any other creature
						anyways. We would not let them.
					</Text>
					<Text fontSize={"nw-md"} fontWeight={"700"}>
						Extinction And Documenting
					</Text>
					<Flex gap={3}>
						<Box w={"30px"} bg={"nw-yellow"}></Box>
						<Text my={"0 !important"}>
							“Another layer of the project is superior to following and
							documenting the wear, aging and extinction processes. This entire
							process is documented and published in the social media account of
							the project. The posts, comments and opinions of social media
							followers are also published in the same way.”
						</Text>
					</Flex>
					<AspectRatio
						mt={10}
						w={"full"}
						maxW={"720px"}
						ratio={16 / 9}
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
					<Link href="/">
						<Button
							mt={10}
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
