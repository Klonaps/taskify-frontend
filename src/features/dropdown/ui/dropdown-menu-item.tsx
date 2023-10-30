import { ReactNode } from "react"

interface DropdownMenuItemProps {
  children: ReactNode,
  type?: 'danger' | 'normal',
  handler: () => void
}

const typeColors = {
  danger: "text-[#F65351]",
  normal: ''
};

export const DropdownMenuItem = ({
  children,
  type = "normal",
  handler,
}: DropdownMenuItemProps) => {

  return (
    <div
      onClick={handler}
      className={`px-2 py-1.5 text-sm select-none hover:bg-gray-100 rounded-[4px] overflow-hidden relative flex items-center ${typeColors[type]}`}
    >
      {children}
    </div>
  );
};
