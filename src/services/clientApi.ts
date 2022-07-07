import { getCookie } from './../utils/auth'
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'

/**
 * Set up axios client
 *
 * Version 1.0
 *
 * Date: 16-06-2022
 *
 * Copyright
 *
 * Modification Logs:
 * DATE               AUTHOR          DESCRIPTION
 * -----------------------------------------------------------------------
 * 16-06-2022         DuyHV           Create
 */

export const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

axiosClient.defaults.headers.common = { Authorization: `Bearer ${getCookie('accessToken')}` }

// Add a request interceptor
axiosClient.interceptors.request.use(
  function (config: AxiosRequestConfig) {
    return config
  },
  function (error: AxiosError) {
    // Do something with request error
    return Promise.reject(error)
  },
)

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response: AxiosResponse) {
    return response.data
  },
  function (error: AxiosError) {
    return Promise.reject(error)
  },
)
