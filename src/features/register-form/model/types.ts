import { IUser } from '@entities/user'

export interface RegisterResponse {
  user: IUser
  accessToken: string
}
