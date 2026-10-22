import { defineConfig, globalIgnores } from "eslint/config";
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

export default defineConfig([
	...nextCoreWebVitals,
	// Runs Prettier as an ESLint rule and turns off rules that conflict with it.
	eslintPluginPrettierRecommended,
	{
		rules: {
			"prettier/prettier": "error",
			"arrow-body-style": "off",
			"prefer-arrow-callback": "off",
			// Marketing copy is full of apostrophes and quotes; escaping them all adds noise.
			"react/no-unescaped-entities": "off",
			// New React Compiler rule (react-hooks 7). The two hits are intentional
			// mount-only effects (useIsMounted, merge.jsx's random frames).
			"react-hooks/set-state-in-effect": "warn",
		},
	},
	globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
]);
