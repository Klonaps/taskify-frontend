import { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { isAxiosError } from 'axios'

import { categoryColors, categoryIcons } from '@entities/category'
import { ICategoryColor, ICategoryIcon } from '@entities/category/model/types'
import { Modal, ModalFooter, ModalHeader } from '@entities/modal'

import { useModalStore } from '@shared/model/store'
import { Button, Input } from '@shared/ui'

import { ColorSelector } from './color-selector'
import { IconSelector } from './icon-selector'
import { useEditCategoryQuery } from '..'

export const EditCategoryModal = () => {
  const editCategory = useModalStore(state => state.editCategory)
  const closeModal = useModalStore(state => state.closeEditCategoryModal)

  const defaultColor = categoryColors.find(color => color.name === editCategory?.color)
  const defaultIcon = categoryIcons.find(icon => icon.name === editCategory?.icon)

  const { mutate, error } = useEditCategoryQuery()
  const { register, handleSubmit, setError, formState } = useForm<{ name: string}>({
    defaultValues: {
      name: editCategory?.name,
    },
  })
  const fieldsError = formState.errors

  const [selectedColor, setSelectedColor] = useState<ICategoryColor>(defaultColor || categoryColors[0])
  const [selectedIcon, setSelectedIcon] = useState<ICategoryIcon>(defaultIcon || categoryIcons[0])

  useEffect(() => {
    if (error) {
      if (isAxiosError(error) && error.response?.status === 400) {
        setError(
          'name',
          { message: error.response?.data.message },
          { shouldFocus: false },
        )
      }
    }
  }, [error, setError])

  const selectColorHandler = (color: ICategoryColor) => {
    setSelectedColor(color)
  }
  const selectIconHandler = (icon: ICategoryIcon) => {
    setSelectedIcon(icon)
  }

  const editHandler: SubmitHandler<{ name: string }> = ({ name }) => {
    mutate({
      id: editCategory!.id,
      data: {
        name: name.trim(),
        icon: selectedIcon.name,
        color: selectedColor.name,
      },
    })
  }

  return (
    <Modal closeHandler={closeModal}>
      <ModalHeader title='Редактировать категорию' closeHandler={closeModal} />
      <form className='px-3 w-[496px]' onSubmit={handleSubmit(editHandler)}>
        <Input
          register={register}
          name='name'
          lable='Название'
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
        <div className='w-full flex justify-end items-center'>
          <Button text='Редактировать' handler={handleSubmit(editHandler)} />
        </div>
      </ModalFooter>
    </Modal>
  )
}
