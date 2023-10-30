import { ReactNode, createContext, useEffect, useRef, useState } from "react"

interface DropdownProps {
  children: ReactNode
}

export interface IDropwDownContext {
  isVisible: boolean;
  toggleDropDownHandler: () => void;
}

export const DropwDownContext = createContext<IDropwDownContext | undefined>(undefined)
export const Dropdown = ({children} : DropdownProps) => {
  const [isVisible, setIsVisible] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const toggleDropDownHandler = () => {
    setIsVisible(prev => !prev)
  }

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick)
    document.addEventListener("keydown", handleKeydown)
    return () => {
      document.removeEventListener("click", handleDocumentClick)
      document.removeEventListener("keydown", handleKeydown)
    }
  }, [])

  const handleDocumentClick = (e: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(e.target as Node)
    ) {
      setIsVisible(false);
    }
  }
  const handleKeydown = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      setIsVisible(false);
    }
  }

  return (
    <DropwDownContext.Provider value={{ isVisible, toggleDropDownHandler }}>
      <div ref={dropdownRef} className="relative">
        {children}
      </div>
    </DropwDownContext.Provider>
  );
}
