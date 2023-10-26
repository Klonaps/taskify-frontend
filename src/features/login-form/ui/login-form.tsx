import { useEffect } from "react"
import { SubmitHandler, useForm } from "react-hook-form"

import { Button, Input } from "@shared/ui"

import { useUserLogin } from "../api/login-form.api"
import { LoginDto } from "../"

export const LoginForm = () => {
  const { mutate, isPending, error } = useUserLogin()
  const { register, handleSubmit, setError, formState } = useForm<LoginDto>()
  const fieldsErrors = formState.errors

  useEffect(() => {
    if (error) {
      setError("login", {
        message: "Имя пользователя или пароль введены неверно",
      }, { shouldFocus: false })
      setError(
        "password",
        {
          message: "Имя пользователя или пароль введены неверно",
        },
        { shouldFocus: false }
      )
    }
  }, [error, setError]);

  const handleLogin: SubmitHandler<LoginDto> = (data) => {
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
  );
};
