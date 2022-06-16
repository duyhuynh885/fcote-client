import { axiosClient } from './clientApi'
import { AuthResponse } from '../models'

const authApi = {
  login(username: string, password: string): Promise<AuthResponse> {
    const url = '/auth/login'
    return axiosClient.post(url, {
      username,
      password,
    })
  },
}

export default authApi
