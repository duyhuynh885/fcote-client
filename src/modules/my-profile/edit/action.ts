import {
  EditMyProfileRequestPayload,
  EditMyProfileActionType,
  EditMyProfileClearStateAction,
  EditMyProfileRequestAction,
} from './type'

export const editMyProfileRequest = ({
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
    firstName,
    lastName,
    organization,
    city,
    country,
    phone,
    gender,
  }
}

export const clearStateMyProfile = (): EditMyProfileClearStateAction => {
  return {
    type: EditMyProfileActionType.EDIT_MY_PROFILE_CLEAR_STATE,
  }
}
