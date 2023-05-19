/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,ts}'],
	theme: {
		colors: {
			black: '#111111',
			'light-gray': '#717171',
			'lighter-gray': '#1111111a',
			'input-gray': '#11111133',
			'bgd-gray': '#f3f3f2',
			red: '#ff385c',
			'dark-red': '#d43b51',
			white: "#ffffff"
		},
		extend: {
			transitionProperty: {
				'width': 'width'
		},
		},
	},
	plugins: [],
};
