import { LogoutAction } from './../type'
import { LoginActionType, LoginRequestAction, LoginRequestPayload } from '../type'

export const loginRequest = ({ email, password }: LoginRequestPayload): LoginRequestAction => {
  return {
    type: LoginActionType.LOGIN_REQUESTING,
    email,
    password,
  }
}

export const logoutRequest = (): LogoutAction => {
  return {
    type: LoginActionType.LOGOUT_REQUEST,
  }
}
