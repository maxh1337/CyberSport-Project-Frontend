import instance from '@/api/api.interceptor'
import { FilesService } from '@/services/files.service'
import { useMutation } from '@tanstack/react-query'
import { useProfile } from '../useProfile'

export async function handleDownload(fileName: string, currentFileId: number) {
	return instance<File>({
		url: `documents/download/${currentFileId}`,
		method: 'GET'
	}).then(response => {
		const url = window.URL.createObjectURL(new Blob([response.data]))
		const link = document.createElement('a')
		link.href = url
		link.download = fileName
		document.body.appendChild(link)
		link.click()
		link.remove()
	})
}

export const DeleteUserFile = (fileId: number) => {
	const { refetch } = useProfile()

	const { mutate, error: err } = useMutation({
		mutationKey: ['delete theme'],
		mutationFn: () => FilesService.deleteUserFile(fileId),
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
