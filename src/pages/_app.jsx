import { ChakraProvider, useMediaQuery } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import "@fontsource/montserrat/200.css";
import "@fontsource/montserrat/300.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";
import "@fontsource/montserrat/800.css";
import "@fontsource/montserrat/900.css";
import "@fontsource/cinzel/400.css";
import "@fontsource/cinzel/500.css";
import "@fontsource/cinzel/600.css";
import "@fontsource/cinzel/700.css";
import "@fontsource/cinzel/800.css";
import "@fontsource/cinzel/900.css";
import "animate.css";
import "../styles/global.css";
import Head from "next/head";
import Script from "next/script";

const theme = extendTheme({
	styles: {
		global: {
			"html, body": {
				fontFamily: "'Montserrat', sans-serif",
				color: "#ffffff",
			},
			body: {
				backgroundColor: "#000000",
			},
		},
	},
	colors: {
		"nw-yellow": "#ffc107",
		button: {
			header: {
				default: "#2A2B2D",
				active: "#DFDFDF",
				hover: "#DFDFDF",
				disabled: "#2A2B2D75",
				text: {
					default: "#EEEEEE",
					active: "#000000",
					hover: "#000000",
					disabled: "#EEEEEE",
				},
			},
		},
	},
	breakpoints: {
		sm: "480px",
		md: "768px",
		lg: "992px",
		xl: "1280px",
		"2xl": "1536px",
		"3xl": "1920px",
	},
	fontSizes: {
		"nw-2xs": "0.7rem",
		"nw-xs": "1rem",
		"nw-sm": "1.2rem",
		"nw-md": "1.5rem",
		"nw-lg": "1.875rem",
		"nw-xl": "2rem",
		"nw-2xl": "3rem",
		"nw-3xl": "4rem",
		"nw-4xl": "5rem",
	},
	fonts: {
		heading: "'Montserrat', sans-serif",
		body: "'Montserrat', sans-serif",
	},
});

function MyApp({ Component, pageProps }) {
	const [isLightMode] = useMediaQuery("(prefers-color-scheme: light)");
	const colorMode = isLightMode ? "light" : "dark";

	return (
		<ChakraProvider theme={theme}>
			<Head>
				{/* General Meta */}
				<title>Night Watch - Impossible Trios</title>
				<meta name="title" content="Night Watch - Impossible Trios" />
				<meta
					name="description"
					content="Night Watch is an experimental and unique art collection with an on-chain game."
				/>
				<meta
					name="keywords"
					content="NFT, Art, Game, Night Watch, On-chain game, art collection, deflationary"
				/>

				{/* Favicon */}
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href={"/favicon/" + colorMode + "/apple-touch-icon.png"}
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href={"/favicon/" + colorMode + "/favicon-32x32.png"}
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href={"/favicon/" + colorMode + "/favicon-16x16.png"}
				/>
				<link rel="icon" href={"/favicon/" + colorMode + "/favicon.ico"} />
				<link
					rel="manifest"
					href={"/favicon/" + colorMode + "/site.webmanifest"}
				/>

				{/* SEO */}
				<meta property="og:title" content="Night Watch - Impossible Trios" />
				<meta property="og:image" content="https://i.imgur.com/lLIRfyy.jpg" />
				<meta
					property="og:description"
					content="Night Watch is an experimental and unique art collection with an on-chain game."
				/>
				<meta property="og:url" content="https://nightwatch.art" />
				<meta property="og:type" content="website" />

				{/* Twitter */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:url" content="https://nightwatch.art" />
				<meta name="twitter:title" content="Night Watch - Impossible Trios" />
				<meta
					name="twitter:description"
					content="Night Watch is an experimental and unique art collection with an on-chain game."
				/>
				<meta name="twitter:image" content="https://i.imgur.com/lLIRfyy.jpg" />
				<meta
					name="twitter:image:src"
					content="https://i.imgur.com/lLIRfyy.jpg"
				/>
				<meta name="twitter:site" content="@nightwatch_art" />
			</Head>
			{/* Google Analytics */}
			<Script
				src="https://www.googletagmanager.com/gtag/js?id=G-9V89PVWCGS"
				strategy="afterInteractive"
			/>
			<Script id="google-analytics" strategy="afterInteractive">
				{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-9V89PVWCGS');
        `}
			</Script>

			<Component {...pageProps} />
		</ChakraProvider>
	);
}
export default MyApp;
