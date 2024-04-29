'use client'

import { useLayoutEffect, useState } from 'react'

export const useNow = (updateInterval: number, enabled: any) => {
	const [now, setNow] = useState<number>(Date.now())

	useLayoutEffect(() => {
		if (!enabled) return
		setNow(Date.now())
		const interval = setInterval(() => setNow(Date.now()), updateInterval)
		return () => clearInterval(interval)
	}, [updateInterval, enabled])
	return now
}
