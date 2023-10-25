import axios from "axios"

import { API_HOST } from "@shared/config"

export const baseInstance = axios.create({
  baseURL: API_HOST,
})