import { Link } from "react-router-dom"
import Logo from "/logo.svg";

import { RegisterForm } from "@features/register-form";

export const RegisterPage = () => {
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
        <h1 className="text-[32px] font-medium select-none mb-4">
          Регистрация в Taskify
        </h1>
        <h2 className="text-center mb-7 font-light">
          Присоединяйтесь к Taskify, с нами вы всегда будете на шаг впереди в
          выполнении своих обязанностей!
        </h2>
        <RegisterForm />
        <div className="text-sm mt-5">
          <p>
            Уже есть аккаунт?{" "}
            <Link to={"/login"} className="text-blue-600 hover:text-blue-500">
              Войти
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
