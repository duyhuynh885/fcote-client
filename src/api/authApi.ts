import { axiosClient } from './clientApi'
import { AuthResponse, RegisterResponse } from '../models'
import { LoginRequestPayload, RegisterRequestPayload } from '../redux/modules/auth/type'

const authApi = {
  login(payload: LoginRequestPayload): Promise<AuthResponse> {
    console.log('login', payload)
    const url = '/auth/post-sign-in'
    return axiosClient.post(url, payload)
  },

  register(payload: RegisterRequestPayload): Promise<RegisterResponse> {
    console.log('register', payload)

    const url = '/auth/post-sign-up'
    return axiosClient.post(url, payload)
  },

  forgetPassword(payload: RegisterRequestPayload): Promise<RegisterResponse> {
    console.log('register', payload)

    const url = '/auth/post-reset'
    return axiosClient.post(url, payload)
  },

  changePassword(payload: RegisterRequestPayload): Promise<RegisterResponse> {
    console.log('register', payload)

    const url = '/auth/change-password'
    return axiosClient.post(url, payload)
  },
}

export default authApi
