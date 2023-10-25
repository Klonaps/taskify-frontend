import { useUserStore } from "@shared/model/store"

export const Sidebar = () => {
  const logout = useUserStore(store => store.deleteUser)
  const handleLogout = () => {
    logout()
  }

  return (
    <aside className="w-72 flex h-full">
      Sidebar
      <button onClick={handleLogout}>Выход</button>
    </aside>
  );
}
