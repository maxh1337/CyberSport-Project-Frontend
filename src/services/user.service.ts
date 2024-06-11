import { IUser } from '@/types/user.interface'

import { instance } from '@/api/api.interceptor'

export const USERS = 'users'

export interface IFormData {
	file: File
}

export type userStatus =
	| 'Player'
	| 'Referee'
	| 'Coach'
	| 'Manager'
	| 'Organizer'
	| 'Executor'

export interface UpdateProfileDto {
	status: userStatus
	nickname: string
	description?: string
	oldPassword?: string
	newPassword?: string
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
	},

	async updateProfile(data: UpdateProfileDto) {
		return instance<UpdateProfileDto>({
			url: `${USERS}/update-profile`,
			method: 'PUT',
			data: data
		})
	}
}
