import { useMutation, useQueryClient } from '@tanstack/react-query'

import { ICategory } from '@entities/category/'
import { useModalStore } from '@shared/model/store'
import { authorizedInstance } from '@shared/api'
import { CATEGORY_PATH } from '@shared/model'

import { CreateCategoryDto } from '..'

const closeCategoryCreateModal =
  useModalStore.getState().closeCreateCategoryModal

const createCategory = async (data: CreateCategoryDto) => {
  const res = await authorizedInstance().post<ICategory>(CATEGORY_PATH, data)
  return res.data
}
export const useCreateCategoryQuery = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: createCategory,
    onSuccess: () => {
      closeCategoryCreateModal()
      queryClient.invalidateQueries({ queryKey: ['categories'] })
    },
  })
}
