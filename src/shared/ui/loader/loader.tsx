import { twMerge } from 'tailwind-merge'

type LoaderColor = 'blue' | 'white'

interface LoaderProps {
  withText?: boolean
  color?: LoaderColor
}

const loaderColorStyle: Record<LoaderColor, string> = {
  white: 'border-white/900 border-b-white',
  blue: 'border-blue-400 border-b-blue-500',
}

export const Loader = ({ withText, color = 'white' }: LoaderProps) => {
  return (
    <div className='flex flex-col items-center'>
      <span
        className={twMerge(
          'loader border-[2px] rounded-full',
          loaderColorStyle[color],
        )}
      />
      {withText ? (
        <p className='select-none text-[#6a6a6a] text-sm mt-2'>Загрузка...</p>
      ) : null}
    </div>
  )
}
