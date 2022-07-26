export enum EditMyProfileActionType {
  EDIT_MY_PROFILE_REQUESTING = ' EDIT_MY_PROFILE_REQUESTING',
  EDIT_MY_PROFILE_SUCCESS = 'EDIT_MY_PROFILE_SUCCESS',
  EDIT_MY_PROFILE_ERROR = 'EDIT_MY_PROFILE_ERROR',
  EDIT_MY_PROFILE_CLEAR_STATE = 'EDIT_MY_PROFILE_CLEAR_STATE',
}

export interface EditMyProfileRequestPayload {
  firstName: string
  lastName: string
  organization: string
  city: string
  country: string
  phone: string
  gender: string
}

export interface EditMyProfileSuccessReponse {
  messageEn: string
  messageVi: string
}

export interface EditMyProfileErrorReponse {
  error: ErrorMessage
}

export type EditMyProfileRequestAction = ActionWithPayload<
  EditMyProfileActionType.EDIT_MY_PROFILE_REQUESTING,
  EditMyProfileRequestPayload
>

export type EditMyProfileSuccesAction = ActionWithPayload<
  EditMyProfileActionType.EDIT_MY_PROFILE_SUCCESS,
  EditMyProfileSuccessReponse
>

export type EditMyProfileErrorAction = ActionWithPayload<
  EditMyProfileActionType.EDIT_MY_PROFILE_ERROR,
  EditMyProfileErrorReponse
>

export type EditMyProfileClearStateAction =
  Action<EditMyProfileActionType.EDIT_MY_PROFILE_CLEAR_STATE>

export type EditMyProfileAction =
  | EditMyProfileRequestAction
  | EditMyProfileSuccesAction
  | EditMyProfileErrorAction
  | EditMyProfileClearStateAction

export interface EditMyProfileState {
  requesting: boolean
  successful: boolean
  messages: Message
  errors: ErrorMessage
}
