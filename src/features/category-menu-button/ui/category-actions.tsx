import {
  DropdownContent,
  DropdownMenuItem,
  DropdownTrigger,
} from '@shared/ui/dropdown'

import { HiOutlinePencilAlt, HiOutlineDotsHorizontal, HiOutlineTrash } from 'react-icons/hi'
import { useDeleteCategoryQuery } from '..'

interface CategoryActionsProps {
  id: number
}

export const CategoryActions = ({ id }: CategoryActionsProps) => {
  const { mutate: deleteHandler } = useDeleteCategoryQuery()

  return (
    <>
      <DropdownTrigger>
        <div className='opacity-0 group-hover:opacity-100 transition-all text-gray-400 hover:text-gray-900 p-1'>
          <HiOutlineDotsHorizontal size={18} />
        </div>
      </DropdownTrigger>
      <DropdownContent className='w-[180px] top-[32px] right-[-65px]'>
        <DropdownMenuItem handler={() => console.log()}>
          <span className='mr-2'>
            <HiOutlinePencilAlt size={18} />
          </span>
          Редактировать
        </DropdownMenuItem>
        <DropdownMenuItem type='danger' handler={() => deleteHandler(id)}>
          <span className='mr-2'>
            <HiOutlineTrash size={18} />
          </span>
          Удалить
        </DropdownMenuItem>
      </DropdownContent>
    </>
  )
}
