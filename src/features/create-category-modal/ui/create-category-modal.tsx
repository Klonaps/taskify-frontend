import { useEffect, useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { isAxiosError } from "axios"

import { categoryColors, categoryIcons } from "@entities/category"
import { ICategoryColor, ICategoryIcon } from "@entities/category/model/types"
import { Modal, ModalFooter, ModalHeader } from "@entities/modal"

import { useModalStore } from "@shared/model/store"
import { Button, Input } from "@shared/ui"

import { ColorSelector } from "./color-selector"
import { IconSelector } from "./icon-selector"
import { useCreateCategoryQuery } from ".."

export const CreateCategoryModal = () => {
  const { mutate, error } = useCreateCategoryQuery()
  const { register, handleSubmit, setError, formState } = useForm<{
    name: string;
  }>()
  const fieldsError = formState.errors
  const closeModal = useModalStore(state => state.closeCreateCategoryModal)

  const [selectedColor, setSelectedColor] = useState<ICategoryColor>(categoryColors[0])
  const [selectedIcon, setSelectedIcon] = useState<ICategoryIcon>(categoryIcons[0])

  useEffect(() => {
    if (error) {
      if (isAxiosError(error) && error.status === 400) {
        setError(
          "name",
          { message: error.response?.data.message },
          { shouldFocus: false }
        );
      }
    }
  }, [error, setError]);

  const selectColorHandler = (color: ICategoryColor) => {
    setSelectedColor(color)
  }
  const selectIconHandler = (icon: ICategoryIcon) => {
    setSelectedIcon(icon)
  }

  const cteateHandler: SubmitHandler<{ name: string }> = ({ name }) => {
    mutate({ name: name.trim(), icon: selectedIcon.name, color: selectedColor.name })
  }

  return (
    <Modal closeHandler={closeModal}>
      <ModalHeader title="Создать категорию" closeHandler={closeModal} />
      <form className="px-3 w-[496px]" onSubmit={handleSubmit(cteateHandler)}>
        <Input
          register={register}
          name="name"
          lable="Название"
          error={fieldsError.name ? true : false}
          errorMessage={fieldsError.name ? fieldsError.name.message : undefined}
        />
        <ColorSelector
          colors={categoryColors}
          selectedColorId={selectedColor.id}
          handler={selectColorHandler}
        />
        <IconSelector
          icons={categoryIcons}
          selectedIconId={selectedIcon.id}
          color={selectedColor.color}
          handler={selectIconHandler}
        />
      </form>
      <ModalFooter>
        <div className="w-full flex justify-end items-center">
          <Button text="Создать" handler={handleSubmit(cteateHandler)} />
        </div>
      </ModalFooter>
    </Modal>
  )
}
