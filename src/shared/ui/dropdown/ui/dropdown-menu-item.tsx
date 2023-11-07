import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge';

type FontSize = 'xs' | 'sm'
type ColorType = 'danger' | 'normal'
interface DropdownMenuItemProps {
  children: ReactNode;
  type?: ColorType;
  handler: () => void;
  fontSize?: FontSize;
}

const typeColors: Record<ColorType, string> = {
  danger: 'text-[#F65351]',
  normal: '',
}
const fontSizeStyle: Record<FontSize, string> = {
  xs: 'text-xs',
  sm: 'text-sm',
}

export const DropdownMenuItem = ({
  children,
  type = 'normal',
  handler,
  fontSize = 'sm',
}: DropdownMenuItemProps) => {
  return (
    <div
      onClick={handler}
      className={twMerge(
        'px-2 py-1.5 select-none hover:bg-gray-100 rounded-[4px] overflow-hidden relative flex items-center',
        typeColors[type],
        fontSizeStyle[fontSize],
      )}
    >
      {children}
    </div>
  )
}