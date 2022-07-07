import { call, put, fork, takeEvery, all } from 'redux-saga/effects'
import {
  CreateAssignmentActionType,
  CreateAssignmentRequestAction,
  CreateAssignmentResponse,
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
 * Date: 22-06-2022
 *
 * Copyright
 *
 * Modification Logs:
 * DATE               AUTHOR          DESCRIPTION
 * -----------------------------------------------------------------------
 * 22-06-2022         DuyHV           Create
 */

/**
 * CreateAssignment flow generator function
 * @param payload CreateAssignmentRequestPayload
 */
function* viewListAssignmentFlow({
  settings,
  languages,
  inputOutput,
  authorSolution,
  testCase,
}: CreateAssignmentRequestAction) {
  try {
    yield put(showLoaderAction())
    const data: CreateAssignmentResponse = yield call(assignmentApi.createAssignment, {
      settings,
      languages,
      inputOutput,
      authorSolution,
      testCase,
    })
    yield put({
      type: CreateAssignmentActionType.CREATE_ASSIGNMENT_SUCCESS,
      ...data,
    })
    yield put(hideLoaderAction())
  } catch (error) {
    yield call(
      requestFailure,
      CreateAssignmentActionType.CREATE_ASSIGNMENT_ERROR,
      handleError(error),
    )
  }
}

/**
 * CreateAssignment watcher
 */
function* viewListAssignmentWatcher() {
  yield takeEvery(CreateAssignmentActionType.CREATE_ASSIGNMENT_REQUESTING, viewListAssignmentFlow)
}

export default function* viewListAssignmentSaga() {
  yield all([fork(viewListAssignmentWatcher)])
}
