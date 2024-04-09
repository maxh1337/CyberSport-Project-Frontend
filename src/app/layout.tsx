import { SITE_NAME } from '@/constants/seo.constants'
import Providers from '@/providers/Providers'
import type { Metadata } from 'next'
import { Inter, Play } from 'next/font/google'
import '../assets/styles/globals.scss'
import '../assets/styles/react-select.scss'
import styles from './layout.module.scss'
import Header from './layout/header/Header'
import Sidebar from './layout/sidebar/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export const getSiteUrl = () => process.env.APP_URL as string

export const metadata: Metadata = {
	icons: {
		icon: '/images/favicon.svg'
	},
	title: {
		absolute: 'ProfiDraft Esports',
		template: `%s | ProfiDraft`
	},
	metadataBase: new URL(getSiteUrl()),
	openGraph: {
		type: 'website',
		siteName: SITE_NAME,
		emails: ['info@plants.com']
	}
}

const play = Play({
	weight: ['400', '700'],
	subsets: ['latin', 'cyrillic-ext'],
	display: 'swap',
	style: ['normal'],
	variable: '--font-golos'
})

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en' className={play.style.fontFamily}>
			<body className={play.className}>
				<Providers>
					<div className='bg-white h-full'>
						<Header />
						<div
							className='grid'
							style={{
								gridTemplateColumns: '.9fr 4.1fr'
							}}
						>
							<Sidebar />
							<main className={styles.main}>{children}</main>
						</div>
					</div>
				</Providers>
			</body>
		</html>
	)
}
