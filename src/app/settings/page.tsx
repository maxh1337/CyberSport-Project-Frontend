import { Metadata } from 'next'
import EditProfilePage from './EditProfilePage'

export const metadata: Metadata = {
	description: 'Edit profile data page',
	title: 'My Profile'
}

const Page = () => {
	return <EditProfilePage />
}
export default Page
