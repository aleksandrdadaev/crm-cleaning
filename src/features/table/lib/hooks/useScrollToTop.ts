import { useEffect, useRef } from 'react'

export const useScrollToTop = (dependence: boolean) => {
	const ref = useRef<any>(null)

	useEffect(() => {
		ref.current.scrollToTop()
		return () => {}
	}, [dependence])

	return ref
}
