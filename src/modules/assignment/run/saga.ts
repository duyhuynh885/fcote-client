import { call, put, fork, takeLatest } from 'redux-saga/effects'
import {
  RunAssignmentDetailActionType,
  RunAssignmentDetailRequestAction,
  RunAssignmentDetailResponse,
} from './type'
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
  yield takeLatest(
    RunAssignmentDetailActionType.RUN_ASSIGNMENT_DETAIL_REQUESTING,
    runAssignmentDetailFlow,
  )
}

export default function* runAssignmentDetailSaga() {
  yield fork(runAssignmentDetailWatcher)
}
