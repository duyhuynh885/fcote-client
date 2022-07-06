import { LoginRequestPayload, LoginResponse } from '../redux/modules/auth/login/type'
import { RegisterRequestPayload, RegisterResponse } from '../redux/modules/auth/register/type'
import { axiosClient } from './clientApi'

/**
 * Authentication Service Api
 *
 * Version 1.0
 *
 * Date: 22-06-2022
 *
 * Copyright
 *
 * Modification Logs:
 * DATE               AUTHOR          DESCRIPTION
 * -----------------------------------------------------------------------
 * 01-06-2022         DuyHV           Create
 * 05-07-2022         DuyHV           Update Response
 */
const authApi = {
  /**
   * Api for login requests
   * @param payload LoginRequestPayload
   * @returns LoginResponse
   */
  login(payload: LoginRequestPayload) {
    const url = '/auth/post-sign-in'
    return axiosClient.post<LoginResponse>(url, payload)
  },

  /**
   * Api for register requests
   * @param payload RegisterRequestPayload
   * @returns RegisterResponse
   */
  register(payload: RegisterRequestPayload) {
    const url = '/auth/post-sign-up'
    return axiosClient.post<RegisterResponse>(url, payload)
  },

  /**
   * Api for forget password request
   * @param payload RegisterRequestPayload
   * @returns
   */
  forgetPassword(payload: RegisterRequestPayload) {
    const url = '/auth/post-reset'
    return axiosClient.post(url, payload)
  },
}

export default authApi
