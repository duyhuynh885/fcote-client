import { axiosClient } from './clientApi'
import { AuthResponse, RegisterResponse } from '../models'
import { LoginRequestPayload, RegisterRequestPayload } from '../redux/modules/auth/type'

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
 */
const authApi = {
  /**
   * Api for login requests
   * @param payload LoginRequestPayload
   * @returns
   */
  login(payload: LoginRequestPayload): Promise<AuthResponse> {
    const url = '/auth/post-sign-in'
    return axiosClient.post(url, payload)
  },

  /**
   * Api for register requests
   * @param payload RegisterRequestPayload
   * @returns
   */
  register(payload: RegisterRequestPayload): Promise<RegisterResponse> {
    const url = '/auth/post-sign-up'
    return axiosClient.post(url, payload)
  },

  /**
   * Api for forget password request
   * @param payload RegisterRequestPayload
   * @returns
   */
  forgetPassword(payload: RegisterRequestPayload): Promise<RegisterResponse> {
    const url = '/auth/post-reset'
    return axiosClient.post(url, payload)
  },

  /**
   * Api for forgot password request
   * @param payload RegisterRequestPayload
   * @returns
   */
  changePassword(payload: RegisterRequestPayload): Promise<RegisterResponse> {
    const url = '/auth/change-password'
    return axiosClient.post(url, payload)
  },
}

export default authApi
