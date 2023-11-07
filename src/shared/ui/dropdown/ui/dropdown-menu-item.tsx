import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type ColorType = 'danger' | 'normal'
interface DropdownMenuItemProps {
  children: ReactNode
  type?: ColorType
  handler: () => void
}

const typeColors: Record<ColorType, string> = {
  danger: 'text-[#F65351]',
  normal: '',
}

export const DropdownMenuItem = ({
  children,
  type = 'normal',
  handler,
}: DropdownMenuItemProps) => {
  return (
    <div
      onClick={handler}
      className={twMerge(
        'px-2 py-1.5 text-sm select-none hover:bg-gray-100 rounded-[4px] overflow-hidden relative flex items-center',
        typeColors[type],
      )}
    >
      {children}
    </div>
  )
}
