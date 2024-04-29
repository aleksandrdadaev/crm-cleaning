'use client'

import { FC, PropsWithChildren } from 'react'
import { Scrollbar } from 'react-scrollbars-custom'

import styles from './FiltersScroll.module.scss'

export const FiltersScroll: FC<PropsWithChildren> = ({ children }) => {
	return (
		<Scrollbar
			noScrollX
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
			trackYProps={{
				renderer: ({ elementRef, ...restProps }) => {
					return (
						<div {...restProps} ref={elementRef} className={styles.trackY} />
					)
				},
			}}
			thumbYProps={{
				renderer: ({ elementRef, ...restProps }) => {
					return (
						<div {...restProps} ref={elementRef} className={styles.thumbY} />
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
		>
			{children}
		</Scrollbar>
	)
}
