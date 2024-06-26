import { FC, useState } from 'react'

import { DeleteCategory } from '@/hooks/modelHooks/useCategories'
import { ICategory } from '@/types/category.interface'
import Button from '@/ui/button/Button'
import { QueryObserverResult, RefetchOptions } from '@tanstack/react-query'

interface IJournalElementProps {
	refetch: (
		options?: RefetchOptions | undefined
	) => Promise<QueryObserverResult<ICategory[], Error>>
	category: ICategory
}

const CategoryElement: FC<IJournalElementProps> = ({ category, refetch }) => {
	const [target, setTarget] = useState<number>(0)

	const { mutate: deleteCategory } = DeleteCategory(target, refetch)

	return (
		<div className='animate-scaleIn flex-col'>
			<h3 className='mt-2 font-semibold text-xl pb-2 pl-2'>{category?.name}</h3>
			<div className=' flex pl-2'>
				<dt className=' text-gray2'>id:</dt>
				<dt className=' ml-2'>{category?.id ? category?.id : ' — '}</dt>
			</div>
			{category.plants.length ? (
				<ul className='block ml-2 my-2'>
					{category.plants.map(plant => (
						<li key={plant.name} className=' inline-block list-none mr-2'>
							<p className=' block px-2 py-0.5 border-gray2 border border-1 text-xs'>
								{plant.name}
							</p>
						</li>
					))}
				</ul>
			) : (
				<ul className='block ml-2 my-2'>
					<li className=' inline-block list-none mx-2'>
						<p className=' block px-2 py-0.5 border-red border border-2 rounded-lg text-xs'>
							Растений нет
						</p>
					</li>
				</ul>
			)}
			<Button
				variant='red'
				className='admin-btn ml-2 my-2'
				onClick={() => {
					setTarget(category?.id)
					deleteCategory()
				}}
			>
				Удалить
			</Button>
		</div>
	)
}

export default CategoryElement
