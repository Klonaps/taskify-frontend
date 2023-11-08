import { useMutation, useQueryClient } from '@tanstack/react-query'

import { ICategory } from '@entities/category/'
import { useModalStore } from '@shared/model/store'
import { authorizedInstance } from '@shared/api'
import { CATEGORY_PATH } from '@shared/model'

import { EditCategoryDto } from '..'

const closeCategoryEditModal = useModalStore.getState().closeEditCategoryModal

const editCategory = async (id: number, data: EditCategoryDto) => {
  const res = await authorizedInstance().patch<ICategory>(CATEGORY_PATH + `/${id}`, data)
  return res.data
}

type EditMutation = {
  id: number,
  data: EditCategoryDto
}
export const useEditCategoryQuery = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: ({ id, data }: EditMutation) => editCategory(id, data),
    onSuccess: () => {
      closeCategoryEditModal()
      queryClient.invalidateQueries({ queryKey: ['categories'] })
    },
  })
}
