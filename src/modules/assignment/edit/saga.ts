import { all, call, fork, put, takeEvery } from 'redux-saga/effects'
import history from '../../../configs/routing/history'
import assignmentApi from '../../../services/assignmentApi'
import { handleError } from '../../../utils/handleError'
import { swapMessage } from '../../../utils/helper'
import requestFailure from '../../../utils/requestFailure'
import { hideLoaderAction, showLoaderAction } from '../../layout/loader/action'
import { showToastAction } from '../../layout/toast/toastAction'
import {
  EditAssignmentActionType,
  EditAssignmentRequestAction,
  EditAssignmentResponse,
} from './type'

/**
 * Saga for fetch edit assignment
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
 * 22-06-2022         DuyHV           Edit
 */

/**
 * EditAssignment flow generator function
 * @param payload EditAssignmentRequestPayload
 */
function* editAssignmentFlow({
  id,
  setting,
  language,
  inputOutput,
  testCase,
}: EditAssignmentRequestAction) {
  try {
    yield put(showLoaderAction())
    const data: EditAssignmentResponse = yield call(assignmentApi.editAssignment, {
      id,
      setting,
      language,
      inputOutput,
      testCase,
    })
    yield put({
      type: EditAssignmentActionType.EDIT_ASSIGNMENT_SUCCESS,
      ...data,
    })
    history.push('/assignment')
    yield put(hideLoaderAction())
    yield put(showToastAction('success', swapMessage(data.messageEn, data.messageVi)))
  } catch (error) {
    yield call(requestFailure, EditAssignmentActionType.EDIT_ASSIGNMENT_ERROR, handleError(error))
  }
}

/**
 * EditAssignment watcher
 */
function* editAssignmentWatcher() {
  yield takeEvery(EditAssignmentActionType.EDIT_ASSIGNMENT_REQUESTING, editAssignmentFlow)
}

export default function* editAssignmentSaga() {
  yield all([fork(editAssignmentWatcher)])
}
