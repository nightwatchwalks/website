import { Flex } from "@chakra-ui/react";

export default function Section({ children, ...props }) {
	return (
		<Flex
			flexDir={"column"}
			align={"center"}
			w={"full"}
			as={"section"}
			position={"relative"}
			{...props}
		>
			{children}
		</Flex>
	);
}
