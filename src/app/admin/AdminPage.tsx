// 'use client'
// import { CreateCategory, useCategories } from '@/hooks/modelHooks/useCategories'
// import { CreateArticle, usePlants } from '@/hooks/modelHooks/usePlants'
// import Heading from '@/ui/Heading'
// import Loader from '@/ui/Loader'
// import Button from '@/ui/button/Button'
// import cn from 'clsx'
// import { FC, useState } from 'react'
// import CategoryElement from './admin-elements/CategoryElements'
// import PlantElement from './admin-elements/PlantElement'

// const allElements = [{ name: 'Plants' }, { name: 'Categories' }]

// const AdminPage: FC = () => {
// 	// Текущий выбранный элемент редактирования
// 	const [currentElement, setCurrentElement] = useState('Plants')

// 	// Инпут для создания статьи
// 	const [plantName, setPlantName] = useState('')
// 	const [plantURL, setPlantURL] = useState('')
// 	const [plantDesc, setPlantDesc] = useState('')
// 	const [plantCat, setPlantCat] = useState<number>()
// 	const [plantSellType, setPlantSellType] = useState<'Seed' | 'Seedling'>(
// 		'Seed'
// 	)
// 	const [plantAvail, setPlantAvail] = useState<number>()
// 	const [plantPrice, setPlantPrice] = useState<number>()

// 	// Инпут для создания категории
// 	const [createCategoryInput, SetCreateCategoryInput] = useState('')

// 	const [isOpenTypeChoose, setIsOpenTypeChoose] = useState(false)
// 	const {
// 		data: plants,
// 		refetch: refetchPlants,
// 		isLoading: isLoadingPlants
// 	} = usePlants()

// 	const {
// 		data: categories,
// 		refetch: refetchCategories,
// 		isLoading: isLoadingCategories
// 	} = useCategories()

// 	const { mutate: CreateArticleMutate, err: CreateError } = CreateArticle(
// 		plantName,
// 		plantPrice,
// 		plantAvail,
// 		plantSellType,
// 		plantDesc,
// 		plantURL,
// 		plantCat,
// 		refetchPlants
// 	)

// 	const { mutate: CreateCategoryMutate } = CreateCategory(
// 		createCategoryInput,
// 		refetchCategories
// 	)

// 	const [isOpenCategory, setIsOpenCategory] = useState(false)
// 	const [isOpenAuthor, setIsOpenAuthor] = useState(false)

