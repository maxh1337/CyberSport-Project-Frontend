import FitnessCenterIcon from '@mui/icons-material/FitnessCenter'
import cn from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC } from 'react'
import { BiSupport } from 'react-icons/bi'
import { FaBook } from 'react-icons/fa6'
import { IoMdHome } from 'react-icons/io'
import { MdWork } from 'react-icons/md'
import { RiTeamFill } from 'react-icons/ri'

import './SidebarItem.scss'

interface SidebarItemProps {
	href: string
	label: string
}

const SidebarItem: FC<SidebarItemProps> = item => {
	const pathname = usePathname()

	return (
		<li
			key={item.href}
			className={cn(
				'sidebarItem',
				pathname === item.href ? 'main-active' : null
			)}
		>
			<IoMdHome
				size={25}
				className={cn(
					' mr-2',
					pathname === item.href ? ' fill-secondary' : null,
					item.href === '/' ? ' !block' : null
				)}
			/>
			<svg
				width={25}
				height={25}
				viewBox='0 0 32 32'
				xmlSpace='preserve'
				className={cn(
					' mr-2',
					item.href === '/tournaments' ? ' !block' : null,
					pathname === item.href ? ' fill-secondary' : null
				)}
			>
				<path
					d='M29,6h-5V5c0-0.6-0.4-1-1-1H9C8.4,4,8,4.4,8,5v1H3C2.4,6,2,6.4,2,7v2.7c0,4.4,3.4,8,7.8,8.2c0.8,1.1,1.9,1.9,3.2,2.4V23h-1
			c-1.7,0-3,1.3-3,3v3c0,0.6,0.4,1,1,1h12c0.6,0,1-0.4,1-1v-3c0-1.7-1.3-3-3-3h-1v-2.6c1.3-0.5,2.4-1.4,3.2-2.4
			c4.3-0.3,7.8-3.8,7.8-8.2V7C30,6.4,29.6,6,29,6z M4,9.7V8h4v5c0,1,0.2,1.9,0.5,2.7C5.9,15,4,12.6,4,9.7z M28,9.7
			c0,2.8-1.9,5.2-4.5,6C23.8,14.9,24,14,24,13V8h4V9.7z'
				/>
			</svg>
			<BiSupport
				size={25}
				className={cn(
					' mr-2',
					pathname === item.href ? ' fill-secondary' : null,
					item.href === '/support' ? ' !block' : null
				)}
			/>
			<MdWork
				size={25}
				className={cn(
					' mr-2',
					pathname === item.href ? ' fill-secondary' : null,
					item.href === '/services' ? ' !block' : null
				)}
			/>
			<RiTeamFill
				size={25}
				className={cn(
					' mr-2',
					pathname === item.href ? ' fill-secondary' : null,
					item.href === '/teams-and-players' ? ' !block' : null
				)}
			/>
			<FitnessCenterIcon
				className={cn(
					' mr-2',
					pathname === item.href ? ' !fill-secondary' : null,
					item.href === '/training-matches' ? ' !block' : null
				)}
			/>
			<FaBook
				size={25}
				className={cn(
					' mr-2',
					pathname === item.href ? ' fill-secondary' : null,
					item.href === '/education' ? ' !block' : null
				)}
			/>
			<Link
				className={cn(
					'',
					pathname === item.href ? '!text-secondary' : 'text-accent2'
				)}
				href={item.href}
			>
				{item.label}
			</Link>
		</li>
	)
}

export default SidebarItem
