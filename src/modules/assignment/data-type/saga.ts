import { call, put, fork, takeEvery, all } from 'redux-saga/effects'
import { ViewListDataTypeActionType, ViewListDataTypeResponse } from './type'
import { hideLoaderAction, showLoaderAction } from '../../layout/loader/action'
import requestFailure from '../../../utils/requestFailure'
import { handleError } from '../../../utils/handleError'
import assignmentApi from '../../../services/assignmentApi'

/**
 * Saga for get data-type
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
 * ViewListDataType flow generator function
 * @param payload ViewListDataTypeRequestPayload
 */
function* viewListDataTypeFlow() {
  try {
    yield put(showLoaderAction())
    const data: ViewListDataTypeResponse = yield call(assignmentApi.fetchListDataType)
    yield put({
      type: ViewListDataTypeActionType.VIEW_LIST_DATA_TYPE_SUCCESS,
      ...data,
    })
    yield put(hideLoaderAction())
  } catch (error) {
    yield call(
      requestFailure,
      ViewListDataTypeActionType.VIEW_LIST_DATA_TYPE_ERROR,
      handleError(error),
    )
  }
}

/**
 * ViewListDataType watcher
 */
function* viewListDataTypeWatcher() {
  yield takeEvery(ViewListDataTypeActionType.VIEW_LIST_DATA_TYPE_REQUESTING, viewListDataTypeFlow)
}

export default function* viewListDataTypeSaga() {
  yield all([fork(viewListDataTypeWatcher)])
}
