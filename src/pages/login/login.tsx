import { useForm } from "react-hook-form"
import { Button, Input } from "../../shared/ui"

export const Login = () => {
  const { register } = useForm()

  return (
    <section className="w-full h-screen flex items-center justify-center">
      <div className="w-[450px] flex flex-col items-center">
        <div className="w-[80px]">
          <img src="/logo.svg" alt="Taskify" className="object-cover aspect-square select-none" />
        </div>
        <form
          className="w-full flex flex-col gap-3"
          onSubmit={(e: React.BaseSyntheticEvent) => {
            e.preventDefault();
          }}
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
          <Button
            text="Войти"
            size="large"
            handler={() => console.log("Клик")}
            cn="w-full"
          />
        </form>
        <p className="text-sm mt-5">Нет аккаунта? Зарегистрироваться</p>
      </div>
    </section>
  );
}