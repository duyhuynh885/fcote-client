import { call, put, fork, takeEvery, all } from 'redux-saga/effects'
import {
  SubmitAssignmentDetailActionType,
  SubmitAssignmentDetailRequestAction,
  SubmitAssignmentDetailResponse,
} from './type'
import { hideLoaderAction, showLoaderAction } from '../../layout/actions/loaderAction'
import requestFailure from '../../../utils/onFailure'
import { handleError } from '../../../utils/handleError'
import assignmentApi from '../../../services/assignmentApi'

/**
 * Saga for fetch submit assignment
 *
 * Version 1.0
 *
 * Date: 21-07-2022
 *
 * Copyright
 *
 * Modification Logs:
 * DATE               AUTHOR          DESCRIPTION
 * -----------------------------------------------------------------------
 * 21-07-2022         DuyHV           Create
 */

/**
 * SubmitAssignmentDetail flow generator function
 * @param payload SubmitAssignmentDetailRequestPayload
 */
function* submitAssignmentDetailFlow({
  assignmentId,
  challengeId,
  sourceCode,
  language,
}: SubmitAssignmentDetailRequestAction) {
  try {
    yield put(showLoaderAction())
    const data: SubmitAssignmentDetailResponse = yield call(assignmentApi.submitAssignmentDetail, {
      assignmentId,
      challengeId,
      sourceCode,
      language,
    })
    yield put({
      type: SubmitAssignmentDetailActionType.SUBMIT_ASSIGNMENT_DETAIL_SUCCESS,
      ...data,
    })
    yield put(hideLoaderAction())
  } catch (error) {
    yield call(
      requestFailure,
      SubmitAssignmentDetailActionType.SUBMIT_ASSIGNMENT_DETAIL_ERROR,
      handleError(error),
    )
  }
}

/**
 * SubmitAssignmentDetail watcher
 */
function* submitAssignmentDetailWatcher() {
  yield takeEvery(
    SubmitAssignmentDetailActionType.SUBMIT_ASSIGNMENT_DETAIL_REQUESTING,
    submitAssignmentDetailFlow,
  )
}

export default function* submitAssignmentDetailSaga() {
  yield all([fork(submitAssignmentDetailWatcher)])
}
