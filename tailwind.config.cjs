/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin');

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			
		},
	},
	plugins: [
		plugin(function({ addBase }) {
		 addBase({
			'html': { fontSize: "16px" },
		  })
		}),
	],
}
