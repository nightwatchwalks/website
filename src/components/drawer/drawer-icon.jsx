import { Flex, Text } from "@chakra-ui/react";

export default function DrawerIcon({
	children,
	name = undefined,
	selected = undefined,
	onClick = undefined,
	size = undefined,
	...props
}) {
	const sizeArr = size == "sm" ? [8, 8, 10] : [10, 10, 14];
	return (
		<Flex
			flexDir={"column"}
			gap={1}
			justifyContent={"center"}
			alignItems={"center"}
			onClick={onClick}
			_hover={{ cursor: "pointer" }}
		>
			<Flex
				h={sizeArr}
				w={sizeArr}
				borderRadius={"lg"}
				bg={selected ? "nw-yellow" : "unset"}
				justifyContent={"center"}
				alignItems={"center"}
				flexDir={"column"}
				alignSelf={"center"}
				justifySelf={"center"}
				_hover={{ background: "nw-yellow", color: "black" }}
				{...props}
			>
				{children}
			</Flex>
			<Text
				textAlign={"center"}
				fontSize={["nw-xs"]}
				fontWeight={700}
				color={"white"}
			>
				{name}
			</Text>
		</Flex>
	);
}
