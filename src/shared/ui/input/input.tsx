import { InputHTMLAttributes, useState } from 'react'
import { RegisterOptions, UseFormRegister } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'

type VariatType = 'default' | 'underline'
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  lable?: string
  required?: boolean
  register: UseFormRegister<any>
  registerOptions?: RegisterOptions
  name: string
  variant?: VariatType
  error?: boolean
  errorMessage?: string
}

/** Input
 * @param label - Лейбл текс. Необязательный.
 * @param name - Обязательный параментр имени поля
 * @param required - Показывает * после lable
 * @param variant - 'default' | 'underline'
 * */

const boxStyle: Record<VariatType, string> = {
  default: 'rounded-md border outline-2 outline-offset-0 outline-blue-200',
  underline: 'border-b',
}

const boxFocusStyle: Record<VariatType, string> = {
  default: 'border-blue-400 outline',
  underline: 'border-blue-400',
}

const inputStyle: Record<VariatType, string> = {
  default: 'px-3 py-2',
  underline: 'pb-2 pt-4',
}

const lableStyle: Record<VariatType, string> = {
  default: 'mb-2 text-[12px] font-medium',
  underline:
    'absolute top-[15px] text-[13px] font-normal transition-all duration-150',
}

const lableFocusStyle: Record<VariatType, string> = {
  default: '',
  underline: 'top-[-2px] text-blue-600 text-[12px]',
}

export const Input = ({
  lable,
  register,
  name,
  required,
  variant = 'default',
  error,
  errorMessage,
  registerOptions = {},
  ...rest
}: InputProps) => {
  const [isFocus, setIsFocus] = useState(false)

  return (
    <div className='relative'>
      {lable && (
        <label
          htmlFor={name}
          className={twMerge(
            'select-none pointer-events-none inline-block',
            lableStyle[variant],
            isFocus && lableFocusStyle[variant],
          )}
        >
          {lable}
          {required ? <span className='pl-1'>*</span> : null}
        </label>
      )}
      <div
        className={twMerge(
          'overflow-hidden transition-all duration-150 hover:border-blue-400 border-gray-300',
          boxStyle[variant],
          isFocus && boxFocusStyle[variant],
          error && 'border-red-500 hover:border-red-600 outline-red-300',
        )}
      >
        <input
          className={twMerge(
            'w-full bg-transparent outline-none placeholder:text-[13px] placeholder:text-gray-500 text-[13px]',
            inputStyle[variant],
          )}
          {...register(name, registerOptions)}
          id={name}
          name={name}
          onBlur={() => setIsFocus(false)}
          onFocus={() => setIsFocus(true)}
          {...rest}
        />
      </div>
      {error && errorMessage ? (
        <p className='mt-1 text-[12px] text-red-500'>{errorMessage}</p>
      ) : null}
    </div>
  )
}
