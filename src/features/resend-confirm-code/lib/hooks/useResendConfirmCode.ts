import { useMutation } from '@tanstack/react-query'

import { AuthService } from '@/shared/api/services/auth.service'
import { isDevelop } from '@/shared/config/constants.config'
import { getErrorMessage, isError } from '@/shared/lib/utils/error.util'
import { notificationError } from '@/shared/lib/utils/notification/notification.util'

export const useResendConfirmCode = (url: string) => {
	const { mutate, isPending } = useMutation({
		mutationFn: (props: any) => AuthService.resendCode(url),
		onSuccess: response =>
			isDevelop && console.log(response.data.data.confirmUrl),
		onError: error => {
			isDevelop && console.log(getErrorMessage(error))
			if (isError(error, 14) || isError(error, 5))
				notificationError(getErrorMessage(error))
		},
	})

	return {
		mutate,
		isLoading: isPending,
	}
}
