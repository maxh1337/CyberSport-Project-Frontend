'use client'

import { useOutside } from '@/hooks/useOutside'
import { useProfile } from '@/hooks/useProfile'
import { useUsersZustand } from '@/store/user/user-store'
import Link from 'next/link'
import { FC } from 'react'
import { FiLogOut } from 'react-icons/fi'
import { IoIosSettings, IoMdSettings } from 'react-icons/io'

const HeaderProfile: FC = () => {
	const { isShow, ref, setIsShow } = useOutside(false)
	const { user, logOut } = useUsersZustand()
	const { data } = useProfile()

	return (
		<div className=' relative' ref={ref}>
			<img
				src={`http://localhost:5200/uploads/avatars/${data?.avatar?.documentName}`}
				alt={user.nickname}
				onClick={() => setIsShow(!isShow)}
				className=' relative rounded-xl w-10 h-10 cursor-pointer border border-white object-center object-contain '
			/>

			{isShow && (
				<div
					className='absolute w-44 right-2 z-50 rounded-md h-full'
					style={{
						top: 'calc(100% + 1rem)'
					}}
				>
					{' '}
					{!!user && (
						<button className='bg-white shadow py-2 px-4 block w-full rounded-lg hover:text-primary duration-300 transition-colors'>
							{user?.isAdmin && (
								<div className='flex mt-1'>
									<IoIosSettings className=' mt-1' />
									<Link href='/admin' className='ml-2'>
										Админ панель
									</Link>
								</div>
							)}
							<div className='flex mt-2'>
								<IoMdSettings className=' mt-1' />
								<Link
									className='ml-2'
									href='/settings'
									onClick={() => setIsShow(!isShow)}
								>
									Настройки
								</Link>
							</div>
							<div className='flex mt-2 border-t border-accent2 pt-2'>
								<FiLogOut className=' mt-1' />
								<span
									className='ml-2'
									onClick={() => {
										logOut()
										setIsShow(!isShow)
									}}
								>
									Выйти
								</span>
							</div>
						</button>
					)}
				</div>
			)}
		</div>
	)
}

export default HeaderProfile
