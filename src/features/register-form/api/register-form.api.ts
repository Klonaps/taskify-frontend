import { baseInstance } from "@shared/api"
import { useMutation } from "@tanstack/react-query"
import { AxiosPromise } from "axios"
import { RegisterDto, RegisterResponse } from ".."
import { useUserStore } from "@shared/model/store"

const registerUser = (registerDto: RegisterDto): AxiosPromise<RegisterResponse> => {
  return baseInstance.post('auth/register', registerDto)
}

const setUserInStore = useUserStore.getState().loginUser

export const useUserRegister = () => {
  return useMutation({
    mutationFn: registerUser,
    onSuccess: (res) => {
      setUserInStore(res.data.user, res.data.accessToken)
    }
  })
}