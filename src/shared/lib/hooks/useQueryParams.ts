import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export const useQueryParams = () => {
	const pathname = usePathname()
	const { replace } = useRouter()
	const searchParams = useSearchParams()
	const params = new URLSearchParams(searchParams)
	const replaceUrl = () => replace(`${pathname}?${params.toString()}`)

	return {
		replaceUrl,
		params,
	}
}
