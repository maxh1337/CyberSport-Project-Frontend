import { IUser } from '@/types/user.interface'

import { instance } from '@/api/api.interceptor'

export const USERS = 'users'

export interface IFormData {
	file: File
}

export const UserService = {
	async getProfile() {
		return instance<IUser>({
			url: `${USERS}/profile`,
			method: 'GET'
		})
	},

	async uploadFile(data: FormData) {
		return instance<IFormData>({
			url: `${USERS}/upload-avatar`,
			method: 'POST',
			data: data
		})
	}
}
