import { axiosClient } from './clientApi'
import { AuthResponse } from '../models'
import { LoginRequestPayload } from '../redux/modules/auth/type'

const authApi = {
  login(payload: LoginRequestPayload): Promise<AuthResponse> {
    const url = '/auth/login'
    return axiosClient.post(url, {
      payload,
    })
  },
}

export default authApi
