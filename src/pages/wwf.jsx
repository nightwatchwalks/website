import { Box, Center, Image, Text, Button, Link } from "@chakra-ui/react";
import styles from "../styles/blog.module.css";
import { assetsUrl } from "../config";

export default function WWFPage() {
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
					<Text
						textTransform={"uppercase"}
						fontSize={"nw-2xl"}
						fontWeight={800}
						color={"nw-yellow"}
					>
						Cooperation For Wildlife With WWF
					</Text>
					<Text>
						By showcasing his art in urban bubbles, he’s reminding people that
						don’t usually think about wild animals that there are endangered
						species fighting for space and struggling to survive.
					</Text>
					<Text fontWeight={"700"} fontSize={"nw-md"}>
						Kaybid has made animal and climate conservation a known priority.
						Kaybid works in tandem with the WWF (World Wildlife Fund) to create
						merchandise that funds animal conservation efforts in Turkey.
					</Text>
					<Box mt={5} w={"100%"}>
						<Image alt={"WWF"} src={assetsUrl + "/images/kaybid/wwf1.webp"} />
					</Box>

					<Text>
						“The cities come into being independently of the rhythms of nature.
						They treat nature and natural life as a mere commodity in it’s
						coming into being. Sand is a singularized item that is to be
						converted into glass; marble is something only if it is a column or
						a gravestone; a wooden staircase; an elevator or like window blinds…
						Hence nature can exist only as a utility or a decoration, as a side
						to the main constructed being that is the city. A tree in a
						rectangular pot on wheels exists on the rooftop only to be rolled
						around to provide us shade as we pick where we want to be.”
					</Text>
					<Box mt={5} w={"100%"}>
						<Image alt={"WWF"} src={assetsUrl + "/images/kaybid/wwf2.webp"} />
					</Box>
					<Text fontSize={"nw-md"}>
						“Kaybid’s animals that are wandering the streets silently may remind
						the viewer that the world does not only belong to humans, or that
						the urban ecosystem is one that actually is quite alien to the
						organic realm.”
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
