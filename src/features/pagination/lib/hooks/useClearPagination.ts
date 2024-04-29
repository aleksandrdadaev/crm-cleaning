import { useEffect, useState } from 'react'

import { useQueryParams } from '@/shared/lib/hooks/useQueryParams'

export const useClearPagination = (dependencies: any[]) => {
	const [isClearPagination, setIsClearPagination] = useState<boolean>(false)
	const { params, replaceUrl } = useQueryParams()
	useEffect(() => {
		if (params.has('p')) {
			params.delete('p')
			replaceUrl()
			setIsClearPagination(prev => !prev)
		}
	}, dependencies)

	return {
		isClearPagination,
	}
}
