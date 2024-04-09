'use client'

import { FC } from 'react'
import { menuItems } from './convert-to-menu-items'
import { IMenuItem } from './menu.interface'
import SidebarItem from './sidebar-item/SidebarItem'

const Sidebar: FC = () => {
	return (
		<aside
			className=' bg-white flex flex-col z-10 justify-between border-accent border-r-2 border-t-2'
			style={{
				minHeight: 'calc(100% - 91px)',
				height: 'calc(100vh - 91px)',
				gridTemplateRows: '1fr .3fr'
			}}
		>
			<ul className=' mt-6 flex flex-col items-center border-accent border-b-2 h-full'>
				{menuItems.map((item: IMenuItem) => (
					<SidebarItem href={item.href} label={item.label} key={item.label} />
				))}
			</ul>
			<div className=' h-full flex items-center justify-center'>
				<div className=' w-9/12 h-5/6 bg-secondary rounded-xl flex justify-center items-center'>
					<p className=' text-white font-semibold text-3xl rotate-[-40deg]'>
						Реклама
					</p>
				</div>
			</div>
		</aside>
	)
}

export default Sidebar
