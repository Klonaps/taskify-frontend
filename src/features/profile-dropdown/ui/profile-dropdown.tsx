import { Dropdown, DropdownContent, DropdownMenuItem, DropdownTrigger } from "@features/dropdown"

import { HiOutlineLogout, HiOutlineAdjustments } from "react-icons/hi";

import { useUserStore } from "@shared/model/store";
import { UserAvatar } from "@shared/ui"

export const ProfileDropdown = () => {
  const user = useUserStore(state => state.user)
  const logoutHandler = useUserStore((state) => state.deleteUser);
  return (
    <Dropdown>
      <DropdownTrigger>
        <UserAvatar login={user!.login} />
      </DropdownTrigger>
      <DropdownContent className="top-[52px] right-0 origin-top-right">
        <div className="flex flex-col gap-1">
          <DropdownMenuItem handler={() => console.log()}>
            <span className="mr-2">
              <HiOutlineAdjustments size={18} />
            </span>
            Настройки
          </DropdownMenuItem>
          <DropdownMenuItem handler={logoutHandler}>
            <span className="mr-2">
              <HiOutlineLogout size={18} />
            </span>
            Выход
          </DropdownMenuItem>
        </div>
      </DropdownContent>
    </Dropdown>
  );
}
