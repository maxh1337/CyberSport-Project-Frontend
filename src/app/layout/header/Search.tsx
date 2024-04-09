import { useFilters } from '@/app/(customer)/explorer/useFilters'
import { IPlant } from '@/types/plant.interface'
import { QueryObserverResult, RefetchOptions } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { FC, useState } from 'react'
import { BsSearch } from 'react-icons/bs'

interface IRefetch {
	refetch: (
		options?: RefetchOptions | undefined
	) => Promise<QueryObserverResult<IPlant[], Error>>
}

const Search: FC<IRefetch> = ({ refetch }) => {
	const [searchTerm, setSearchTerm] = useState<string>('')
	const { updateQueryParams } = useFilters()

	const { push } = useRouter()

	return (
		<>
			<div
				className='border-2 border-solid border-green grid w-2/4 rounded-xl overflow-hidden mb-5'
				style={{
					gridTemplateColumns: '3fr 0.1fr'
				}}
			>
				<input
					className=' bg-white text-sm py-2 px-4 outline-none'
					value={searchTerm}
					onChange={e => setSearchTerm(e.target.value)}
					placeholder='Поиск статей...'
				/>
				<button
					onClick={() => {
						push(`/explorer?searchTerm=${searchTerm}`)
						updateQueryParams('searchTerm', searchTerm)
						refetch()
					}}
					className=' bg-green text-white flex items-center justify-center p-2.5'
				>
					<BsSearch className=' w-6 h-6' />
				</button>
			</div>
		</>
	)
}

export default Search
