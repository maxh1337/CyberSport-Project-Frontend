'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import dynamic from 'next/dynamic'
import { PropsWithChildren } from 'react'

const AuthProviderSSRFalse = dynamic(
	() => import('./auth-provider/AuthProvider'),
	{
		ssr: false
	}
)

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false
		}
	}
})

export default function Providers({ children }: PropsWithChildren) {
	return (
		<QueryClientProvider client={queryClient}>
			<AuthProviderSSRFalse>{children}</AuthProviderSSRFalse>
		</QueryClientProvider>
	)
}
