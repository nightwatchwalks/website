import { Flex, Icon, Text } from "@chakra-ui/react";
import { showBuyButton } from "../config";
import { FaShoppingCart } from "react-icons/fa";

export default function CollectNowButton({ ...props }) {
	return !showBuyButton ? (
		<></>
	) : (
		<Flex
			bg={"nw-yellow"}
			p={[2, 3, 2, 3]}
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
				window.open("https://buy.impossibletrios.art", "_blank");
			}}
			{...props}
		>
			<Icon as={FaShoppingCart} boxSize={"2rem"} pr={2} />
			<Text
				textShadow={"0 0 black"}
				fontWeight={700}
				fontSize={["nw-xs", "nw-sm"]}
			>
				{"COLLECT NOW"}
			</Text>
		</Flex>
	);
}
