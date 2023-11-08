import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import type {} from '@redux-devtools/extension'

interface IEditCategory {
  id: number,
  name: string,
  icon?: string,
  color?: string,
}
interface ModalState {
  isCreateCategoryModalOpen: boolean;
  isEditCategoryModalOpen: boolean;
  editCategory: IEditCategory | undefined;
  openCreateCategoryModal: () => void;
  closeCreateCategoryModal: () => void;
  openEditCategoryModal: (category: IEditCategory) => void;
  closeEditCategoryModal: () => void;
}

export const useModalStore = create<ModalState>()(
  devtools(set => ({
    isCreateCategoryModalOpen: false,
    isEditCategoryModalOpen: false,
    editCategory: undefined,
    openCreateCategoryModal: () =>
      set({
        isCreateCategoryModalOpen: true,
      }),
    closeCreateCategoryModal: () =>
      set({
        isCreateCategoryModalOpen: false,
      }),
    openEditCategoryModal: (category) =>
      set({
        isEditCategoryModalOpen: true,
        editCategory: category,
      }),
    closeEditCategoryModal: () =>
      set({
        isEditCategoryModalOpen: false,
        editCategory: undefined,
      }),
  })),
)
