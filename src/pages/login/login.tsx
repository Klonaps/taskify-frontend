import { SubmitHandler, useForm } from "react-hook-form"
import Logo from '@shared/ui/assets/logo.svg'

import { Button, Input } from "@shared/ui"
import { LoginDto } from "@shared/api"
import { useUserStore } from "@shared/model/store"

export const Login = () => {
  const loginUser = useUserStore(state => state.loginUser)
  const { register, handleSubmit } = useForm<LoginDto>()

  const handleLogin: SubmitHandler<LoginDto> = data => {
    console.log(data)
  }

  return (
    <section className="w-full h-screen flex items-center justify-center">
      <div className="w-[450px] flex flex-col items-center">
        <div className="w-[80px]">
          <img
            src={Logo}
            alt="Taskify"
            className="object-cover aspect-square select-none"
          />
        </div>
        <form
          className="w-full flex flex-col gap-3"
          onSubmit={handleSubmit(handleLogin)}
        >
          <Input
            name="login"
            lable="Логин"
            placeholder="email@gmail.com"
            register={register}
            autoComplete="usernamea"
          />
          <Input
            name="password"
            lable="Пароль"
            register={register}
            type="password"
            placeholder="Введите ваш пароль"
            autoComplete="current-password"
          />
          <Button text="Войти" size="large" cn="w-full" />
        </form>
        <p className="text-sm mt-5">Нет аккаунта? Зарегистрироваться</p>
      </div>
    </section>
  );
}