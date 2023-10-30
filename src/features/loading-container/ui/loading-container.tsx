import { Loader } from "@shared/ui"

export const LoadingContainer = () => {
  return (
    <section  className="w-full h-screen flex items-center justify-center">
      <Loader withText color="blue"/>
    </section>
  )
}
