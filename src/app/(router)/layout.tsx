import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import MainProvider from '../providers/MainProvider'
import '../styles/global.scss'

const inter = Inter({
	weight: ['400', '600', '700'],
	style: 'normal',
	variable: '--font-inter',
	subsets: ['cyrillic'],
	display: 'swap',
})
export const metadata: Metadata = {
	title: 'Главная',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html
			lang='ru'
			style={{
				fontFamily: inter.style.fontFamily,
			}}
		>
			<body>
				<MainProvider>{children}</MainProvider>
			</body>
		</html>
	)
}
