import { Metadata } from 'next'
import LoginPage from './LoginPage'

export const metadata: Metadata = {
	description: 'Login',
	title: 'Login'
}

const Page = () => {
	return <LoginPage />
}
export default Page
