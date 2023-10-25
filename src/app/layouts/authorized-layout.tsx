import { Navigate, Outlet, useLocation } from "react-router-dom";

import { Sidebar } from "@widgets/sidebar";
import { useUserStore } from "@shared/model/store/user-store";

export const AuthorizedLayout = () => {
  const location = useLocation();
  const user = useUserStore((store) => store.user);
  const isAuthChecked = useUserStore((store) => store.isAuthChecked);

  if (!user && isAuthChecked) {
    return (
      <Navigate
        to={"/login"}
        replace
        state={{
          from: location,
        }}
      />
    );
  }

  return (
    <main className="w-full flex overflow-y-hidden">
      <Sidebar />
      <Outlet />
    </main>
  );
};
