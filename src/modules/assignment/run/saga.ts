import { call, put, fork, takeEvery, all } from 'redux-saga/effects'
import {
  RunAssignmentDetailActionType,
  RunAssignmentDetailRequestAction,
  RunAssignmentDetailResponse,
} from './type'
import { hideLoaderAction, showLoaderAction } from '../../layout/actions/loaderAction'
import requestFailure from '../../../utils/onFailure'
import { handleError } from '../../../utils/handleError'
import assignmentApi from '../../../services/assignmentApi'

/**
 * Saga for fetch create assignment
 *
 * Version 1.0
 *
 * Date: 13-07-2022
 *
 * Copyright
 *
 * Modification Logs:
 * DATE               AUTHOR          DESCRIPTION
 * -----------------------------------------------------------------------
 * 13-07-2022         DuyHV           Create
 */

/**
 * RunAssignmentDetail flow generator function
 * @param payload RunAssignmentDetailRequestPayload
 */
function* runAssignmentDetailFlow({
  assignmentId,
  challengeId,
  sourceCode,
  language,
}: RunAssignmentDetailRequestAction) {
  try {
    yield put(showLoaderAction())
    const data: RunAssignmentDetailResponse = yield call(assignmentApi.runAssignmentDetail, {
      assignmentId,
      challengeId,
      sourceCode,
      language,
    })
    yield put({
      type: RunAssignmentDetailActionType.RUN_ASSIGNMENT_DETAIL_SUCCESS,
      ...data,
    })
    yield put(hideLoaderAction())
  } catch (error) {
    yield call(
      requestFailure,
      RunAssignmentDetailActionType.RUN_ASSIGNMENT_DETAIL_ERROR,
      handleError(error),
    )
  }
}

/**
 * RunAssignmentDetail watcher
 */
function* runAssignmentDetailWatcher() {
  yield takeEvery(
    RunAssignmentDetailActionType.RUN_ASSIGNMENT_DETAIL_REQUESTING,
    runAssignmentDetailFlow,
  )
}

export default function* runAssignmentDetailSaga() {
  yield all([fork(runAssignmentDetailWatcher)])
}
