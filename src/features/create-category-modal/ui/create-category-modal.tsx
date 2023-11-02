import { useForm } from "react-hook-form"

import { CategoryIcon, categoryColors, categoryIcons } from "@entities/category"
import { Modal, ModalFooter, ModalHeader } from "@entities/modal"

import { useModalStore } from "@shared/model/store"
import { Button, Input } from "@shared/ui"

export const CreateCategoryModal = () => {
  const { register } = useForm()
  const isModalOpen = useModalStore(state => state.isCreateCategoryModalOpen)
  const closeModal = useModalStore(state => state.closeCreateCategoryModal)

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
                className={`w-8 h-8 rounded-full border-[2px] border-gray-100 cursor-pointer`}
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
              <div key={iconData.id} className={`p-2 cursor-pointer rounded-md hover:bg-gray-100 flex justify-center items-center`}>
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
  )
}
