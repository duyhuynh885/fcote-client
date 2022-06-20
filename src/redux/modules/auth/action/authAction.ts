import {
  LoginActionType,
  LoginRequestAction,
  LoginRequestPayload,
  LogoutAction,
  RegisterActionType,
  RegisterRequestAction,
  RegisterRequestPayload,
} from '../type'

export const loginRequest = ({ email, password }: LoginRequestPayload): LoginRequestAction => {
  return {
    type: LoginActionType.LOGIN_REQUESTING,
    email,
    password,
  }
}

export const registerRequest = ({
  fullName,
  email,
  password,
}: RegisterRequestPayload): RegisterRequestAction => {
  console.log('registerRequesting from registerRequest', fullName, email, password)
  return {
    type: RegisterActionType.REGISTER_REQUESTING,
    fullName,
    email,
    password,
  }
}

export const logoutRequest = (): LogoutAction => {
  return {
    type: LoginActionType.LOGOUT_REQUEST,
  }
}
