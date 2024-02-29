/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./*.html'],
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '1024px',
			xl: '1440px',
		},

		extend: {
			colors: {
				primary: '#491456',
				secondary: '#C6B732',
				tertiary: '#A988B1',
				text: '#0B0514',
				bg: '#E4DAFF',
				lightBg: '#F1F1F1',
				prTrans: '#491456b3',
			},
			fontFamily: {
				customFont: ['Laila', 'serif'],
			},
			backgroundImage: {
				heroImg: "url('/assets/banner.png')",
			},
		},
	},
	plugins: [],
};
