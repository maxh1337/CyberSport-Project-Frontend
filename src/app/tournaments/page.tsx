import { Metadata } from 'next'
import TournamentsPage from './TournamentsPage'

export const metadata: Metadata = {
	description: 'Tournaments Page',
	title: 'Tournaments'
}

const Page = () => {
	return <TournamentsPage />
}
export default Page
