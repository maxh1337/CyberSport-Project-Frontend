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
	{ value: 'Coach', label: 'Тренер' },
	{ value: 'Referee', label: 'Судья' },
	{ value: 'Manager', label: 'Менеджер' },
	{ value: 'Organizer', label: 'Организатор' },
	{ value: 'Executor', label: 'Исполнитель' }
]
