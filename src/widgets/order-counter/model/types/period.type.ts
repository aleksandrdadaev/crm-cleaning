export const enum Period {
	day = 'day',
	week = 'week',
	month = 'month',
}

export interface IPeriods {
	firstPeriod: {
		dateFrom: string
		dateTo: string
	}
	secondPeriod: {
		dateFrom: string
		dateTo: string
	}
}

export interface IButtonPeriodConfig {
	text: string
	period: Period
	isActive?: boolean
}

export interface IButtonPeriod extends Omit<IButtonPeriodConfig, 'period'> {
	clickHandler: () => void
	disabled?: boolean
}
