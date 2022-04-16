module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'primary-c': 'var(--color-primary)',
				'secondary-c': 'var(--color-secondary)',
				'black-c': 'var(--color-black)',
				white: 'var(--color-white)',
				'blue-c': 'var(--color-blue)',
				'blue-light': 'var(--color-blue-light)',
				'blue-lighter': 'var(--color-blue-lighter)',
				'blue-dark': 'var(--color-blue-dark)',
				'gray-acadia': 'var(--color-gray-acadia)',
			},
			width: {
				340: '340px',
			},
			fontSize: {
				h1: 'var(--text-xxl, 2rem)',
				h2: 'var(--text-xl, 1.75rem)',
				h3: 'var(--text-lg, 1.375rem)',
				h4: 'var(--text-md, 1.125rem)',
				base: 'var(--text-base-size, 1rem)',
				tiny: ['var(--text-tiny-size, 0.5rem)', '13px'],
				xs: ['var(--text-xs-size, 0.75rem)', '20px'],
				sm: ['var(--text-sm-size, 0.875rem)', '18px'],
				md: ['var(--text-md-size, 1rem)', '19px'],
				lg: ['var(--text-lg-size, 1.125rem)', '20px'],
				xl: ['var(--text-xl-size, 1.25rem)', '32px'],
				'2xl': ['var(--text-2xl-size, 1.5rem)', '20px'],
				'3xl': ['var(--text-3xl-size, 1.875rem)', '16px'],
			},
			boxShadow: {
				'menu': '0px 0px 8px rgba(0, 0, 0, 0.2)',
				'box': '0px 2px 12px rgba(0, 0, 0, 0.12)',
				'expansion': '0px 0px 8px rgba(0, 0, 0, 0.04)',
			},
			spacing: {
				'60px': '60px',
			}
		},
		screens: {
			xs: '32rem',
			// => @media (min-width: 512px) { ... }

			sm: '48rem',
			// => @media (min-width: 768px) { ... }

			md: '64rem',
			// => @media (min-width: 1024px) { ... }

			'md-max': { max: '63.875rem' },

			lg: '80rem',
			// => @media (min-width: 1280px) { ... }

			xl: '90rem',
			// => @media (min-width: 1440px) { ... }

			'2xl': '1536px',
			// => @media (min-width: 1536px) { ... }
		},
	},
	plugins: [],
};
