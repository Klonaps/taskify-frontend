import Logo from "/logo.svg"
import { HiOutlinePlus } from "react-icons/hi";

import { ProfileDropdown } from "@features/profile-dropdown"
import { HeaderButton } from "@shared/ui"

export const Navbar = () => {
  return (
    <header className="w-full h-[60px] border-b border-b-gray-100 flex justify-center">
      <nav className="w-full max-w-[1320px] h-full flex justify-between items-center">
        <div className="flex gap-3 items-center h-full">
          <img
            src={Logo}
            alt="Taskify"
            className="w-[30px] aspect-square select-none pointer-events-none"
          />
          <h1 className="font-medium text-xl select-none">Taskify</h1>
        </div>
        <div className="flex gap-3 items-center">
          <HeaderButton>
            <HiOutlinePlus size={20} />
          </HeaderButton>
          <ProfileDropdown />
        </div>
      </nav>
    </header>
  );
};
