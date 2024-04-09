import { REFRESH_TOKEN } from '@/constants/token.constants'
import { getAccessToken } from '@/services/auth/auth.helper'
import { useUsersZustand } from '@/store/user/user-store'
import Cookies from 'js-cookie'
import { usePathname, useRouter } from 'next/navigation'
import { FC, PropsWithChildren, useEffect } from 'react'
import { protectedRoutes } from './protected-routes.data'

const AuthProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
	const { user, getNewTokens, logOut } = useUsersZustand()

	const { replace } = useRouter()

	const pathname = usePathname()

	useEffect(() => {
		const accessToken = getAccessToken()
		if (accessToken) getNewTokens()
	}, [])

	useEffect(() => {
		const refreshToken = Cookies.get(REFRESH_TOKEN)
		if (!refreshToken && user) logOut()
	}, [pathname])

	useEffect(() => {
		if (
			!user &&
			pathname !== ('/auth/login' || '/auth/register') &&
			isProtectedRoute
		) {
			replace('/auth/login')
		}
	}, [pathname, user])

	const isProtectedRoute = protectedRoutes.some(route =>
		pathname?.startsWith(route)
	)

	if (!isProtectedRoute) return <>{children}</>

	if (user?.isAdmin) return <>{children}</>
	if (user && !isProtectedRoute) return <>{children}</>

	// if (pathname !== ('/auth/login' || '/auth/register')) {
	// 	push('/auth/login')
	// }

	return <>{children}</>
}

export default AuthProvider
