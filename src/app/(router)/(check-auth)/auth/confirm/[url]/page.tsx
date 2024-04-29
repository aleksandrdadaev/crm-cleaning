'use client'

import { useState } from 'react'

import { ConfirmAuth } from '@/screens/confirm-auth'

import { UrlContext } from '@/shared/lib/utils/context.util'
import { IParamsUrl } from '@/shared/model/types/params.type'

const page = ({ params }: IParamsUrl) => {
	const [url, setUrl] = useState<string>(params.url)
	return (
		<UrlContext.Provider value={url}>
			<ConfirmAuth />
		</UrlContext.Provider>
	)
}

export default page
