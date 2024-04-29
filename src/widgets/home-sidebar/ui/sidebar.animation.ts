import { Variants } from 'framer-motion'

export const sidebarOpen: Variants = {
	initial: {},
	animate: {
		width: 200,
		transition: {
			type: 'spring',
			duration: 0.65,
			bounce: 0.4,
			when: 'beforeChildren',
		},
	},
}

export const sidebarClose: Variants = {
	initial: {},
	animate: {
		width: 64,
		transition: {
			type: 'spring',
			duration: 0.65,
			bounce: 0.4,
			when: 'afterChildren',
		},
	},
}
