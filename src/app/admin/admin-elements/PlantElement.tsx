import { FC, useEffect, useState } from 'react'

import { useCategories } from '@/hooks/modelHooks/useCategories'
import { DeletePlant, UpdatePlant } from '@/hooks/modelHooks/usePlants'
import { IPlant } from '@/types/plant.interface'
import Button from '@/ui/button/Button'
import { QueryObserverResult, RefetchOptions } from '@tanstack/react-query'

interface IPlantElementProps {
	refetch: (
		options?: RefetchOptions | undefined
	) => Promise<QueryObserverResult<IPlant[], Error>>
	plant: IPlant
}

interface test {
	plantSellType: 'Seed' | 'Seedling'
}

const PlantElement: FC<IPlantElementProps> = ({ plant, refetch }) => {
	const [plantName, setPlantName] = useState('')
	const [plantURL, setPlantURL] = useState('')
	const [plantDesc, setPlantDesc] = useState('')
	const [plantCat, setPlantCat] = useState<number>(0)
	const [plantSellType, setPlantSellType] = useState<'Seed' | 'Seedling'>(
		'Seed'
	)
	const [plantAvail, setPlantAvail] = useState<number>(0)
	const [plantPrice, setPlantPrice] = useState<number>(0)
	const [isOpenCategory, setIsOpenCategory] = useState(false)
	const [isOpenTypeChoose, setIsOpenTypeChoose] = useState(false)

	useEffect(() => {
		setPlantName(plant.name)
		setPlantURL(plant.images)
		setPlantDesc(plant.description)
		setPlantCat(plant.category?.id)
		setPlantSellType(plant.plantSellType)
		setPlantAvail(plant.availableNumber)
		setPlantPrice(plant.price)
	}, [])

	const { data: categories, isLoading: isLoadingCategories } = useCategories()

	const { mutate: remove } = DeletePlant(plant.id, refetch)

	const { mutate: update } = UpdatePlant(
		plant.id,
		plantName,
		plantPrice,
		plantAvail,
		plantSellType,
		plantDesc,
		plantURL,
		plantCat,
		refetch
	)

	return (
		<div className='animate-scaleIn'>
			<input
				type='text'
				value={plantName}
				onChange={e => setPlantName(e.target.value)}
				className='mt-1 font-semibold text-xl pb-1'
			/>
			<span className='h-64 block relative'>
				<img
					src={plant.images}
					alt='plant-image'
					className='object-cover h-full w-full'
				/>
			</span>
			<div className='  pl-0.5'>
				<dt className=' text-gray2'>URL картинки:</dt>
				<input
					className=' ml-2 h-full w-full'
					value={plantURL}
					onChange={e => setPlantURL(e.target.value)}
				/>
			</div>
			<div className='pl-0.5'>
				<dt className=' text-gray2'>Краткое описание:</dt>
				<input
					className=' ml-2 w-full'
					value={plantDesc}
					onChange={e => setPlantDesc(e.target.value)}
				/>
			</div>
			<div className='  pl-0.5'>
				<dt className=' text-gray2'>Категория:</dt>
				<input
					className=' ml-2 w-full'
					value={plantCat}
					onChange={e => setPlantCat(+e.target.value)}
					onClick={() => setIsOpenCategory(!isOpenCategory)}
				/>

				{isOpenCategory && (
					<div className='p-3 bg-white border-red h-full w-full overflow-y-hidden mb-2 mx-auto'>
						<div className=' flex flex-col overflow-y-auto'>
							<p className='text-center text-black mb-1'>Категории</p>
							{categories?.map(category => (
								<div
									className=' flex border border-red rounded-lg mb-2 p-1 w-2/3  hover:cursor-pointer m-auto'
									onClick={() => {
										setPlantCat(category.id)
										setIsOpenCategory(!isOpenCategory)
									}}
									key={category.id}
								>
									<dt className=' text-black mr-2'>id: {category.id}</dt>
									<dt className=' text-black'>{category.name}</dt>
								</div>
							))}
						</div>
					</div>
				)}
			</div>
			<div className='  pl-0.5'>
				<dt className=' text-gray2'>Продается в виде:</dt>
				<input
					className=' ml-2'
					value={plantSellType}
					onChange={() => console.log(1)}
					onClick={() => setIsOpenTypeChoose(!isOpenTypeChoose)}
				/>
				{isOpenTypeChoose && (
					<div className=' w-1/2 m-auto mt-4 transition-opacity'>
						<p className='text-center'>Выберите:</p>
						<dt
							className='text-base font-semibold border-red rounded-lg mb-2 p-1 border cursor-pointer'
							onClick={() => {
								setPlantSellType('Seed')
								setIsOpenTypeChoose(false)
							}}
						>
							Семена - Seed
						</dt>
						<dt
							className='text-base font-semibold border-red rounded-lg mb-2 p-1 border cursor-pointer'
							onClick={() => {
								setIsOpenTypeChoose(false)
								setPlantSellType('Seedling')
							}}
						>
							Саженец - Seedling
						</dt>
					</div>
				)}
			</div>
			<div className='  pl-0.5 '>
				<dt className=' text-gray2'>В наличии:</dt>
				<input
					type='number'
					className=' ml-2 '
					value={plantAvail}
					onChange={e => setPlantAvail(+e.target.value)}
				/>
			</div>
			<div className='  pl-0.5 flex items-center mt-4'>
				<input
					type='text'
					value={plantPrice}
					className='w-12 text-xl'
					onChange={e => setPlantPrice(+e.target.value)}
				/>
				<dt className=' text-xl font-semibold'> руб.</dt>
			</div>
			<div className='flex justify-between'>
				<Button
					variant='red'
					className='ml-2 mt-3'
					onClick={() => {
						remove()
					}}
				>
					Удалить
				</Button>
				<Button
					variant='green'
					className='mr-2 mt-3'
					onClick={() => {
						update()
					}}
				>
					Сохранить
				</Button>
			</div>
		</div>
	)
}

export default PlantElement
