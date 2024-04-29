import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'
import plugin from 'tailwindcss/plugin'

const primary: string = '#9997F6'

const config: Config = {
	content: [
		'./src/app/**/*.{js,ts,jsx,tsx,mdx,scss}',
		'./src/screens/**/*.{js,ts,jsx,tsx,mdx,scss}',
		'./src/widgets/**/*.{js,ts,jsx,tsx,mdx,scss}',
		'./src/features/**/*.{js,ts,jsx,tsx,mdx,scss}',
		'./src/entities/**/*.{js,ts,jsx,tsx,mdx,scss}',
		'./src/shared/**/*.{js,ts,jsx,tsx,mdx,scss}',
	],
	theme: {
		colors: {
			primary,
			white: colors.white,
			black: colors.black,
			lightGreen: '#7EEF56',
			orange: '#F9AF57',
			coral: '#EF7373',
			gray: {
				bg: '#F2F2F2',
				100: '#E6E6E6',
				200: '#CCCCCC',
				300: '#B3B3B3',
				400: '#999999',
				500: '#808080',
				600: '#666666',
				700: '#4D4D4D',
				800: '#333333',
				900: '#1A1A1A',
			},
		},
		extend: {
			fontFamily: {
				inter: ['var(--font-inter)'],
			},
			spacing: {
				400: '400px',
				300: '300px',
				250: '250px',
				220: '220px',
				200: '200px',
				160: '160px',
				150: '150px',
				120: '120px',
				100: '100px',
				62: '62px',
				50: '50px',
				46: '46px',
				44: '44px',
				40: '40px',
				36: '36px',
				30: '30px',
				24: '24px',
				20: '20px',
				18: '18px',
				16: '16px',
				15: '15px',
				14: '14px',
				10: '10px',
				8: '8px',
				6: '6px',
				5: '5px',
				3: '3px',
				2: '2px',
			},
			borderRadius: {
				50: '50px',
				12: '12px',
				10: '10px',
				5: '5px',
				3: '3px',
				circle: '50%',
			},
			zIndex: {
				1: '1',
				2: '2',
				3: '3',
			},
			transitionTimingFunction: {
				DEFAULT: 'ease-in-out',
			},
			transitionDuration: {
				DEFAULT: '300ms',
			},
		},
	},
	plugins: [
		plugin(({ addComponents, addUtilities, theme }) => {
			addUtilities({
				'.H1': {
					fontFamily: theme('fontFamily.inter'),
					fontWeight: theme('fontWeight.regular'),
					fontSize: '48px',
					lineHeight: '120%',
				},
				'.H2': {
					fontFamily: theme('fontFamily.inter'),
					fontWeight: theme('fontWeight.regular'),
					fontSize: '24px',
					lineHeight: '120%',
				},
				'.T1': {
					fontFamily: theme('fontFamily.inter'),
					fontWeight: theme('fontWeight.semibold'),
					fontSize: '16px',
					lineHeight: '100%',
				},
				'.T2': {
					fontFamily: theme('fontFamily.inter'),
					fontWeight: theme('fontWeight.regular'),
					fontSize: '16px',
					lineHeight: '100%',
				},
				'.T3': {
					fontFamily: theme('fontFamily.inter'),
					fontWeight: theme('fontWeight.regular'),
					fontSize: '16px',
					lineHeight: '140%',
				},
				'.T4': {
					fontFamily: theme('fontFamily.inter'),
					fontWeight: theme('fontWeight.regular'),
					fontSize: '11px',
					lineHeight: '100%',
				},
				'.box-shadow': {
					boxShadow: '0 0 20px 4px rgba(0, 0, 0, 0.1)',
				},
				'.img-cover': {
					objectFit: 'cover',
					objectPosition: 'center',
				},
				'.img-contain': {
					objectFit: 'contain',
					objectPosition: 'center',
				},
			}),
				addComponents({
					'.link': {
						color: primary,
						transition: 'color 0.3s ease-in-out',
						'&:hover': {
							color: theme('colors.gray.500'),
						},
						'&:active': {
							color: primary,
						},
					},
					'.button': {
						width: 'fit-content',
						borderRadius: theme('borderRadius.10'),
						padding: '15px 20px',
						backgroundColor: primary,
						color: colors.white,
						transition:
							'background-color 0.3s ease-in-out,color 0.3s ease-in-out',
						'&:hover': {
							backgroundColor: colors.white,
							color: primary,
						},
						'&:active': {
							backgroundColor: primary,
							color: colors.white,
						},
					},
					'.button-white': {
						width: 'fit-content',
						borderRadius: theme('borderRadius.10'),
						padding: '10px',
						display: 'flex',
						alignItems: 'center',
						gap: '5px',
						backgroundColor: colors.white,
						color: primary,
						transition:
							'background-color 0.3s ease-in-out,color 0.3s ease-in-out',
						'&:hover': {
							backgroundColor: theme('colors.gray.100'),
							color: colors.black,
						},
						'&:active': {
							backgroundColor: primary,
							color: colors.white,
						},
					},
					'.wrapper-filter-form': {
						flexGrow: '1',
						width: '300px',
						display: 'flex',
						flexDirection: 'column',
						gap: '15px',
						'& > div:first-child': {
							position: 'sticky',
							top: '0px',
							paddingBottom: '5px',
							backgroundColor: theme('colors.white'),
							color: theme('colors.coral'),
						},
						'& > form': {
							flexGrow: '1',
							display: 'flex',
							flexDirection: 'column',
							gap: '20px',
							'& > div:first-child': {
								flexGrow: '1',
								display: 'flex',
								flexDirection: 'column',
								gap: '15px',
							},
							'& > div:last-child': {
								position: 'sticky',
								bottom: '0px',
								paddingTop: '10px',
								backgroundColor: theme('colors.white'),
								'& > button': {
									width: '100%',
								},
							},
						},
					},
					'.screen-table': {
						display: 'flex',
						flexDirection: 'column',
						gap: '15px',
						'& > section:last-child': {
							flexGrow: '1',
							flexShrink: '0',
						},
					},
					'.filters-dash': {
						display: 'block',
						width: '20px',
						height: '2px',
						flexShrink: '0',
						borderRadius: '1px',
						backgroundColor: theme('colors.gray.500'),
					},
				})
		}),
	],
}
export default config
