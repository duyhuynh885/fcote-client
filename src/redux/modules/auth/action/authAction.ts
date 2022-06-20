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
  firstName,
  lastName,
  userName,
  email,
  password,
}: RegisterRequestPayload): RegisterRequestAction => {
  return {
    type: RegisterActionType.REGISTER_REQUESTING,
    firstName,
    lastName,
    userName,
    email,
    password,
  }
}

export const logoutRequest = (): LogoutAction => {
  return {
    type: LoginActionType.LOGOUT_REQUEST,
  }
}
