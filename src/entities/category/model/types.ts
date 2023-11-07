import { FC } from 'react'
import { IUser } from '@entities/user'

export interface ICategory {
  id: number
  ownerId: number
  owner: IUser
  name: string
  icon?: string
  color?: string
  todo?: any
  createdAt: string
  updatedAt: string
}

export interface ICategoryColor {
  id: number
  name: string
  color: string
}

export interface ICategoryIcon {
  id: number
  name: string
  icon: FC
}
