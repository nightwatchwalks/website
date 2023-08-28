import {
	Icon,
	Box,
	LinkOverlay,
	LinkBox,
	useMediaQuery,
} from "@chakra-ui/react";
import { FaArrowDown } from "react-icons/fa";
import { motion } from "framer-motion";

export default function DownArrow({
	targetSection,
	targetArea = undefined,
	...props
}) {
	const [isLargerThan992] = useMediaQuery("(min-width: 992px)");
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: [0, 1] }}
			viewport={{ once: true }}
			transition={{ ease: "easeOut", duration: 0.5 }}
		>
			<LinkBox as={Box} m={"4rem"} w={"4rem"} textAlign={"center"} {...props}>
				<LinkOverlay
					onClick={() => {
						const target = document.getElementById(targetSection);
						target.scrollIntoView({
							behavior: "smooth",
							block: !targetArea
								? isLargerThan992
									? "center"
									: "start"
								: targetArea,
						});
					}}
					_hover={{ cursor: "pointer" }}
				>
					<Icon
						color={"nw-yellow"}
						maxW={"full"}
						boxSize={"1.5rem"}
						as={FaArrowDown}
						filter={"drop-shadow(0px 0px 10px black)"}
					/>
				</LinkOverlay>
			</LinkBox>
		</motion.div>
	);
}
