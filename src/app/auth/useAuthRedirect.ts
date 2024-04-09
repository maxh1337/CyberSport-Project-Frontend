import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

import { useUsersZustand } from '@/store/user/user-store'

export const useAuthRedirect = () => {
	const { user } = useUsersZustand()

	const { replace } = useRouter()

	useEffect(() => {
		if (user) replace('/')
	}, [user])
}
