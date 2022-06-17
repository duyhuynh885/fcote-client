import { LoginAction, LoginActionType, LoginState } from './type'

const initialState: LoginState = {
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

const reducer = (state = initialState, action: LoginAction) => {
  switch (action.type) {
    // Set the requesting flag and append a message to be shown
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

    // Successful?  Reset the login state.
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

    // Append the error returned from our api
    // set the success and requesting flags to false
    case LoginActionType.LOGIN_ERROR:
      return {
        errors: {
          messageEn: '',
          messageVi: '',
        },
        messages: [],
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

    default:
      return state
  }
}

export default reducer
