import Logo from "/logo.svg";

import { useUserStore } from "@shared/model/store";

export const Sidebar = () => {
  const logout = useUserStore((store) => store.deleteUser);
  const handleLogout = () => {
    logout();
  };

  return (
    <aside className="w-64 h-screen flex flex-col  bg-gray-100">
      <header className="py-3 px-2 flex gap-3 items-center">
        <img
          src={Logo}
          alt="Taskify"
          className="w-[30px] aspect-square select-none pointer-events-none"
        />
        <h1 className="font-medium text-xl select-none">Taskify</h1>
      </header>
      <button onClick={handleLogout}>Выход</button>
    </aside>
  );
};
