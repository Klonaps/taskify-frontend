import { Navigate, Outlet, useLocation } from "react-router-dom";

import { Navbar } from "@widgets/navbar";
import { LoadingContainer } from "@features/loading-container";
import { useGetCategoriesQuery } from "@entities/category";
import { useUserStore } from "@shared/model/store/user-store";

export const AuthorizedLayout = () => {
  const location = useLocation();
  const user = useUserStore((store) => store.user);
  const isAuthChecked = useUserStore((store) => store.isAuthChecked);
  const { isFetching } = useGetCategoriesQuery()

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
    <div className="w-full flex flex-col items-center h-screen relative">
      {isFetching ? <LoadingContainer /> : null}
      <Navbar />
      <main className="w-full max-w-[1320px] px-[10px] flex justify-center h-full">
        <Outlet />
      </main>
    </div>
  );
};
