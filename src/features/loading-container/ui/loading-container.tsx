import { Loader } from '@shared/ui'

export const LoadingContainer = () => {
  return (
    <section className='w-full h-screen flex items-center justify-center absolute inset-0 bg-white z-10'>
      <Loader withText color='blue' />
    </section>
  )
}
