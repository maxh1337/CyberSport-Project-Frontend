import { Metadata } from 'next'
import Home from './(customer)/home-page/Home'

export const metadata: Metadata = {
	description: 'Esports tournaments'
}

export const revalidate = 60

export default async function HomePage() {
	return <Home />
}
