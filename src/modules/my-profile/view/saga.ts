import { all, call, fork, put, takeEvery } from 'redux-saga/effects'
import profileApi from '../../../services/profileApi'
import { handleError } from '../../../utils/handleError'
import requestFailure from '../../../utils/requestFailure'
import { hideLoaderAction, showLoaderAction } from '../../layout/loader/action'
import {
  ViewListChallengeActionType
} from './../../challenge/list/type'
import {
  ViewMyProfileActionType,
  ViewMyProfileRequestAction,
  ViewMyProfileSuccessResponse
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
function* viewUserAssignmentFlow({ username, typeData }: ViewMyProfileRequestAction) {
  try {
    yield put(showLoaderAction())
    const dataDetailProfile: ViewMyProfileSuccessResponse = yield call(
      profileApi.fetchUserAssignmentApi,
      {
        username,
        typeData,
      },
    )

    yield put({
      type: ViewListChallengeActionType.VIEW_LIST_CHALLENGE_REQUESTING,
      username,
      typeData,
    })
    yield put({
      type: ViewMyProfileActionType.VIEW_MY_PROFILE_SUCCESS,
      ...dataDetailProfile,
    })
    yield put(hideLoaderAction())
  } catch (error) {
    yield call(requestFailure, ViewMyProfileActionType.VIEW_MY_PROFILE_ERROR, handleError(error))
  }
}

function* viewUserAssignmentWatcher() {
  yield takeEvery(ViewMyProfileActionType.VIEW_MY_PROFILE_REQUESTING, viewUserAssignmentFlow)
}

export default function* viewMyProfileSaga() {
  yield all([fork(viewUserAssignmentWatcher)])
}
