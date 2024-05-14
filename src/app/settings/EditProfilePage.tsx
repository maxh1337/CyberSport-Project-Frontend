'use client'

import { useProfile } from '@/hooks/useProfile'
import Button from '@/ui/button/Button'
import Field from '@/ui/input/Field'
import { FC, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import Select from 'react-select'
import { validEmail } from '../auth/valid-email'
import styles from './EditProfilePage.module.scss'
import UpdateAvatar from './UpdateAvatar/UpdateAvatar'
import UpdateUserFiles from './UpdateUserFiles/UpdateUserFiles'
import { IEditForm1Fields, SelectOptions } from './editProfile.interface'

const EditProfilePage: FC = () => {
	const { data, isLoading: isProfileLoading, refetch } = useProfile()
	const [count, setCount] = useState(0)
	const [playerType, setPlayerType] = useState<string | undefined>('')

	const {
		register: form1,
		getValues: getValuesForm1,
		setValue,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm<IEditForm1Fields>({
		mode: 'onChange'
	})

	useEffect(() => {
		if (data?.description) {
			let count = data.description.substring(0, 100).length
			setCount(count)
			setValue('description', data.description)
			setValue('nickname', data.nickname)
			setValue('email', data.email)
		}
	}, [isProfileLoading])

	return (
		<section className={styles.main}>
			<div className={styles.div1}>
				<h1>НАСТРОЙКИ АККАУНТА</h1>
			</div>
			<div className={styles.div2}>
				<form className='flex'>
					<div className=' w-full'>
						<Field
							{...form1('nickname', {
								required: 'Имя пользователя является обязательным',
								minLength: {
									value: 3,
									message: 'Значение должно содержать минимум 3 символа.'
								}
							})}
							defaultValue={data?.nickname}
							error={errors?.nickname?.message}
							placeholder='Имя пользователя'
							className=' w-9/12 !rounded-none'
						/>
						<div>
							<span className=' mb-1 ml-1'>Тип аккаунта</span>
							<Select
								onChange={value => setPlayerType(value?.value)}
								defaultValue={SelectOptions[0]}
								classNamePrefix='custom-select'
								options={SelectOptions}
								className=' w-9/12'
								placeholder='Тип аккаунта'
							/>
						</div>
					</div>
					<div className=' w-full'>
						<Field
							autoComplete='email'
							type='Email'
							placeholder='Email'
							className=' w-9/12'
							{...form1('email', {
								required: 'Email is required',
								pattern: {
									value: validEmail,
									message: 'Значение не является правильным email адресом.'
								}
							})}
							defaultValue={data?.email}
							error={errors.email?.message}
						/>
					</div>
				</form>
			</div>
			<div className={styles.div3}>
				<form className='flex flex-col'>
					<div className='flex gap-4 w-11/12'>
						<Field
							{...form1('oldPassword', {
								required: 'Старый пароль является обязательным',
								minLength: {
									value: 8,
									message: 'Значение должно содержать минимум 8 символов.'
								}
							})}
							type='password'
							error={errors?.oldPassword?.message}
							placeholder='Старый пароль'
							className='w-10/12 !rounded-none'
						/>
						<Field
							{...form1('newPassword', {
								required: 'Пароль является обязательным',
								minLength: {
									value: 8,
									message: 'Значение должно содержать минимум 8 символов.'
								}
							})}
							type='password'
							error={errors?.newPassword?.message}
							placeholder='Новый пароль'
							className=' w-10/12 !rounded-none'
						/>
						<Field
							{...form1('newPasswordRepeat', {
								required: 'Пароль является обязательным',
								minLength: {
									value: 8,
									message: 'Значение должно содержать минимум 8 символов.'
								}
							})}
							type='password'
							error={errors?.newPasswordRepeat?.message}
							placeholder='Повторите пароль'
							className=' w-10/12 !rounded-none'
						/>
					</div>
					<div className=' w-full'>
						<span className='mb-1 block ml-1'>О себе</span>
						<textarea
							{...form1('description', {
								maxLength: {
									value: 99,
									message: 'Максимальное значение 99 символов'
								}
							})}
							cols={10}
							rows={2}
							defaultValue={data?.description}
							onChange={e => setCount(e.target.value.substring(0, 100).length)}
							wrap='soft'
							maxLength={100}
							className='px-4 py-2 w-6/12 outline-none border-accent2 border focus:border-accent transition-all rounded-lg placeholder:text-sm'
						></textarea>
						<div className='mt-1 ml-1 text-sm justify-end flex w-6/12'>
							<span className=' mr-2'>{`${count} / 100`}</span>
						</div>
					</div>
				</form>
			</div>
			<div className={styles.div4}>
				<UpdateUserFiles />
			</div>
			<div className={styles.div5}>
				<UpdateAvatar />
			</div>
			<div className={styles.div6}>
				<div>
					<Button
						variant='auth-outlined'
						className='mr-3'
						onClick={() => {
							reset({
								oldPassword: '',
								newPassword: '',
								newPasswordRepeat: '',
								nickname: data?.nickname,
								email: data?.email,
								description: data?.description
							})
							data && setCount(data.description.substring(0, 100).length)
						}}
					>
						Отменить
					</Button>
					<Button variant='auth-contained'>Сохранить</Button>
				</div>
			</div>
		</section>
	)
}
export default EditProfilePage

// Refresh Xig
// Access 5BS
