import { FC, useState } from 'react'

import { addToCart } from '@/hooks/modelHooks/useCart'
import { useProfile } from '@/hooks/useProfile'
import { IPlant } from '@/types/plant.interface'
import Button from '@/ui/button/Button'

const PlantItem: FC<{ plant: IPlant }> = ({ plant }) => {
	const [amount, setAmount] = useState(1)
	const { data, refetch } = useProfile()

	const { mutate: addPlantToCart, err } = addToCart(plant.id, amount, refetch)

	return (
		<div className='animate-scaleIn  flex flex-col items-start'>
			<h3 className='mt-2 font-semibold text-xl pb-2 pl-1'>{plant.name}</h3>
			<span className='h-64 block relative pl-1'>
				<img
					src={plant.images}
					alt='plant-image'
					className='object-contain h-full w-full'
				/>
			</span>
			<div className='pl-0.5 h-24 pt-1'>
				<dt className=' text-gray2'>Краткое описание:</dt>
				<dt className=' ml-2 '>{plant?.description}</dt>
			</div>
			<div className='  pl-0.5'>
				<dt className=' text-gray2'>Категория:</dt>
				<dt className=' ml-2'>{plant?.category?.name}</dt>
			</div>

			<div className='  pl-0.5 '>
				<dt className=' text-gray2'>В наличии:</dt>
				<dt className=' ml-2 '>{plant?.availableNumber} шт.</dt>
			</div>
			<div className='  pl-0.5'>
				<dt className='mt-2 text-xl font-semibold'>{plant?.price} руб.</dt>
			</div>
			<div className='mt-4 pl-0.5 '>
				<Button variant='green' size='sm' onClick={() => addPlantToCart()}>
					Добавить в корзину
				</Button>
			</div>
		</div>
	)
}

export default PlantItem
