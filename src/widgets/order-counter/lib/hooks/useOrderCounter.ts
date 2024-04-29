import { useState } from 'react'

import { useGetCountOrders } from '@/features/get-count-orders'

import { Period } from '../../model/types/period.type'
import { getPeriods } from '../utils/get-periods'

export const useOrderCounter = () => {
	const [open, setOpen] = useState<boolean>(false)
	const [period, setPeriod] = useState<Period>(Period.day)
	const { firstPeriod, secondPeriod } = getPeriods(period)

	const {
		count: firstCount,
		isLoading: firstIsLoading,
		isSuccess: firstIsSuccess,
	} = useGetCountOrders(firstPeriod.dateFrom, firstPeriod.dateTo)

	const {
		count: secondCount,
		isLoading: secondIsLoading,
		isSuccess: secondIsSuccess,
	} = useGetCountOrders(secondPeriod.dateFrom, secondPeriod.dateTo)

	return {
		open,
		period,
		setOpen,
		setPeriod,
		firstIsLoading,
		secondIsLoading,
		firstCount,
		secondCount,
		firstIsSuccess,
		secondIsSuccess,
	}
}
