interface HeaderButtonProps {
  children: React.ReactNode
}

export const HeaderButton = ({ children }: HeaderButtonProps) => {
  return (
    <div className='rounded-md w-9 h-9 overflow-hidden cursor-pointer hover:bg-black/5 active:bg-black/10 flex items-center justify-center transition-colors duration-200'>
      {children}
    </div>
  )
}
