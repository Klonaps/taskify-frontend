import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface MenuButtonProps {
  title: string
  startContent?: ReactNode
  endContent?: ReactNode
  active?: boolean
  cn?: string
  onClick?: () => void
}
export const MenuButton = ({
  title,
  active = false,
  startContent,
  endContent,
  cn = '',
  onClick,
}: MenuButtonProps) => {
  return (
    <div
      onClick={onClick}
      className={twMerge(
        'w-full h-9 py-[5px] px-3 flex items-center rounded-md hover:bg-gray-100 text-sm font-light select-none cursor-pointer',
        cn,
        active && 'bg-gray-100',
      )}
    >
      {startContent ? (
        <div className='mr-3 flex justify-center items-center'>
          {startContent}
        </div>
      ) : null}
      <div className='w-min shrink-0 whitespace-nowrap'>{title}</div>
      {endContent ? (
        <div className='flex ml-3 w-full justify-end'>{endContent}</div>
      ) : null}
    </div>
  )
}
