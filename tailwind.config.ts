const twColors = require('tailwindcss/colors')

const colors = {
	transparent: twColors.transparent,
	blue: '#007bff',
	error: '#db1035',
	success: '#55ad4d',
	behance1: '#FFFFFF',
	white: twColors.white,
	accent: '#F0EEF9',
	accent1: '#f7f6fb',
	accent2: '#B2B4C9',
	secondary: '#3F2ED9',
	bg: 'linear-gradient(90deg, #100e19 0%, #1c1326 46.87%, #100e19 100%)'
}

// module.exports =

module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
	theme: {
		colors,
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
			},
			keyframes: {
				'fade-in': {
					from: { opacity: '0' },
					to: { opacity: '1' }
				},
				'fade-out': {
					from: { opacity: '1' },
					to: { opacity: '0' }
				}
			},
			animation: {
				'fade-in': ' fade-in 1.5s ease-in',
				'fade-in-easy': ' fade-in .5s ease-in-out'
			}
		}
	}
}
