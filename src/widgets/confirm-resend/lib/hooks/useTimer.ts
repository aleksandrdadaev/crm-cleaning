'use client'

import { useEffect, useState } from 'react'

import { useNow } from '@/shared/lib/hooks/useNow'

export const useTimer = (time: number) => {
	const [startAt, setStartAt] = useState<number | null>(Date.now())
	const now = useNow(1000, startAt)
	const fromStart = now - (startAt || 0)
	const countDown = Math.max(0, time * 1000 - fromStart)
	const toggleTimer = () =>
		startAt ? setStartAt(null) : setStartAt(Date.now())
	const isTimerEnd = countDown === 0
	useEffect(() => {
		if (isTimerEnd) setStartAt(null)
	}, [isTimerEnd])

	return {
		secondsLeft: Math.ceil(countDown / 1000),
		toggleTimer,
		timer: startAt,
	}
}
