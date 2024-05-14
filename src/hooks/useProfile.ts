import { useQuery } from '@tanstack/react-query'

import { UserService } from '@/services/user.service'
import { useUsersZustand } from '@/store/user/user-store'

export function useProfile() {
	const { user } = useUsersZustand()

	const { data, refetch, isLoading } = useQuery({
		queryKey: ['get profile'],
		queryFn: () => UserService.getProfile(),
		select: ({ data }) => data,
		enabled: !!user
	})

	return {
		data,
		refetch,
		isLoading
	}
}
