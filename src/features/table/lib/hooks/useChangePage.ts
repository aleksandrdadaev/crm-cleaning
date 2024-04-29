import { ScrollState } from 'react-scrollbars-custom/dist/types/types'

import { useQueryParams } from '@/shared/lib/hooks/useQueryParams'

export const useChangePage = (isShowMore: boolean) => {
	const { params, replaceUrl } = useQueryParams()
	const changePage: ((scrollValues: ScrollState) => void) | undefined = ({
		scrollTop,
		clientHeight,
		contentScrollHeight,
	}) => {
		if (scrollTop >= contentScrollHeight - clientHeight - 100 && isShowMore) {
			params.has('p')
				? params.set('p', String(Number(params.get('p')) + 1))
				: params.set('p', '2')
			replaceUrl()
		}
	}

	return {
		changePage,
	}
}
