import { IUser } from "@shared/types"
import { baseInstance } from "."
import { useUserStore } from "@shared/model/store"

type checkAuthResponce = {
  user: IUser
}

const authCheckSuccess = useUserStore.getState().authCheckSuccess
const authCheckFailed = useUserStore.getState().authCheckFailed

export const checkAuth = (token: string) => {
  return baseInstance.get<checkAuthResponce>('auth', {
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