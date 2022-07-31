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

export interface EditMyProfileSuccessResponse {
  messageEn: string
  messageVi: string
}

export interface EditMyProfileErrorResponse {
  error: ErrorMessage
}

export type EditMyProfileRequestAction = ActionWithPayload<
  EditMyProfileActionType.EDIT_MY_PROFILE_REQUESTING,
  EditMyProfileRequestPayload
>

export type EditMyProfileSuccessAction = ActionWithPayload<
  EditMyProfileActionType.EDIT_MY_PROFILE_SUCCESS,
  EditMyProfileSuccessResponse
>

export type EditMyProfileErrorAction = ActionWithPayload<
  EditMyProfileActionType.EDIT_MY_PROFILE_ERROR,
  EditMyProfileErrorResponse
>

export type EditMyProfileClearStateAction =
  Action<EditMyProfileActionType.EDIT_MY_PROFILE_CLEAR_STATE>

export type EditMyProfileAction =
  | EditMyProfileRequestAction
  | EditMyProfileSuccessAction
  | EditMyProfileErrorAction
  | EditMyProfileClearStateAction

export interface EditMyProfileState {
  requesting: boolean
  successful: boolean
  messages: Message
  errors: ErrorMessage
}
