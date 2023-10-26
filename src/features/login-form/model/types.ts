import { IUser } from "@entities/user";

export interface LoginResponse {
  user: IUser,
  accessToken: string
}