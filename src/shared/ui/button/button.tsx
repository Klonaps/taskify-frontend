import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";


type ButtonSizes = "small" | "medium" | "large";
type ButtonStatus = "primary" | "secondary" | "outline";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  size?: ButtonSizes;
  variant?: ButtonStatus;
  startContent?: ReactNode;
  endContent?: ReactNode;
  isLoading?: boolean;
  handler: () => void;
  cn?: string
}

const variantToClassName: Record<ButtonStatus, string> = {
  primary: "bg-blue-600 disabled:bg-blue-300 hover:bg-blue-500 active:bg-blue-700 text-white",
  secondary: "text-white",
  outline:
    "border border-black hover:bg-black hover:text-white box-border",
};
const sizesToClassName: Record<ButtonSizes, string> = {
  small: "",
  medium: "h-[35px]",
  large: "h-[40px]",
};

export const Button = (props: ButtonProps) => {
  const { variant = "primary", size = "medium", cn = "" } = props;

  return (
    <button
      onClick={props.handler}
      className={twMerge(
        "relative rounded-md py-1 px-4 font-normal text-[14px] overflow-hidden flex gap-1 items-center justify-center transition-all",
        variantToClassName[variant],
        sizesToClassName[size],
        cn
      )}
      disabled={props.disabled || props.isLoading}
    >
      {props.startContent}
      {props.isLoading ? <span className="loader" /> : <div>{props.text}</div>}
      {props.endContent}
    </button>
  );
};
