import { ReactNode, useContext } from "react"
import { DropwDownContext } from "./dropdown";

interface DropdownTriggerProps {
  children: ReactNode
}

export const DropdownTrigger = ({ children }: DropdownTriggerProps) => {
  const contexValue = useContext(DropwDownContext);
  if (contexValue === undefined) return null;
  const { toggleDropDownHandler } = contexValue;

  return (
    <div onClick={toggleDropDownHandler}>{children}</div>
  )
}
