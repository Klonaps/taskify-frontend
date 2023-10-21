import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <main className="w-full flex overflow-y-hidden">
      <Outlet />
    </main>
  );
};

export default Layout;
