import {default as tailwind_container_queries} from '@tailwindcss/container-queries';

/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		fontFamily: {
			'sans': ["'Inter'", "'Noto Sans JP'", 'sans-serif'],
		},
		extend: {}
	},

	plugins: [
		tailwind_container_queries
	]
};

module.exports = config;
