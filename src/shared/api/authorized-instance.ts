import axios from 'axios'

import { useUserStore } from '@shared/model/store'
import { API_HOST } from '@shared/config'

export const authorizedInstance = () => {
  const token = useUserStore.getState().accessToken
  return axios.create({
    baseURL: API_HOST,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}
