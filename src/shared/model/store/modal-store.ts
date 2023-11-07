import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import type {} from '@redux-devtools/extension'

interface ModalState {
  isCreateCategoryModalOpen: boolean
  openCreateCategoryModal: () => void
  closeCreateCategoryModal: () => void
}

export const useModalStore = create<ModalState>()(
  devtools(set => ({
    isCreateCategoryModalOpen: false,
    openCreateCategoryModal: () =>
      set({
        isCreateCategoryModalOpen: true,
      }),
    closeCreateCategoryModal: () =>
      set({
        isCreateCategoryModalOpen: false,
      }),
  })),
)
