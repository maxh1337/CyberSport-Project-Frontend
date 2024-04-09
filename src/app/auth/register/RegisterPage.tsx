'use client'
import { useAuthRedirect } from '@/app/auth/useAuthRedirect'
import { validEmail } from '@/app/auth/valid-email'
import { useUsersZustand } from '@/store/user/user-store'
import { IRegister } from '@/types/user.interface'
import Heading from '@/ui/Heading'
import Loader from '@/ui/Loader'
import Button from '@/ui/button/Button'
import Field from '@/ui/input/Field'
import Link from 'next/link'
import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

const RegisterPage: FC = () => {
	useAuthRedirect()

	const { register, isLoading } = useUsersZustand()

	const {
		register: formRegister,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm<IRegister>({
		mode: 'onChange'
	})

	const onSubmit: SubmitHandler<IRegister> = data => {
		register(data)

		reset()
	}

	return (
		<div className='flex justify-center animate-fade-in'>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='rounded-lg bg-white p-8 mt-10 w-96 mr-24'
			>
				<Heading className='capitalize text-center mb-8'>Регистрация</Heading>

				{isLoading ? (
					<Loader />
				) : (
					<>
						<Field
							{...formRegister('nickname', {
								required: 'Имя пользователя является обязательным',
								minLength: {
									value: 3,
									message: 'Значение должно содержать минимум 3 символа.'
								}
							})}
							placeholder='Имя пользователя'
							error={errors?.nickname?.message}
							className=''
						/>
						<Field
							{...formRegister('email', {
								required: 'Email is required',
								pattern: {
									value: validEmail,
									message: 'Значение не является правильным email адресом.'
								}
							})}
							placeholder='Email'
							error={errors.email?.message}
						/>
						<Field
							{...formRegister('password', {
								required: 'Password is required',
								minLength: {
									value: 8,
									message: 'Значение должно содержать минимум 8 символов.'
								}
							})}
							type='password'
							placeholder='Пароль'
							error={errors.password?.message}
						/>
						<Link
							className=' m-auto justify-center flex text-blue'
							href='/auth/login'
						>
							Уже зарегистрированы? Войдите!
						</Link>
						<div className='text-center'>
							<Button
								variant='auth-outlined'
								size='md'
								type='submit'
								className=' mt-3'
							>
								Зарегистрироваться
							</Button>{' '}
						</div>
					</>
				)}
			</form>
		</div>
	)
}
export default RegisterPage
