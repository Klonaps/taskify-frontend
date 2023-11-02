import { ReactNode } from "react"

interface ModalFooterProps {
  children: ReactNode,
}

export const ModalFooter = ({ children }: ModalFooterProps) => {
  return (
    <div className="border-t border-gray-100 py-2 px-3 mt-2 flex items-center">
      {children}
    </div>
  );
}