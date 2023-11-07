import { useMutation, useQueryClient } from '@tanstack/react-query'

// import { useModalStore } from '@shared/model/store'
import { authorizedInstance } from '@shared/api'
import { CATEGORY_PATH } from '@shared/model'

// const closeCategoryCreateModal = useModalStore.getState().closeCreateCategoryModal

const deleteCategory = async (id: number) => {
  const res = await authorizedInstance().delete<string>(
    CATEGORY_PATH + `/${id}`,
  )
  return res.data
}
export const useDeleteCategoryQuery = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: deleteCategory,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['categories'] })
    },
  })
}
