import { all, call, fork, put, takeEvery } from 'redux-saga/effects'
import profileApi from '../../../services/profileApi'
import { hideLoaderAction, showLoaderAction } from '../../layout/loader/action'
import requestFailure from '../../../utils/requestFailure'
import { handleError } from '../../../utils/handleError'
import {
  ViewChallengeCompletedRequestAction,
  ViewChallengeCompletedSuccessResponse,
  ViewMyProfileActionType,
  ViewUserAssignmentRequestAction,
  ViewUserAssignmentSuccessResponse,
} from './type'

/**
 * saga my profile
 *
 * Version 1.0
 *
 * Date: 10-07-2022
 *
 * Copyright By HuyNT2711
 *
 * Modification Logs:
 * DATE             AUTHOR              DESCRIPTION
 * ------------------------------------------------
 * 10-07-2022      HuyNT2711           Create
 */

// ---------------------------- View User Assignment Flow ----------------------------------
function* viewUserAssignmentFlow({
  username,
  typeData,
  firstName,
  lastName,
  organization,
  city,
  country,
  phone,
  gender,
}: ViewUserAssignmentRequestAction) {
  try {
    yield put(showLoaderAction())
    const data: ViewUserAssignmentSuccessResponse = yield call(profileApi.fetchUserAssignmentApi, {
      username,
      typeData,
      firstName,
      lastName,
      organization,
      city,
      country,
      phone,
      gender,
    })

    yield put({
      type: ViewMyProfileActionType.VIEW_USER_ASSIGNMENT_SUCCESS,
      ...data,
    })
    yield put(hideLoaderAction())
  } catch (error) {
    yield call(
      requestFailure,
      ViewMyProfileActionType.VIEW_USER_ASSIGNMENT_ERROR,
      handleError(error),
    )
  }
}
// ---------------------------- View Challenge Completed Flow ----------------------------------
function* viewChallengeCompletedFlow({ typeData, username }: ViewChallengeCompletedRequestAction) {
  try {
    yield put(showLoaderAction())
    const data: ViewChallengeCompletedSuccessResponse = yield call(
      profileApi.fetchChallengeCompletedApi,
      {
        typeData,
        username,
      },
    )
    yield put({
      type: ViewMyProfileActionType.VIEW_CHALLENGE_COMPLETED_SUCCESS,
      ...data,
    })

    yield put(hideLoaderAction())
  } catch (error) {
    yield call(
      requestFailure,
      ViewMyProfileActionType.VIEW_CHALLENGE_COMPLETED_ERROR,
      handleError(error),
    )
  }
}

function* viewUserAssignmentWatcher() {
  yield takeEvery(ViewMyProfileActionType.VIEW_USER_ASSIGNMENT_REQUESTING, viewUserAssignmentFlow)
}

function* viewChallengeCompletedWatcher() {
  yield takeEvery(
    ViewMyProfileActionType.VIEW_CHALLENGE_COMPLETED_REQUESTING,
    viewChallengeCompletedFlow,
  )
}

export default function* viewMyProfileSaga() {
  yield all([fork(viewUserAssignmentWatcher), fork(viewChallengeCompletedWatcher)])
}
