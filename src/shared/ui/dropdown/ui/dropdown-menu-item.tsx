import { ReactNode, useContext } from 'react'
import { twMerge } from 'tailwind-merge'
import { DropwDownContext } from './dropdown'

type ColorType = 'danger' | 'normal'
interface DropdownMenuItemProps {
  children: ReactNode
  type?: ColorType
  handler: () => void,
  closeOnClick?: boolean
}

const typeColors: Record<ColorType, string> = {
  danger: 'text-[#F65351]',
  normal: '',
}

export const DropdownMenuItem = ({ children, type = 'normal', handler, closeOnClick = false }: DropdownMenuItemProps) => {
  const contexValue = useContext(DropwDownContext)
  if (contexValue === undefined) return null
  const { toggleDropDownHandler } = contexValue

  const matchHandler = () => {
    handler()
    if (closeOnClick) {
      toggleDropDownHandler()
    }
  }

  return (
    <div
      onClick={matchHandler}
      className={twMerge(
        'px-2 py-1.5 text-sm select-none hover:bg-gray-100 rounded-[4px] overflow-hidden relative flex items-center',
        typeColors[type],
      )}
    >
      {children}
    </div>
  )
}
