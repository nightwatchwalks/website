import { Flex } from "@chakra-ui/react";

export default function SectionContainer({ children, ...props }) {
	return (
		<Flex
			flexDir={"column"}
			w={"full"}
			align={"center"}
			maxW={{ base: "960px", xl: "1000px", "2xl": "1100px" }}
			px={"1rem"}
			minH={"100vh"}
			{...props}
		>
			{children}
		</Flex>
	);
}
