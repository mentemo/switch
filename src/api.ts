import axios from 'axios'
import { CONSTANTS } from './constants'

export const api = axios.create({
  baseURL: CONSTANTS.API_ENDPOINT,
  headers: [
    {
      Authorization: process.env.SWITCHBOT_ACCESS_TOKEN,
    },
  ],
})
