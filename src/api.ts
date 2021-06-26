import axios from 'axios'
import { CONSTANTS } from './constants'

export const api = axios.create({
  baseURL: CONSTANTS.API_ENDPOINT,
  headers: [
    {
      Authorization: CONSTANTS.API_ENDPOINT,
    },
  ],
})
