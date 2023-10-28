import { baseInstance } from "."

import { IUser } from "@shared/types/types"
import { useUserStore } from "@shared/model/store"
import { AUTH_PATH } from "@shared/model"

type checkAuthResponce = {
  user: IUser
}

const authCheckSuccess = useUserStore.getState().authCheckSuccess
const authCheckFailed = useUserStore.getState().authCheckFailed

export const checkAuth = (token: string) => {
  return baseInstance.get<checkAuthResponce>(`${AUTH_PATH}/verify`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
  .then((res) => {
    authCheckSuccess(res.data.user)
  })
  .catch((err) => {
    console.log(err)
    authCheckFailed()
  })
}