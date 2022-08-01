import { call, put, fork, takeEvery, all } from 'redux-saga/effects'
import {
  ViewListAssignmentActionType,
  ViewListAssignmentRequestAction,
  ViewListAssignmentResponse,
} from './type'
import requestFailure from '../../../utils/requestFailure'
import { handleError } from '../../../utils/handleError'
import assignmentApi from '../../../services/assignmentApi'

/**
 * Saga for fetch list of assignments
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
 * ViewListAssignment flow generator function
 * @param payload ViewListAssignmentRequestPayload
 */
function* viewListAssignmentFlow({
  filterByStatus,
  filterByDifficult,
  searchBy,
  filterByCurrentAccount,
  pageSize,
  pageNumber,
  filterByTop,
}: ViewListAssignmentRequestAction) {
  try {
    const data: ViewListAssignmentResponse = yield call(assignmentApi.fetchListAssignment, {
      filterByStatus,
      filterByDifficult,
      searchBy,
      filterByCurrentAccount,
      pageSize,
      pageNumber,
      filterByTop,
    })
    yield put({
      type: ViewListAssignmentActionType.VIEW_LIST_ASSIGNMENT_SUCCESS,
      ...data,
    })
  } catch (error) {
    yield call(
      requestFailure,
      ViewListAssignmentActionType.VIEW_LIST_ASSIGNMENT_ERROR,
      handleError(error),
    )
  }
}

/**
 * ViewListAssignment watcher
 */
function* viewListAssignmentWatcher() {
  yield takeEvery(
    ViewListAssignmentActionType.VIEW_LIST_ASSIGNMENT_REQUESTING,
    viewListAssignmentFlow,
  )
}

export default function* viewListAssignmentSaga() {
  yield all([fork(viewListAssignmentWatcher)])
}
