import { ReactNode } from "react"
import { twMerge } from "tailwind-merge"

interface MenuButtonProps {
  title: string;
  startContent?: ReactNode;
  endContent?: ReactNode;
  active?: boolean,
  onClick?: () => void
}
export const MenuButton = ({ title, active = false , startContent, endContent, onClick }: MenuButtonProps) => {
  return (
    <div
      onClick={onClick}
      className={twMerge(
        "w-full h-9 py-[5px] px-3 flex items-center overflow-hidden rounded-md hover:bg-gray-100 active:bg-gray-200/95 text-sm font-light select-none cursor-pointer",
        active && "bg-gray-100"
      )}
    >
      {startContent ? (
        <div className="mr-3 flex justify-center items-center">
          {startContent}
        </div>
      ) : null}
      {title}
      {endContent ? <div>{startContent}</div> : null}
    </div>
  )
}
