import { Variants } from 'framer-motion'

export const errorVariants: Variants = {
	hidden: {
		opacity: 0,
		transition: {
			duration: 0.3,
		},
	},
	show: {
		opacity: 1,
		transition: {
			duration: 0.3,
		},
	},
}
