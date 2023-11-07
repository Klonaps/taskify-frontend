import { ReactNode, createContext, useEffect, useRef, useState } from 'react'

interface DropdownProps {
  children: ReactNode,
  closeOnMouseLeave?: boolean
}

export interface IDropwDownContext {
  isVisible: boolean
  toggleDropDownHandler: () => void
}

export const DropwDownContext = createContext<IDropwDownContext | undefined>(
  undefined,
)
export const Dropdown = ({ children, closeOnMouseLeave = false }: DropdownProps) => {
  const [isMouseEnter, setIsMouseEnter] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const toggleDropDownHandler = () => {
    setIsVisible(prev => !prev)
  }

  useEffect(() => {
    document.addEventListener('click', handleDocumentClick)
    document.addEventListener('keydown', handleKeydown)
    return () => {
      document.removeEventListener('click', handleDocumentClick)
      document.removeEventListener('keydown', handleKeydown)
    }
  }, [])

  useEffect(() => {
    if (closeOnMouseLeave && !isMouseEnter) {
      setIsVisible(false)
    }
  }, [isMouseEnter, closeOnMouseLeave])

  const handleDocumentClick = (e: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(e.target as Node)
    ) {
      setIsVisible(false)
    }
  }
  const handleKeydown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsVisible(false)
    }
  }

  const onMouseEnterHandler = () => {
    setIsMouseEnter(true)
  }

  const onMouseLeaveHandler = () => {
    setIsMouseEnter(false)
  }

  return (
    <DropwDownContext.Provider value={{ isVisible, toggleDropDownHandler }}>
      <div
        ref={dropdownRef}
        onMouseEnter={onMouseEnterHandler}
        onMouseLeave={onMouseLeaveHandler}
        className='relative'
      >
        {children}
      </div>
    </DropwDownContext.Provider>
  )
}