// 	return (
// 		<section className=' pb-10'>
// 			<Heading className=' mb-5'>
// 				Панель администрирования – {currentElement}
// 			</Heading>
// 			<div className=' flex gap-5 items-center'>
// 				<p className=' '>Выберите элемент:</p>
// 				<div className=' gap-2 flex'>
// 					{allElements.map(element => (
// 						<button
// 							key={element.name}
// 							className={cn('admin-btn', {
// 								'admin-btn-active': currentElement === element.name
// 							})}
// 							onClick={() => {
// 								setCurrentElement(element.name)
// 							}}
// 						>
// 							{element.name}
// 						</button>
// 					))}
// 				</div>
// 			</div>
// 			{currentElement === 'Plants' ? (
// 				<>
// 					<div className='flex flex-col w-1/5'>
// 						<h1 className=' mt-8 mb-2 font-medium text-xl font-semibold'>
// 							Добавить новое растение
// 						</h1>
// 						<input
// 							value={plantName}
// 							onChange={e => setPlantName(e.target.value)}
// 							type='text'
// 							placeholder='Название растения'
// 							className=' bg-white mb-2 border-green border rounded-lg p-1 placeholder:text-gray2'
// 						/>
// 						<input
// 							value={plantCat}
// 							onChange={e => setPlantCat(Number(e.target.value))}
// 							onClick={() => setIsOpenCategory(!isOpenCategory)}
// 							type='text'
// 							placeholder='Id категории'
// 							className=' bg-white mb-1 border-green border rounded-lg p-1  placeholder:text-gray2'
// 						/>
// 						{isOpenCategory && (
// 							<div className='p-2 bg-white rounded-lg h-full w-4/5 overflow-y-hidden mb-2 mx-auto'>
// 								<div className=' flex flex-col overflow-y-auto'>
// 									<p className='text-center  mb-1'>Выберите:</p>
// 									{categories?.map(category => (
// 										<div
// 											className=' flex border border-red rounded-lg mb-2 p-1  hover:cursor-pointer'
// 											onClick={() => {
// 												setPlantCat(category.id)
// 												setIsOpenCategory(!isOpenCategory)
// 											}}
// 											key={category.id}
// 										>
// 											<dt className=' text-gray2 mr-2'>id: {category.id}</dt>
// 											<dt className=' '>{category.name}</dt>
// 										</div>
// 									))}
// 								</div>
// 							</div>
// 						)}
// 						<input
// 							value={plantPrice}
// 							onChange={e => setPlantPrice(Number(e.target.value))}
// 							onClick={() => setIsOpenAuthor(!isOpenAuthor)}
// 							type='text'
// 							placeholder='Цена в рублях'
// 							className=' bg-white mb-2 border-green border rounded-lg p-1  placeholder:text-gray2'
// 						/>
// 						<input
// 							value={plantAvail}
// 							onChange={e => setPlantAvail(Number(e.target.value))}
// 							type='text'
// 							placeholder='Доступное количество '
// 							className=' bg-white mb-2 border-green border rounded-lg p-1  placeholder:text-gray2'
// 						/>
// 						<input
// 							value={plantSellType}
// 							onClick={() => setIsOpenTypeChoose(!isOpenTypeChoose)}
// 							// onChange={e => setPlantSellType(Number(e.target.value))}
// 							type='text'
// 							placeholder='В каком виде продается'
// 							className=' bg-white mb-2 border-green border rounded-lg p-1  placeholder:text-gray2'
// 						/>
// 						{isOpenTypeChoose && (
// 							<div className=' w-3/4 m-auto mt-2 transition-opacity mb-2'>
// 								<p className='text-center'>Выберите:</p>
// 								<dt
// 									className='text-base font-semibold border-red rounded-lg mb-2 p-1 border cursor-pointer'
// 									onClick={() => {
// 										setPlantSellType('Seed')
// 										setIsOpenTypeChoose(false)
// 									}}
// 								>
// 									Семена - Seed
// 								</dt>
// 								<dt
// 									className='text-base font-semibold border-red rounded-lg mb-2 p-1 border cursor-pointer'
// 									onClick={() => {
// 										setIsOpenTypeChoose(false)
// 										setPlantSellType('Seedling')
// 									}}
// 								>
// 									Саженец - Seedling
// 								</dt>
// 							</div>
// 						)}
// 						<input
// 							value={plantDesc}
// 							onChange={e => setPlantDesc(e.target.value)}
// 							type='text'
// 							placeholder='Краткое описание'
// 							className=' bg-white mb-2 border-green border rounded-lg p-1  placeholder:text-gray2'
// 						/>
// 						<input
// 							value={plantURL}
// 							onChange={e => setPlantURL(e.target.value)}
// 							type='text'
// 							placeholder='URL изображения'
// 							className=' bg-white mb-2 border-green border rounded-lg p-1  placeholder:text-gray2'
// 						/>
// 						<Button
// 							variant='green'
// 							className='admin-btn my-2'
// 							onClick={() => {
// 								CreateArticleMutate()
// 								setTimeout(() => setPlantName(''), 500)
// 							}}
// 						>
// 							Создать
// 						</Button>
// 					</div>
// 					<div className='grid grid-cols-4 gap-5 mt-10'>
// 						{isLoadingPlants ? (
// 							<Loader />
// 						) : (
// 							plants?.map(plant => (
// 								<PlantElement
// 									key={plant.id}
// 									plant={plant}
// 									refetch={refetchPlants}
// 								/>
// 							))
// 						)}
// 					</div>
// 				</>
// 			) : (
// 				<>
// 					<div className='flex flex-col w-1/5'>
// 						<h1 className=' mt-8  mb-2 font-medium text-lg'>
// 							Создать новую категорию
// 						</h1>
// 						<input
// 							value={createCategoryInput}
// 							onChange={e => SetCreateCategoryInput(e.target.value)}
// 							type='text'
// 							placeholder='Название категории'
// 							className=' bg-white mb-2 border-green border rounded-lg p-1 placeholder:text-gray2'
// 						/>
// 						<Button
// 							variant='green'
// 							className='admin-btn my-2'
// 							onClick={() => {
// 								CreateCategoryMutate()
// 								setTimeout(() => SetCreateCategoryInput(''), 500)
// 							}}
// 						>
// 							Создать
// 						</Button>
// 					</div>
// 					<div className='grid grid-cols-4 gap-5 mt-10'>
// 						{isLoadingCategories ? (
// 							<Loader />
// 						) : (
// 							categories?.map(category => (
// 								<CategoryElement
// 									key={category.id}
// 									category={category}
// 									refetch={refetchCategories}
// 								/>
// 							))
// 						)}
// 					</div>
// 				</>
// 			)}
// 		</section>
// 	)
// }
// export default AdminPage
