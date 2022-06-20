import { AuthAction, LoginActionType, AuthState, RegisterActionType } from './type'

const initialState: AuthState = {
  requesting: false,
  successful: false,
  messages: {
    messageEn: '',
    messageVi: '',
  },
  errors: {
    messageEn: '',
    messageVi: '',
  },
}

const reducer = (state = initialState, action: AuthAction) => {
  switch (action.type) {
    case LoginActionType.LOGIN_REQUESTING:
      return {
        requesting: true,
        successful: false,
        messages: {
          messageEn: '',
          messageVi: '',
        },
        errors: {
          messageEn: '',
          messageVi: '',
        },
      }

    case LoginActionType.LOGIN_SUCCESS:
      return {
        errors: {
          messageEn: '',
          messageVi: '',
        },
        messages: {
          messageEn: '',
          messageVi: '',
        },
        requesting: false,
        successful: true,
      }

    case LoginActionType.LOGIN_ERROR:
      return {
        errors: {
          messageEn: '',
          messageVi: '',
        },
        messages: {
          messageEn: '',
          messageVi: '',
        },
        requesting: false,
        successful: false,
      }

    case LoginActionType.LOGOUT_REQUEST:
      return {
        requesting: false,
        successful: false,
        messages: {
          messageEn: '',
          messageVi: '',
        },
        errors: {
          messageEn: '',
          messageVi: '',
        },
      }

    case RegisterActionType.REGISTER_REQUESTING:
      return {
        requesting: true,
        successful: false,
        messages: {
          messageEn: '',
          messageVi: '',
        },
        errors: {
          messageEn: '',
          messageVi: '',
        },
      }

    case RegisterActionType.REGISTER_SUCCESS:
      return {
        errors: {
          messageEn: '',
          messageVi: '',
        },
        messages: {
          messageEn: '',
          messageVi: '',
        },
        requesting: false,
        successful: true,
      }

    case RegisterActionType.REGISTER_ERROR:
      return {
        errors: {
          messageEn: '',
          messageVi: '',
        },
        messages: [],
        requesting: false,
        successful: false,
      }
    default:
      return state
  }
}

export default reducer
