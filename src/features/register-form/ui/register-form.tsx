import { useEffect } from "react"
import { isAxiosError } from "axios"
import { SubmitHandler, useForm } from "react-hook-form"

import { Button, Input } from "@shared/ui"

import { useUserRegister } from "../api/register-form.api"
import { RegisterDto } from ".."

export const RegisterForm = () => {
  const { mutate, isPending, error } = useUserRegister()
  const { register, handleSubmit, setError, formState } = useForm<RegisterDto>()
  const fieldsErrors = formState.errors

  useEffect(() => {
    if (error) {
      if (isAxiosError(error)) {
        const errMessage = error.response?.data.message
        setError("login", { message: errMessage }, { shouldFocus: false })
        setError("password", { message: errMessage }, { shouldFocus: false })
      }
    }
  }, [error, setError])

  const handleLogin: SubmitHandler<RegisterDto> = (data) => {
    mutate(data)
  }
  
  return (
    <form
      className="w-full flex flex-col gap-3"
      onSubmit={handleSubmit(handleLogin)}
    >
      <Input
        name="login"
        lable="Имя пользователя"
        placeholder="email@gmail.com"
        error={fieldsErrors.login ? true : false}
        errorMessage={fieldsErrors.login ? fieldsErrors.login.message : undefined}
        register={register}
        registerOptions={{
          required: true,
        }}
        autoComplete="usernamea"
      />
      <Input
        name="password"
        lable="Пароль"
        placeholder="Введите ваш пароль"
        error={fieldsErrors.login ? true : false}
        register={register}
        registerOptions={{
          required: true,
        }}
        type="password"
        autoComplete="current-password"
      />
      <Button
        text="Войти"
        size="large"
        cn="w-full mt-1"
        isLoading={isPending}
      />
    </form>
  )
}
