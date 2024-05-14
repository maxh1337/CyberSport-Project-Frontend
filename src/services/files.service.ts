import instance from '@/api/api.interceptor'
import { IUserFile } from '@/types/user.interface'

export const FilesService = {
	async deleteUserFile(fileId: number) {
		return instance<IUserFile>({
			url: `documents/delete/${fileId}`,
			method: 'DELETE'
		})
	}
}
