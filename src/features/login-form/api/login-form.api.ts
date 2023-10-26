import { baseInstance } from "@shared/api"
import { useMutation } from "@tanstack/react-query"
import { AxiosPromise } from "axios"
import { LoginDto, LoginResponse } from ".."
import { useUserStore } from "@shared/model/store"

const loginUser = (loginDto: LoginDto): AxiosPromise<LoginResponse> => {
  return baseInstance.post('auth/login', loginDto)
}

const setUserInStore = useUserStore.getState().loginUser

export const useUserLogin = () => {
  return useMutation({
    mutationFn: loginUser,
    onSuccess: (res) => {
      setUserInStore(res.data.user, res.data.accessToken)
    }
  })
}