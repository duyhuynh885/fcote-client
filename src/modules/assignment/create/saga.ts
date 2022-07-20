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
import history from '../../../configs/routing/history'

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
function* createAssignmentFlow({
  setting,
  language,
  inputOutput,
  testCase,
}: CreateAssignmentRequestAction) {
  try {
    yield put(showLoaderAction())
    const data: CreateAssignmentResponse = yield call(assignmentApi.createAssignment, {
      setting,
      language,
      inputOutput,
      testCase,
    })
    yield put({
      type: CreateAssignmentActionType.CREATE_ASSIGNMENT_SUCCESS,
      ...data,
    })
    history.push('/assignment')
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
function* createAssignmentWatcher() {
  yield takeEvery(CreateAssignmentActionType.CREATE_ASSIGNMENT_REQUESTING, createAssignmentFlow)
}

export default function* createAssignmentSaga() {
  yield all([fork(createAssignmentWatcher)])
}
