import { ReactNode, useContext } from 'react'
import { DropwDownContext } from './dropdown'
import { AnimatePresence, motion } from 'framer-motion'
import { twMerge } from 'tailwind-merge'

interface DropdownContentProps {
  children: ReactNode
  className?: string
}

const animationVariants = {
  init: {
    opacity: 0,
    scale: 0.65,
  },
  anim: {
    opacity: 1,
    scale: 1,
  },
  exit: {
    opacity: 0,
    scale: 0.65,
  },
}

export const DropdownContent = ({
  children,
  className = '',
}: DropdownContentProps) => {
  const contexValue = useContext(DropwDownContext)
  if (contexValue === undefined) return null
  const { isVisible } = contexValue

  return (
    <AnimatePresence mode='wait'>
      {isVisible && (
        <motion.div
          className={twMerge(
            'absolute min-w-[170px] z-[15] rounded-md bg-white shadow-sm border border-gray-100 p-1',
            className,
          )}
          variants={animationVariants}
          initial={'init'}
          animate={'anim'}
          exit={'exit'}
          transition={{
            bounce: false,
            duration: 0.1,
          }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
