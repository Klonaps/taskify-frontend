import { DropdownContent, DropdownMenuItem, DropdownTrigger } from '@shared/ui/dropdown'
import { HiOutlineDotsHorizontal } from 'react-icons/hi'

export const CategoryActions = () => {
  return (
    <>
      <DropdownTrigger>
        <div className='opacity-0 group-hover:opacity-100 transition-all text-gray-400 hover:text-gray-900 p-1'>
          <HiOutlineDotsHorizontal size={18} />
        </div>
      </DropdownTrigger>
      <DropdownContent className='w-[180px] top-[32px] right-[-65px]'>
        <DropdownMenuItem fontSize='xs' handler={() => console.log()}>
          Редактировать
        </DropdownMenuItem>
        <DropdownMenuItem fontSize='xs' handler={() => console.log()}>
          Удалить
        </DropdownMenuItem>
      </DropdownContent>
    </>
  )
}
