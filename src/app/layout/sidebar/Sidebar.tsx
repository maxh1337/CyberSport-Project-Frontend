'use client'

import { FC } from 'react'
import styles from './Sidebar.module.scss'
import { menuItems } from './convert-to-menu-items'
import { IMenuItem } from './menu.interface'
import SidebarItem from './sidebar-item/SidebarItem'

const Sidebar: FC = () => {
	return (
		<aside className={styles.sidebar}>
			<ul>
				{menuItems.map((item: IMenuItem) => (
					<SidebarItem href={item.href} label={item.label} key={item.label} />
				))}
			</ul>
			<div>
				<div>
					<p>Реклама</p>
				</div>
			</div>
		</aside>
	)
}

export default Sidebar
