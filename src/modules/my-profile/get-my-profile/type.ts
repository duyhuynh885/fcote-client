export enum GetMyProfileActionType {
  GET_USER_PROFILE_REQUESTING = 'GET_USER_PROFILE_REQUESTING',
  GET_USER_PROFILE_SUCCESS = 'GET_USER_PROFILE_SUCCESS',
  GET_USER_PROFILE_ERROR = 'GET_USER_PROFILE_ERROR',
}

export interface UserProfileInterface {
  id: number
  username: string
  email: string
  first_name: string
  last_name: string
  created_at: string
}

export interface GetUserProfileSuccessResponse {
  user: UserProfileInterface
}

export interface GetUserProfileErrorResponse {
  error: ErrorMessage
}

export type GetUserProfileRequestAction = Action<GetMyProfileActionType.GET_USER_PROFILE_REQUESTING>
export type GetUserProfileSuccessAction = ActionWithPayload<
  GetMyProfileActionType.GET_USER_PROFILE_SUCCESS,
  GetUserProfileSuccessResponse
>
export type GetUserProfileErrorAction = ActionWithPayload<
  GetMyProfileActionType.GET_USER_PROFILE_ERROR,
  GetUserProfileErrorResponse
>

export type GetMyProfileAction =
  | GetUserProfileRequestAction
  | GetUserProfileSuccessAction
  | GetUserProfileErrorAction

export interface GetMyProfileState {
  requesting: boolean
  successful: boolean
  messages: Message
  errors: ErrorMessage
  user: UserProfileInterface
}
