import {
  EditMyProfileRequestPayload,
  EditMyProfileActionType,
  EditMyProfileClearStateAction,
  EditMyProfileRequestAction,
} from './type'

export const editMyProfileRequest = ({
  avatar,
  firstName,
  lastName,
  organization,
  city,
  country,
  phone,
  gender,
}: EditMyProfileRequestPayload): EditMyProfileRequestAction => {
  return {
    type: EditMyProfileActionType.EDIT_MY_PROFILE_REQUESTING,
    avatar,
    firstName,
    lastName,
    organization,
    city,
    country,
    phone,
    gender,
  }
}

export const myProfileClearState = (): EditMyProfileClearStateAction => {
  return {
    type: EditMyProfileActionType.EDIT_MY_PROFILE_CLEAR_STATE,
  }
}
