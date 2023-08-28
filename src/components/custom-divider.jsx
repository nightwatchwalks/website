import { Center, Divider } from "@chakra-ui/react";

export default function CustomDivider({ ...props }) {
	return (
		<Center>
			<Divider
				w={"36rem"}
				maxW={["70vw", "80vw", "90vw"]}
				borderBottomWidth={"1px"}
				borderColor={"white"}
				opacity={"0.6"}
				my={"3rem"}
				{...props}
			/>
		</Center>
	);
}
