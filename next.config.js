/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	// react-chrono 2.9's CommonJS build breaks styled-components 6 interop when
	// loaded as a server external; bundling it uses the ESM build instead.
	transpilePackages: ["react-chrono"],
};

module.exports = nextConfig;
