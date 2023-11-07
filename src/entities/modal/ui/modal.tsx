import { ReactNode, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { motion } from 'framer-motion'

interface ModalProps {
  children: ReactNode
  closeHandler: () => void
}

export const Modal = ({ closeHandler, children }: ModalProps) => {
  useEffect(() => {
    const keydownCloseModal = (e: KeyboardEvent): void => {
      if (e.key === 'Escape') {
        closeHandler()
      }
    }

    document.addEventListener('keydown', keydownCloseModal)
    return () => {
      document.removeEventListener('keydown', keydownCloseModal)
    }
  }, [closeHandler])

  const portalContainder = document.getElementById('portal')
  return createPortal(
    <div className='w-screen h-screen absolute inset-0 flex items-center justify-center'>
      <motion.div
        className='relative bg-white rounded-[16px] border-[2px] border-gray-100 overflow-hidden flex flex-col z-10'
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{
          duration: 0.125,
        }}
      >
        {children}
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={closeHandler}
        className='absolute inset-0 bg-black/40'
      />
    </div>,
    portalContainder!,
  )
}
