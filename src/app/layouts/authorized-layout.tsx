import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useUserStore } from "@shared/model/store/user-store";
import { Navbar } from "@widgets/navbar";

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
    <main className="w-full flex flex-col items-center">
      <Navbar />
      <div className="w-full max-w-[1320px] flex justify-center">
        <Outlet />
      </div>
    </main>
  );
};
