import { Variants } from 'framer-motion'

export const logoVariants: Variants = {
	hidden: {
		width: 125,
	},
	show: {
		transition: {
			duration: 0.3,
			delayChildren: 0.5,
			when: 'beforeChildren',
		},
	},
	hover: {
		width: 220,
		transition: {
			duration: 0.3,
			when: 'afterChildren',
		},
	},
}

export const cVariants: Variants = {
	hidden: {
		rotate: [0, -180],
	},
	show: {
		rotate: [0, -180],
		transition: {
			duration: 0.5,
		},
	},
	hover: {
		rotate: 0,
		transition: {
			duration: 0.5,
		},
	},
}

export const leaningVariants: Variants = {
	hidden: {
		width: 0,
	},
	show: {
		width: 0,
		transition: {
			duration: 0.3,
		},
	},
	hover: {
		width: 'fit-content',
		transition: {
			duration: 0.3,
		},
	},
}
