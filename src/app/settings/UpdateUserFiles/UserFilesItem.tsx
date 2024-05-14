import { DeleteUserFile, handleDownload } from '@/hooks/modelHooks/useUserFile'
import { IUserFile } from '@/types/user.interface'
import { FC, useEffect, useState } from 'react'
import { BsFiletypeDocx, BsFiletypeJpg, BsFiletypePdf } from 'react-icons/bs'
import { FaTrash } from 'react-icons/fa'
import { IoMdDownload } from 'react-icons/io'
import styles from './UpdateUserFiles.module.scss'

interface UserFileItem {
	item: IUserFile
}

const UserFilesItem: FC<UserFileItem> = ({ item }) => {
	const [fileType, setFileType] = useState<string | undefined>('')

	useEffect(() => {
		if (item.originalName) {
			let type = item.originalName.split('.').pop()

			setFileType(type)
		}
	}, [item])

	const { mutate: deleteFile, err: deleteFileError } = DeleteUserFile(item.id)

	return (
		<div className={styles.fileItem}>
			<div>
				{fileType === 'jpg' ? (
					<BsFiletypeJpg size={40} />
				) : fileType === 'pdf' ? (
					<BsFiletypePdf size={40} />
				) : fileType === 'docx' ? (
					<BsFiletypeDocx size={40} />
				) : null}

				<h4>{item.originalName.split('.')[0]}</h4>
			</div>
			<button className={styles.DownloadButton}>
				<IoMdDownload
					size={19}
					onClick={() => handleDownload(item.originalName, item.id)}
				/>
			</button>
			<button className={styles.TrashButton}>
				<FaTrash onClick={() => deleteFile()} />
			</button>
		</div>
	)
}
export default UserFilesItem
