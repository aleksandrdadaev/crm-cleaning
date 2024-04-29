import { IPeriods, Period } from '../../model/types/period.type'

export const getPeriods = (period: Period): IPeriods => {
	const dateNow = new Date()

	if (period === Period.day) {
		const firstDateFrom = new Date(dateNow)
		firstDateFrom.setHours(0, 0, 0, 0)

		const firstDateTo = new Date(dateNow)
		firstDateTo.setDate(firstDateTo.getDate() + 1)
		firstDateTo.setHours(0, 0, 0, -1)

		const secondDateFrom = new Date(firstDateFrom)
		secondDateFrom.setDate(secondDateFrom.getDate() - 1)

		const secondDateTo = new Date(firstDateTo)
		secondDateTo.setDate(secondDateTo.getDate() - 1)

		return {
			firstPeriod: {
				dateFrom: firstDateFrom.toISOString(),
				dateTo: firstDateTo.toISOString(),
			},
			secondPeriod: {
				dateFrom: secondDateFrom.toISOString(),
				dateTo: secondDateTo.toISOString(),
			},
		}
	}

	if (period === Period.week) {
		const firstDateFrom = new Date(dateNow)
		firstDateFrom.setDate(firstDateFrom.getDate() - firstDateFrom.getDay() + 1)
		firstDateFrom.setHours(0, 0, 0, 0)

		const firstDateTo = new Date(dateNow)
		firstDateTo.setDate(firstDateFrom.getDate() + 7)
		firstDateTo.setHours(0, 0, 0, -1)

		const secondDateFrom = new Date(firstDateFrom)
		secondDateFrom.setDate(secondDateFrom.getDate() - 7)

		const secondDateTo = new Date(firstDateTo)
		secondDateTo.setDate(secondDateTo.getDate() - 7)

		return {
			firstPeriod: {
				dateFrom: firstDateFrom.toISOString(),
				dateTo: firstDateTo.toISOString(),
			},
			secondPeriod: {
				dateFrom: secondDateFrom.toISOString(),
				dateTo: secondDateTo.toISOString(),
			},
		}
	}

	if (period === Period.month) {
		const firstDateFrom = new Date(dateNow)
		firstDateFrom.setDate(1)
		firstDateFrom.setHours(0, 0, 0, 0)

		const firstDateTo = new Date(dateNow)
		firstDateTo.setMonth(firstDateTo.getMonth() + 1, 1)
		firstDateTo.setHours(0, 0, 0, -1)

		const secondDateFrom = new Date(firstDateFrom)
		secondDateFrom.setMonth(secondDateFrom.getMonth() - 1)

		const secondDateTo = new Date(secondDateFrom)
		secondDateTo.setMonth(secondDateTo.getMonth() + 1, 1)
		secondDateTo.setHours(0, 0, 0, -1)

		return {
			firstPeriod: {
				dateFrom: firstDateFrom.toISOString(),
				dateTo: firstDateTo.toISOString(),
			},
			secondPeriod: {
				dateFrom: secondDateFrom.toISOString(),
				dateTo: secondDateTo.toISOString(),
			},
		}
	}

	return {
		firstPeriod: {
			dateFrom: '',
			dateTo: '',
		},
		secondPeriod: {
			dateFrom: '',
			dateTo: '',
		},
	}
}
