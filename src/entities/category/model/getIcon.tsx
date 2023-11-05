import { HiOutlineTag } from "react-icons/hi"
import { categoryIcons } from ".."

export const getIcon = (name: string | null | undefined) => {
  const icon = categoryIcons.find(icon => icon.name === name)
  if (!icon) return HiOutlineTag
  return icon.icon
}