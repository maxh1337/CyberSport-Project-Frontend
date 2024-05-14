import { useProfile } from '@/hooks/useProfile'
import Button from '@/ui/button/Button'
import { FC, useRef } from 'react'
import styles from './UpdateUserFiles.module.scss'
import UserFilesItem from './UserFilesItem'
import { useUploadUserFiles } from './useUpdateUserFiles'

const UpdateUserFiles: FC = () => {
	const { data } = useProfile()
	const inputRef = useRef<HTMLInputElement>(null)
	const { uploadFile, error } = useUploadUserFiles()

	return (
		<div className={styles.main}>
			<p>Ваши файлы</p>
			<div>
				{data?.documents.length === 0 && (
					<p className=' mt-5 text-accent2'>
						Вы пока не загрузили ни одного файла
					</p>
				)}
				{data?.documents.map(document => (
					<UserFilesItem item={document} key={document.id} />
				))}
			</div>
			<div>
				<label>
					<Button
						variant='updateAvatar'
						onClick={() => inputRef.current?.click()}
						className=''
					>
						Загрузить новый файл
					</Button>
					<input
						title=' '
						type='file'
						accept='.pdf, .png, .jpeg, .jpg'
						onChange={uploadFile}
						className={styles.input}
						ref={inputRef}
					/>
					{/* @ts-ignore */}
					<div className={styles.error}>{error}</div>
				</label>
			</div>
		</div>
	)
}
export default UpdateUserFiles
