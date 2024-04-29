import { FC, PropsWithChildren } from 'react'

import InterceptorProvider from './InterceptorProvider'
import StoreProvider from './StoreProvider'
import QueryProvider from './query-provider/QueryProvider'

const MainProvider: FC<PropsWithChildren> = ({ children }) => {
	return (
		<QueryProvider>
			<StoreProvider>
				<InterceptorProvider>{children}</InterceptorProvider>
			</StoreProvider>
		</QueryProvider>
	)
}

export default MainProvider
