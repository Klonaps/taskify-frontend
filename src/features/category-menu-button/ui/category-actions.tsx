import { HiOutlineDotsHorizontal } from 'react-icons/hi'

export const CategoryActions = () => {
  return (
    <div
      className='opacity-0 group-hover:opacity-100 transition-opacity text-gray-600 hover:bg-black/5 rounded-md p-1'
      onClick={(e) => {
        e.stopPropagation()
      }}
    >
      <HiOutlineDotsHorizontal size={18} />
    </div>
  )
}
