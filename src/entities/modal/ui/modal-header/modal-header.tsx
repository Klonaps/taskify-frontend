import { HiOutlineX } from "react-icons/hi"

interface ModalHeaderProps {
  title: string;
  closeHandler: () => void;
}

export const ModalHeader = (props: ModalHeaderProps) => {
  return (
    <div className="border-b border-gray-100 py-2 px-3 mb-2 flex justify-between items-center">
      <h1 className="text-[14px] font-medium select-none">{props.title}</h1>
      <span
        tabIndex={0}
        onClick={props.closeHandler}
        className="rounded-lg cursor-pointer hover:bg-black/5 active:bg-black/10 p-2 transition-colors duration-200"
      >
        <HiOutlineX />
      </span>
    </div>
  );
}
