import {
	Flex,
	Box,
	Heading,
	ListItem,
	Tabs,
	TabList,
	TabPanels,
	chakra,
	Tab,
	TabPanel,
	OrderedList,
	Text,
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
	Link,
	UnorderedList,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Section from "../section";
import DownArrow from "../icons/down-arrow";
import SectionBackground from "../section-background";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import SectionContainer from "../section-container";
import CustomDivider from "../custom-divider";
import { assetsUrl, showBuyButton } from "../../config";

const faqArray = showBuyButton
	? require("../../data/faq.json")
	: require("../../data/faq-without-sales.json");

export default function FAQ() {
	return (
		<>
			<Section id={"faq"}>
				<SectionBackground image={assetsUrl + "/images/sections/faq.webp"} />
				<SectionContainer maxW={"960px"}>
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: [0, 1] }}
						viewport={{ once: true }}
						transition={{ ease: "easeOut", duration: 1.5, delay: 0.125 }}
					>
						<Heading
							fontFamily={"unset"}
							fontSize={["nw-xl", "nw-xl", "nw-4xl"]}
							fontWeight={"800"}
							textShadow={"#000000 0px 0px 10px"}
							textAlign={"center"}
							whiteSpace={"pre-wrap"}
							mt={20}
						>
							{"FA"}
							<chakra.span color={"nw-yellow"}>Q</chakra.span>
						</Heading>
						<CustomDivider />
					</motion.div>
					<motion.div
						initial={{ opacity: 0, y: -12.5 }}
						whileInView={{ opacity: [0, 1], y: [-12.5, 0] }}
						viewport={{ once: true }}
						transition={{ ease: "easeOut", duration: 1.5, delay: 0.25 }}
					>
						<Text
							textShadow={"#000000 0px 0px 10px"}
							textAlign={"center"}
							maxW={"960px"}
							fontSize={["nw-xs", "nw-xs", "nw-sm"]}
						>
							<chakra.span>
								{
									"You can learn more about Night Watch by navigating the tabs of the FAQ section. If you have more question, you can always DM us on "
								}
							</chakra.span>
							<Link isExternal href={"https://twitter.com/nightwatch_art"}>
								<chakra.span fontWeight={600} color={"blue.300"}>
									{"Twitter"}
								</chakra.span>
							</Link>
							<chakra.span>{" or join our "}</chakra.span>
							<Link href={"https://discord.gg/nightwatch"} isExternal>
								<chakra.span fontWeight={600} color={"blue.300"}>
									{"Discord server!"}
								</chakra.span>
							</Link>
						</Text>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, y: 25 }}
						whileInView={{ opacity: [0, 1], y: [25, 0] }}
						transition={{ ease: "easeOut", delay: 0.5, duration: 1 }}
						viewport={{ once: true }}
						style={{ width: "100%" }}
					>
						<FAQAccordion />
					</motion.div>
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: [0, 1] }}
						viewport={{ once: true }}
						transition={{ ease: "easeOut", duration: 1, delay: 0.125 }}
					>
						<DownArrow
							my={"6rem"}
							targetSection={"crew"}
							targetArea={"start"}
						/>
					</motion.div>
				</SectionContainer>
			</Section>
		</>
	);
}

function FAQAccordion(props) {
	return (
		<Flex
			gap={[0, 0, 0]}
			flexDir={["column", "column", "column"]}
			flex={1}
			mt={10}
		>
			<Tabs isFitted variant={"enclosed-colored"}>
				<TabList gap={3}>
					<CustomTab>BASICS</CustomTab>
					<CustomTab>DETAILS</CustomTab>
				</TabList>
				<TabPanels>
					<TabPanel p={0}>
						<CustomAccordion {...props}>
							{faqArray.basics.map((faq, index) => (
								<FAQItem
									key={index}
									question={faq.question}
									answer={faq.answer}
								/>
							))}
						</CustomAccordion>
					</TabPanel>
					<TabPanel p={0}>
						<CustomAccordion {...props}>
							{faqArray.details.map((faq, index) => (
								<FAQItem
									key={index}
									question={faq.question}
									answer={faq.answer}
								/>
							))}
						</CustomAccordion>
					</TabPanel>
				</TabPanels>
			</Tabs>
		</Flex>
	);
}

function FAQItem({ question, answer }) {
	return (
		<AccordionItem mb={"0.3em"} border={"none"}>
			<h2>
				<AccordionButton
					_hover={{ bg: "#ffc107", color: "#111" }}
					_expanded={{
						borderBottomRadius: "0px",
						borderBottom: "0px",
						bg: "#ffc107",
						color: "#111",
					}}
					borderTopRadius={"5px"}
					py={"0.8em"}
					my={"0.5em"}
					borderBottomRadius={"5px"}
					fontSize={"nw-xs"}
					fontWeight={"700"}
					background={"#111"}
					color={"#ddd"}
				>
					<Box as="span" flex="1" textAlign="left">
						{question}
					</Box>
					<AccordionIcon />
				</AccordionButton>
			</h2>

			<AccordionPanel
				borderTop={"0px"}
				p={4}
				bg={"white"}
				display={["flex", "flex", "flow-root"]}
				flexDir={"column"}
				color={"#eee"}
				background={"#111"}
				justifyContent={"center"}
				alignItems={"center"}
				sx={{ wordWrap: "normal" }}
			>
				<ReactMarkdown
					components={{
						a: ({ node, ...props }) => {
							return (
								<Link
									color={"blue.300"}
									isExternal={!(props.href && props.href.startsWith("#"))}
									{...props}
								/>
							);
						},
						ol: ({ node, ...props }) => {
							return <OrderedList {...props} />;
						},
						ul: ({ node, ...props }) => {
							return <UnorderedList {...props} />;
						},
						li: ({ node, ...props }) => {
							return <ListItem {...props} />;
						},
					}}
				>
					{answer}
				</ReactMarkdown>
			</AccordionPanel>
		</AccordionItem>
	);
}

function CustomTab({ children, ...props }) {
	return (
		<Tab
			_selected={{
				background: "#181818 !important",
				cursor: "default !important",
			}}
			_hover={{ background: "#333" }}
			fontWeight={"900"}
			color={"#ddd"}
			borderRadius={"10px"}
			borderBottomRadius={"0px"}
			border={"none"}
			background={"#222222"}
			textShadow={"#000000 0px 0px 10px"}
			py={5}
			{...props}
		>
			{children}
		</Tab>
	);
}

function CustomAccordion({ children, ...props }) {
	return (
		<Accordion
			p={5}
			boxShadow={"0px 0px 10px #000000"}
			bg={"#181818"}
			color={"#3a3a3a"}
			allowToggle
			flex={1}
			{...props}
		>
			{children}
		</Accordion>
	);
}
