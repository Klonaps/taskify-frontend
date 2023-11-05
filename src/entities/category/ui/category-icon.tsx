import { FC } from 'react'

interface CategoryIconProps {
  icon: FC;
  size?: number;
  color?: string;
}

export const CategoryIcon = ({ icon, ...restProps }: CategoryIconProps) => {
  if (!icon) return null
  return <>{icon({ ...restProps })}</>
}
