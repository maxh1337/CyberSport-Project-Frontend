export interface IEditForm1Fields {
	nickname: string
	email: string
	status: string
	oldPassword: string
	newPassword: string
	newPasswordRepeat: string
	description: string
	avatar: string
}

export const SelectOptions = [
	{ value: 'Player', label: 'Игрок' },
	{ value: 'Coach', label: 'Тренер' }
]
