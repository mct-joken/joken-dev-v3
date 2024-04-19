/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		fontFamily: {
			'sans': ["'Inter'", "'Noto Sans JP'", 'sans-serif'],
		},
		extend: {}
	},

	plugins: []
};

module.exports = config;
