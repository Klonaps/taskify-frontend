import { CategoryIcon } from "@entities/category";
import { ICategoryIcon } from "@entities/category/model/types";
import { twMerge } from "tailwind-merge";

interface IconSelectorProps {
  icons: ICategoryIcon[];
  selectedIconId: number;
  color: string;
  handler: (icon: ICategoryIcon) => void;
}

export const IconSelector = ({
  icons,
  handler,
  color,
  selectedIconId,
}: IconSelectorProps) => {
  return (
    <div className="mt-4 mb-4">
      <h2 className="mb-2 text-[12px] font-medium select-none">Иконка</h2>
      <div className="flex gap-2 flex-wrap">
        {icons.map((iconData) => (
          <div
            key={iconData.id}
            onClick={() => handler(iconData)}
            className={twMerge(
              `p-2 rounded-md flex justify-center items-center overflow-hidden transition-all relative`,
              selectedIconId === iconData.id
                ? "cursor-default"
                : "cursor-pointer"
            )}
            style={{
              color: `rgba(${color})`,
            }}
          >
            <CategoryIcon icon={iconData.icon} size={24} />
            <div
              className={twMerge(
                "absolute inset-0 opacity-0 transition-opacity",
                selectedIconId === iconData.id
                  ? "opacity-[0.15]"
                  : "hover:opacity-[0.1]"
              )}
              style={{
                color: `rgba(${color})`,
                backgroundColor: `rgba(${color}, 1)`,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
