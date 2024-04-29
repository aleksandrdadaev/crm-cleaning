import { FC, PropsWithChildren, useEffect, useRef, useState } from 'react'
import { Scrollbar } from 'react-scrollbars-custom'

import { ITableProps } from '@/shared/model/types/table.type'

import { useChangePage } from '../../lib/hooks/useChangePage'
import { useScrollToTop } from '../../lib/hooks/useScrollToTop'

import styles from './TableScroll.module.scss'

const TableScroll: FC<PropsWithChildren<Omit<ITableProps, 'table'>>> = ({
	children,
	isClearPagination,
	isShowMore,
}) => {
	const { changePage } = useChangePage(isShowMore)
	const ref = useScrollToTop(isClearPagination)

	return (
		<Scrollbar
			disableTrackYMousewheelScrolling
			ref={ref}
			renderer={({ elementRef, ...restProps }) => {
				return <div {...restProps} ref={elementRef} className={styles.custom} />
			}}
			wrapperProps={{
				renderer: ({ elementRef, ...restProps }) => {
					return (
						<div {...restProps} ref={elementRef} className={styles.wrapper} />
					)
				},
			}}
			scrollerProps={{
				renderer: ({ elementRef, ...restProps }) => {
					return (
						<div {...restProps} ref={elementRef} className={styles.scroller} />
					)
				},
			}}
			trackXProps={{
				renderer: ({ elementRef, ...restProps }) => {
					return (
						<div {...restProps} ref={elementRef} className={styles.trackX} />
					)
				},
			}}
			thumbXProps={{
				renderer: ({ elementRef, ...restProps }) => {
					return (
						<div {...restProps} ref={elementRef} className={styles.thumbX} />
					)
				},
			}}
			contentProps={{
				renderer: ({ elementRef, ...restProps }) => {
					return (
						<div {...restProps} ref={elementRef} className={styles.content} />
					)
				},
			}}
			trackYProps={{
				renderer: ({ elementRef, ...restProps }) => {
					return (
						<div {...restProps} ref={elementRef} className={styles.trackY} />
					)
				},
			}}
			scrollDetectionThreshold={500}
			onScrollStop={changePage}
		>
			{children}
		</Scrollbar>
	)
}

export default TableScroll
