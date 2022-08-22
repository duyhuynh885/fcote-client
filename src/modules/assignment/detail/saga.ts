import { call, put, fork, takeEvery, all } from 'redux-saga/effects'
import {
  ViewAssignmentDetailActionType,
  ViewAssignmentDetailRequestAction,
  ViewAssignmentDetailResponse,
} from './type'
import { hideLoaderAction, showLoaderAction } from '../../layout/loader/action'
import requestFailure from '../../../utils/requestFailure'
import { handleError } from '../../../utils/handleError'
import assignmentApi from '../../../services/assignmentApi'

/**
 * Saga for get assignments detail
 *
 * Version 1.0
 *
 * Date: 26-07-2022
 *
 * Copyright
 *
 * Modification Logs:
 * DATE               AUTHOR          DESCRIPTION
 * -----------------------------------------------------------------------
 * 26-07-2022         DuyHV           Create
 */

/**
 * ViewAssignmentDetail flow generator function
 * @param payload ViewAssignmentDetailRequestPayload
 */
function* viewAssignmentDetailFlow({ id, challengeId }: ViewAssignmentDetailRequestAction) {
  try {
    yield put(showLoaderAction())
    const data: ViewAssignmentDetailResponse = yield call(assignmentApi.fetchAssignmentDetail, {
      id,
      challengeId,
    })
    yield put({
      type: ViewAssignmentDetailActionType.VIEW_ASSIGNMENT_DETAIL_SUCCESS,
      ...data,
    })
    yield put(hideLoaderAction())
  } catch (error) {
    yield call(
      requestFailure,
      ViewAssignmentDetailActionType.VIEW_ASSIGNMENT_DETAIL_ERROR,
      handleError(error),
    )
  }
}

/**
 * ViewAssignmentDetail watcher
 */
function* viewAssignmentDetailWatcher() {
  yield takeEvery(
    ViewAssignmentDetailActionType.VIEW_ASSIGNMENT_DETAIL_REQUESTING,
    viewAssignmentDetailFlow,
  )
}

export default function* viewAssignmentDetailSaga() {
  yield all([fork(viewAssignmentDetailWatcher)])
}
