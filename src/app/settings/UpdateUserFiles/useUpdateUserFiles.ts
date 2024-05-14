import instance from '@/api/api.interceptor'
import { useProfile } from '@/hooks/useProfile'
import { IFormData } from '@/services/user.service'
import { AxiosError } from 'axios'
import { ChangeEvent, useCallback, useMemo, useState } from 'react'

type TypeUpload = () => {
	uploadFile: (e: ChangeEvent<HTMLInputElement>) => Promise<void>
	isLoading: boolean
	error: string
}

export const useUploadUserFiles: TypeUpload = () => {
	const [isLoading, setIsLoading] = useState(false)
	const { refetch } = useProfile()
	const [error, setError] = useState<string>('')

	const uploadFile = useCallback(async (e: ChangeEvent<HTMLInputElement>) => {
		setIsLoading(true)

		const files = e.target.files
		if (!files?.length) return

		const formData = new FormData()
		formData.append('file', files[0])
		formData.append('originalName', files[0].name)

		return instance<IFormData>({
			url: `documents/upload`,
			headers: { 'Content-Type': 'multipart/form-data' },
			method: 'POST',
			data: formData
		})
			.then(() => {
				refetch()
				setIsLoading(false)
			})
			.catch((error: AxiosError) => {
				if (
					//@ts-ignore
					error?.response?.data?.message ===
					'Validation failed (expected size is less than 1048576)'
				) {
					setTimeout(() => {
						setError('Размер файла не должен превышать 1 MB')
						setIsLoading(false)
					}, 1000)
				} else {
					setTimeout(() => {
						//@ts-ignore
						setError(error?.response?.data?.message)
						setIsLoading(false)
					}, 1000)
				}
			})
	}, [])

	return useMemo(
		() => ({
			uploadFile,
			isLoading,
			error
		}),
		[uploadFile, isLoading, error]
	)
}
