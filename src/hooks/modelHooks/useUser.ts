import { UpdateProfileDto, UserService } from '@/services/user.service'
import { useProfile } from '../useProfile'
import { useMutation } from '@tanstack/react-query'

export const UpdateProfile = (data: UpdateProfileDto) => {
	const { refetch } = useProfile()

	const { mutate, error: err } = useMutation({
		mutationKey: ['update user profile'],
		mutationFn: () => UserService.updateProfile(data),
		onSuccess() {
			refetch()
		},
		onError(error) {
			console.log(error)
			console.log(err)
		}
	})

	return { mutate, err }
}
