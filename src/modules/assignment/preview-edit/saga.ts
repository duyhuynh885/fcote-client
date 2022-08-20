import { all, call, fork, put, takeEvery } from 'redux-saga/effects'
import assignmentApi from '../../../services/assignmentApi'
import { handleError } from '../../../utils/handleError'
import requestFailure from '../../../utils/requestFailure'
import { showLoaderAction } from '../../layout/loader/action'
import { hideToastAction } from '../../layout/toast/toastAction'
import {
  PreviewEditAssignmentActionType,
  PreviewEditAssignmentRequestAction,
  PreviewEditAssignmentResponse,
} from './type'

/**
 * Saga for fetch previewEdit assignment
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
 * 22-06-2022         DuyHV           PreviewEdit
 */

/**
 * PreviewEditAssignment flow generator function
 * @param payload PreviewEditAssignmentRequestPayload
 */
function* previewEditAssignmentFlow({ id }: PreviewEditAssignmentRequestAction) {
  try {
    showLoaderAction()
    const data: PreviewEditAssignmentResponse = yield call(assignmentApi.previewEditAssignment, {
      id,
    })
    yield put({
      type: PreviewEditAssignmentActionType.PREVIEW_EDIT_ASSIGNMENT_SUCCESS,
      ...data,
    })
    hideToastAction()
  } catch (error) {
    yield call(
      requestFailure,
      PreviewEditAssignmentActionType.PREVIEW_EDIT_ASSIGNMENT_ERROR,
      handleError(error),
    )
  }
}

/**
 * PreviewEditAssignment watcher
 */
function* previewEditAssignmentWatcher() {
  yield takeEvery(
    PreviewEditAssignmentActionType.PREVIEW_EDIT_ASSIGNMENT_REQUESTING,
    previewEditAssignmentFlow,
  )
}

export default function* previewEditAssignmentSaga() {
  yield all([fork(previewEditAssignmentWatcher)])
}
