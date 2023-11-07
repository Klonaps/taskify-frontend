import { Link } from 'react-router-dom'
import Logo from '/logo.svg'

import { RegisterForm } from '@features/register-form'

export const RegisterPage = () => {
  return (
    <section className='w-full h-screen flex items-center justify-center'>
      <div className='w-[450px] flex flex-col items-center'>
        <div className='flex items-center justify-center gap-4 mb-4'>
          <img
            src={Logo}
            alt='Taskify'
            className='w-[50px] aspect-square select-none pointer-events-none'
          />
          <h1 className='text-[32px] font-medium select-none'>
            Регистрация в Taskify
          </h1>
        </div>
        <h2 className='text-center mb-7 font-light px-8'>
          Присоединяйтесь к Taskify, с нами вы всегда будете на шаг впереди в
          выполнении своих обязанностей!
        </h2>
        <RegisterForm />
        <div className='text-sm mt-5'>
          <p>
            Уже есть аккаунт?{' '}
            <Link to={'/login'} className='text-blue-600 hover:text-blue-500'>
              Войти
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
