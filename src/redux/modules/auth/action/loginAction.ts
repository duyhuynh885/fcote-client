import {
  LoginActionType,
  LoginRequestAction,
  LoginRequestPayload,
} from "../type";

const loginRequest = ({
  email,
  password,
}: LoginRequestPayload): LoginRequestAction => {
  return {
    type: LoginActionType.LOGIN_REQUESTING,
    email,
    password,
  };
};

export default loginRequest;
