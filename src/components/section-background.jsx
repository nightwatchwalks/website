import { Box } from "@chakra-ui/react";
import styles from "../styles/section-background.module.css";

export default function SectionBackground({ image, ...props }) {
	return (
		<Box
			zIndex={-1}
			w={"100%"}
			h={"100%"}
			top={0}
			left={0}
			position={"absolute"}
			backgroundImage={"url(" + image + ")"}
			backgroundPosition={"top"}
			backgroundSize={"cover"}
			className={styles.selector}
			boxShadow={"0px 0px 10px 0px #000000"}
			filter={"brightness(80%)"}
			{...props}
		></Box>
	);
}
