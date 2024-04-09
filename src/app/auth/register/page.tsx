import { Metadata } from 'next'
import RegisterPage from './RegisterPage'

export const metadata: Metadata = {
	description: 'Login',
	title: 'Login'
}

const Page = () => {
	return <RegisterPage />
}
export default Page
