'use client'

import { FC } from 'react'

import Loader from '../Loader'

import { IPlant } from '@/types/plant.interface'
import Heading from '../Heading'
import PlantItem from './plant-item/PlantItem'

interface ICatalog {
	data: IPlant[] | undefined
	isLoading?: boolean
	title?: string
}

const Catalog: FC<ICatalog> = ({ title, data, isLoading }) => {
	if (isLoading) return <Loader />
	return (
		<section>
			{title && <Heading className='mb-5 text-white'>{title}</Heading>}
			{data?.length ? (
				<>
					<div className='grid grid-cols-4 gap-20'>
						{data.map(plant => (
							<PlantItem key={plant.id} plant={plant} />
						))}
					</div>
				</>
			) : (
				<div className=' text-white'>There are no plants</div>
			)}
		</section>
	)
}

export default Catalog
