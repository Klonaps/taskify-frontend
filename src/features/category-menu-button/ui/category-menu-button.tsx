import { CategoryIcon, getIcon, getColor, ICategory } from '@entities/category'
import { MenuButton } from '@shared/ui'
import { Dropdown } from '@shared/ui/dropdown'

import { CategoryActions } from './category-actions'

interface CategoryMenuButtonProps {
  category: ICategory
}

export const CategoryMenuButton = ({ category }: CategoryMenuButtonProps) => {
  return (
    <Dropdown closeOnMouseLeave>
      <MenuButton
        cn='group'
        startContent={
          <CategoryIcon
            icon={getIcon(category.icon)}
            size={18}
            color={`rgb(${getColor(category.color)})`}
          />
        }
        endContent={<CategoryActions id={category.id} />}
        title={category.name}
      />
    </Dropdown>
  )
}
