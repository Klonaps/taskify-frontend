import { API_HOST } from "@shared/config";
import { useUserStore } from "@shared/model/store";
import axios from "axios";

const token = useUserStore.getState().accessToken

export const authorizedInstance = axios.create({
  baseURL: API_HOST,
  headers: {
    'Authorization': `Bearer ${token}`
  }
})