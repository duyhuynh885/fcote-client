import { call, put, fork, takeEvery, all } from 'redux-saga/effects'
import {
  ViewListAssignmentActionType,
  ViewListAssignmentRequestAction,
  ViewListAssignmentResponse,
} from './type'
import { hideLoaderAction, showLoaderAction } from '../../layout/actions/loaderAction'
import requestFailure from '../../../helper/onFailure'
import { handleError } from '../../../helper/handleError'
import assignmentApi from '../../../../api/assignmentApi'

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
  filterByCreatedByUserId,
  pageSize,
  pageNumber,
}: ViewListAssignmentRequestAction) {
  try {
    yield put(showLoaderAction())
    const data: ViewListAssignmentResponse = yield call(assignmentApi.fetchListAssignment, {
      filterByStatus,
      filterByDifficult,
      searchBy,
      filterByCreatedByUserId,
      pageSize,
      pageNumber,
    })

    yield put({
      type: ViewListAssignmentActionType.VIEW_LIST_ASSIGNMENT_SUCCESS,
      ...data,
    })
    
    yield put(hideLoaderAction())
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
