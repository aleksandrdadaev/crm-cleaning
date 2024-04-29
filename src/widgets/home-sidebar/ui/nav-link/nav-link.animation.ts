import { Variants } from 'framer-motion'

export const navLinkVariants: Variants = {
	initial: {
		opacity: 0,
		transition: {
			duration: 0.3,
		},
	},
	animate: {
		opacity: 1,
		transition: {
			duration: 0.3,
		},
	},
}
