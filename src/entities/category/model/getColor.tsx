import { categoryColors } from ".."

export const getColor = (colorName: string | null | undefined) => {
  const color = categoryColors.find((color) => color.name === colorName)
  if (!color) return '0, 0, 0'
  return color.color
}