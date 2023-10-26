import { Link } from "react-router-dom"

import Logo from '/logo.svg'
import { LoginForm } from "@features/login-form"

export const LoginPage = () => {
  return (
    <section className="w-full h-screen flex items-center justify-center">
      <div className="w-[450px] flex flex-col items-center">
        <div className="w-[80px] mb-7">
          <img
            src={Logo}
            alt="Taskify"
            className="object-cover aspect-square select-none pointer-events-none"
          />
        </div>
        <h1 className="text-[32px] font-medium mb-7 select-none">Вход в Taskify</h1>
        <LoginForm />
        <div className="text-sm mt-5">
          <p>
            Нет аккаунта?{" "}
            <Link
              to={"/register"}
              className="text-blue-600 hover:text-blue-500"
            >
              Зарегистрироваться
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}