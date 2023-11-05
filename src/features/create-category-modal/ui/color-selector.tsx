import { twMerge } from "tailwind-merge";

import { ICategoryColor } from "@entities/category/model/types";

interface ColorSelectorProps {
  selectedColorId: number;
  colors: ICategoryColor[];
  handler: (color: ICategoryColor) => void
}

export const ColorSelector = ({ colors, selectedColorId, handler }: ColorSelectorProps) => {
  return (
    <div className="mt-4">
      <h2 className="mb-2 text-[12px] font-medium select-none">Цвет</h2>
      <div className="flex gap-1 flex-wrap">
        {colors.map((color) => (
          <div
            key={color.id}
            onClick={() => handler(color)}
            className={twMerge(
              `w-[35px] h-[35px] rounded-full flex justify-center items-center`,
              selectedColorId === color.id ? "cursor-default" : "cursor-pointer"
            )}
            style={{
              backgroundColor: `rgba(${color.color}, 0.5)`,
            }}
          >
            <div
              className={twMerge(
                "w-[29px] h-[29px] rounded-full transition-all flex items-center justify-center",
                selectedColorId === color.id ? "" : "hover:opacity-50"
              )}
              style={{
                backgroundColor: `rgba(${color.color})`,
              }}
            >
              {selectedColorId === color.id ? (
                <div
                  className="w-[10px] h-[10px] rounded-full"
                  style={{ backgroundColor: `rgba(255, 255, 255, 0.4)` }}
                />
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
