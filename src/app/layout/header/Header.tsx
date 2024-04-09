'use client'

import { useUsersZustand } from '@/store/user/user-store'
import Button from '@/ui/button/Button'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FC } from 'react'
import { GoBell } from 'react-icons/go'
import { PiChatCircleTextLight } from 'react-icons/pi'
import styles from './Header.module.scss'
import HeaderProfile from './HeaderProfile'

const Header: FC = () => {
	const { user } = useUsersZustand()

	const { push } = useRouter()

	return (
		<header
			className={styles.main}
			style={{
				gridTemplateColumns: '0.9fr 4.1fr'
			}}
		>
			<Link href='/' className={styles.logo}>
				<Image
					src='/images/favicon.svg'
					alt='mainWebSiteLogo'
					width={36}
					height={36}
				/>
				<p> ProfiDraft</p>
			</Link>

			<div className={styles.interfaceButtons}>
				{!!user && (
					<div>
						<div className='bg-accent rounded-lg p-2'>
							<PiChatCircleTextLight size={23} />
						</div>
						<div className='bg-accent rounded-lg p-2'>
							<GoBell size={22} />
						</div>
						{/* <div className='bg-accent rounded-lg p-1'> */}
						<HeaderProfile />
						{/* </div> */}
					</div>
				)}
				{!user && (
					<div>
						<Button
							variant='auth-outlined'
							size='sm'
							onClick={() => push('/auth/login')}
						>
							Войти
						</Button>
						<Button
							variant='auth-contained'
							size='sm'
							onClick={() => push('/auth/register')}
						>
							Регистрация
						</Button>
					</div>
				)}
			</div>
		</header>
	)
}

export default Header
