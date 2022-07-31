import { all, call, fork, put, takeEvery } from 'redux-saga/effects'
import profileApi from '../../../services/profileApi'
import requestFailure from '../../../utils/onFailure'
import { handleError } from '../../../utils/handleError'
import { GetMyProfileActionType, GetUserProfileSuccessResponse } from './type'

/**
 * saga my profile
 *
 * Version 1.0
 *
 * Date: 31-07-2022
 *
 * Copyright By TuanLA
 *
 * Modification Logs:
 * DATE             AUTHOR              DESCRIPTION
 * ------------------------------------------------
 * 31-07-2022      TuanLA           Create
 */

// ---------------------------- View User Profile Flow ----------------------------------
function* viewUserProfileFlow() {
  try {
    const data: GetUserProfileSuccessResponse = yield call(profileApi.fetchUserProfileApi)
    yield put({
      type: GetMyProfileActionType.GET_USER_PROFILE_SUCCESS,
      ...data,
    })
  } catch (error) {
    yield call(requestFailure, GetMyProfileActionType.GET_USER_PROFILE_ERROR, handleError(error))
  }
}

function* getUserProfileWatcher() {
  yield takeEvery(GetMyProfileActionType.GET_USER_PROFILE_REQUESTING, viewUserProfileFlow)
}

export default function* getMyProfileSaga() {
  yield all([fork(getUserProfileWatcher)])
}
