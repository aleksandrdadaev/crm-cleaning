import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { useGetMe } from '@/features/get-me'

import profileIcon from '@/shared/assets/icons/profile.svg'
import loaderPurple from '@/shared/assets/loaders/button-loader-purple.svg'
import loader from '@/shared/assets/loaders/button-loader.svg'
import { useAppSelector } from '@/shared/model/store/store-hooks'
import Icon from '@/shared/ui/icon/Icon'

import styles from './HeaderProfile.module.scss'

export const HeaderProfile: FC = () => {
	const { isLoading, isSuccess, me, isError } = useGetMe()
	const user = useAppSelector(state => state.user.user)
	return (
		<Link href='/profile' className={styles.wrapper}>
			<div
				className={clsx(styles.name, {
					[styles.loading]: isLoading,
				})}
			>
				{isLoading && <Image src={loader} alt='' width={44} height={44} />}
				<span>
					{isSuccess && me?.surname ? `${me.name} ${me.surname}` : me?.name}
					{isError && user?.name}
				</span>
			</div>
			<div
				className={clsx(styles.logo, {
					[styles.loading]: isLoading,
				})}
			>
				{isLoading && (
					<Image src={loaderPurple} alt='' width={44} height={44} />
				)}
				{isSuccess && me?.photoPath && (
					<Image src={me.photoPath} alt='' width={44} height={44} />
				)}
				{isSuccess && !me?.photoPath && <Icon src={profileIcon} />}
			</div>
		</Link>
	)
}
