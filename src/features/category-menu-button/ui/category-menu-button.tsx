import { CategoryIcon, getIcon, getColor, ICategory } from "@entities/category"
import { MenuButton } from "@shared/ui"
import { CategoryActions } from "./category-actions";

interface CategoryMenuButtonProps {
  category: ICategory;

}

export const CategoryMenuButton = ({ category }: CategoryMenuButtonProps) => {
  return (
    <MenuButton
      cn="group"
      startContent={
        <CategoryIcon
          icon={getIcon(category.icon)}
          size={18}
          color={`rgb(${getColor(category.color)})`}
        />
      }
      endContent={<CategoryActions />}
      title={category.name}
    />
  )
}
