import { AnimatePresence } from 'framer-motion'

import { Sidebar } from '@widgets/sidebar'

import { CreateCategoryModal } from '@features/create-category-modal'
import { EditCategoryModal } from '@features/edit-category-modal'

import { useModalStore } from '@shared/model/store'

export const Home = () => {
  const isCreateCategoryModalOpen = useModalStore(
    state => state.isCreateCategoryModalOpen,
  )
  const isEditCategoryModalOpen = useModalStore(
    state => state.isEditCategoryModalOpen,
  )

  return (
    <>
      <div className='w-full h-full flex py-5'>
        <Sidebar />
        <section></section>
      </div>
      <AnimatePresence mode='wait'>
        {isCreateCategoryModalOpen && <CreateCategoryModal />}
        {isEditCategoryModalOpen && <EditCategoryModal />}
      </AnimatePresence>
    </>
  )
}
