import { AnimatePresence, LayoutGroup } from 'framer-motion'

import { CategoryMenuButton } from '@features/category-menu-button'
import { useGetCategoriesQuery } from '@entities/category'
import { useModalStore } from '@shared/model/store'
import { MenuButton } from '@shared/ui'

import { HiOutlinePlus, HiOutlineTag } from 'react-icons/hi'

export const Sidebar = () => {
  const { data: categories } = useGetCategoriesQuery()
  const openCreateCategoryModal = useModalStore(
    state => state.openCreateCategoryModal,
  )

  return (
    <nav className='w-[300px] h-full pr-2'>
      <div className='mb-4'>
        <h2 className='text-gray-500 text-sm select-none mb-2'>Основное</h2>
        <div className='flex flex-col gap-[2px]'>
          <MenuButton
            active
            startContent={
              <span className='rounded-full w-3 h-3 bg-blue-400 border-[3px] border-blue-300' />
            }
            title='Все задачи'
          />
          <MenuButton
            startContent={
              <span className='rounded-full w-3 h-3 bg-green-400 border-[3px] border-green-300' />
            }
            title='Активные'
          />
          <MenuButton
            startContent={
              <span className='rounded-full w-3 h-3 bg-red-500 border-[3px] border-red-300' />
            }
            title='Завершеные'
          />
        </div>
      </div>
      <div>
        <h2 className='text-gray-500 text-sm select-none mb-2'>Категории</h2>
        <MenuButton startContent={<HiOutlineTag size={18} />} title='Все' />
        <LayoutGroup>
          <AnimatePresence>
            {categories?.map(category => (
              <CategoryMenuButton key={category.id} category={category} />
            ))}
          </AnimatePresence>
        </LayoutGroup>
        <MenuButton
          startContent={<HiOutlinePlus size={18} />}
          title='Создать категорию'
          onClick={openCreateCategoryModal}
        />
      </div>
    </nav>
  )
}
