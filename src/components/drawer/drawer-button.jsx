import { Flex, Text } from "@chakra-ui/react";

export default function DrawerButton({
	href,
	name,
	lastItem = undefined,
	onClose,
	...props
}) {
	return (
		<Flex
			onClick={() => {
				const target = document.querySelector(href);
				target.scrollIntoView({
					behavior: "auto",
					block: "start",
				});
				onClose();
			}}
			justify={"center"}
			align={"center"}
			color={"nw-yellow"}
			_hover={{
				cursor: "pointer",
				background: "nw-yellow",
				color: "black",
				textShadow: "0px 0px black",
			}}
			{...props}
		>
			<Text
				textAlign={"center"}
				py={[1, 1, 2]}
				px={2}
				fontWeight={700}
				fontSize={["nw-sm", "nw-sm", "nw-sm", "nw-sm", "nw-md"]}
			>
				{name}
			</Text>
		</Flex>
	);
}
