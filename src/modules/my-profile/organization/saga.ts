import { all, call, fork, put, takeEvery } from 'redux-saga/effects'
import profileApi from '../../../services/profileApi'
import { handleError } from '../../../utils/handleError'
import requestFailure from '../../../utils/requestFailure'
import { GetOrganizationActionType, GetOrganizationSuccessResponse } from './type'

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
function* getOrganizationAssignmentFlow() {
  try {
    const dataDetailProfile: GetOrganizationSuccessResponse = yield call(profileApi.getOrganization)

    yield put({
      type: GetOrganizationActionType.GET_ORGANIZATION_SUCCESS,
      ...dataDetailProfile,
    })
  } catch (error) {
    yield call(requestFailure, GetOrganizationActionType.GET_ORGANIZATION_ERROR, handleError(error))
  }
}

function* getOrganizationAssignmentWatcher() {
  yield takeEvery(
    GetOrganizationActionType.GET_ORGANIZATION_REQUESTING,
    getOrganizationAssignmentFlow,
  )
}

export default function* GetOrganizationSaga() {
  yield all([fork(getOrganizationAssignmentWatcher)])
}
