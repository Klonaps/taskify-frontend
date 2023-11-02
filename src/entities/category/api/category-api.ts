import { useQuery } from "@tanstack/react-query"

import { authorizedInstance } from "@shared/api"
import { CATEGORY_PATH } from "@shared/model"

import { ICategory } from ".."

const getCategories = async () => {
  const res = await authorizedInstance.get<ICategory[]>(CATEGORY_PATH)
  return res.data
}
export const useGetCategoriesQuery = () => {
  return useQuery({
    queryFn: getCategories,
    queryKey: ['categories']
  })
}