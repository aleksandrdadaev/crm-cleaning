import { useEffect, useRef } from 'react'

interface ICLickOutside {
	callback: () => void
	contains?: boolean
}

export const useClickOutside = ({
	callback,
	contains = false,
}: ICLickOutside) => {
	const ref = useRef<any>(null)

	useEffect(() => {
		const handleClickOutside = (event: Event) => {
			if (
				contains
					? ref.current && !ref.current.contains(event.target as Node)
					: ref.current
			) {
				setTimeout(callback, 200)
			}
		}

		document.addEventListener('mousedown', handleClickOutside)
		document.addEventListener('touchstart', handleClickOutside)

		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
			document.removeEventListener('touchstart', handleClickOutside)
		}
	}, [callback])

	return ref
}
