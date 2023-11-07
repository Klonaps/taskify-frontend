import { useMutation } from '@tanstack/react-query'
import { AxiosPromise } from 'axios'

import { RegisterDto, RegisterResponse } from '..'
import { useUserStore } from '@shared/model/store'
import { baseInstance } from '@shared/api'
import { AUTH_PATH } from '@shared/model'

const registerUser = (
  registerDto: RegisterDto,
): AxiosPromise<RegisterResponse> => {
  return baseInstance.post(`${AUTH_PATH}/register`, registerDto)
}

const setUserInStore = useUserStore.getState().loginUser

export const useUserRegister = () => {
  return useMutation({
    mutationFn: registerUser,
    onSuccess: res => {
      setUserInStore(res.data.user, res.data.accessToken)
    },
  })
}
