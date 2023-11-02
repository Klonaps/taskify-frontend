import { useState } from "react"
import { useForm } from "react-hook-form"

import { CategoryIcon, categoryColors, categoryIcons } from "@entities/category"
import { Modal, ModalFooter, ModalHeader } from "@entities/modal"

import { useModalStore } from "@shared/model/store"
import { Button, Input } from "@shared/ui"
import { ICategoryColor, ICategoryIcon } from "@entities/category/model/types"
import { twMerge } from "tailwind-merge"

export const CreateCategoryModal = () => {
  const { register } = useForm()
  const isModalOpen = useModalStore(state => state.isCreateCategoryModalOpen)
  const closeModal = useModalStore(state => state.closeCreateCategoryModal)

  const [selectedColor, setSelectedColor] = useState<ICategoryColor>(categoryColors[0])
  const [selectedIcon, setSelectedIcon] = useState<ICategoryIcon>(categoryIcons[0])

  const selectColorHandler = (color: ICategoryColor) => {
    setSelectedColor(color)
  }
  const selectIconHandler = (icon: ICategoryIcon) => {
    setSelectedIcon(icon)
  };

  return (
    <Modal isVisible={isModalOpen} closeHandler={closeModal}>
      <ModalHeader title="Создать категорию" closeHandler={closeModal} />
      <form className="px-3 w-[496px]">
        <Input register={register} name="name" lable="Название" />
        <div className="mt-4">
          <h2 className="mb-2 text-[12px] font-medium select-none">Цвет</h2>
          <div className="flex gap-1 flex-wrap">
            {categoryColors.map((color) => (
              <div
                key={color.id}
                onClick={() => selectColorHandler(color)}
                className={twMerge(
                  `w-8 h-8 rounded-full transition-colors duration-150 border-[2px] border-gray-200`,
                  selectedColor.id === color.id
                    ? "cursor-default border-blue-700"
                    : "hover:border-gray-300 cursor-pointer"
                )}
                style={{
                  backgroundColor: color.color,
                }}
              />
            ))}
          </div>
        </div>

        <div className="mt-4 mb-4">
          <h2 className="mb-2 text-[12px] font-medium select-none">Иконка</h2>
          <div className="flex gap-2 flex-wrap">
            {categoryIcons.map((iconData) => (
              <div
                key={iconData.id}
                onClick={() => selectIconHandler(iconData)}
                className={twMerge(
                  `p-2 rounded-md flex justify-center items-center transition-colors duration-150`,
                  selectedIcon.id === iconData.id
                    ? "bg-gray-200"
                    : "hover:bg-gray-100 cursor-pointer"
                )}
                style={{
                  color: selectedColor.color,
                }}
              >
                <CategoryIcon icon={iconData.icon} size={24} />
              </div>
            ))}
          </div>
        </div>
      </form>
      <ModalFooter>
        <div className="w-full flex justify-end items-center">
          <Button text="Создать" />
        </div>
      </ModalFooter>
    </Modal>
  );
}
