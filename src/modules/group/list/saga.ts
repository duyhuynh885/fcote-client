import { call, put, fork, takeEvery, all } from 'redux-saga/effects'
import { ViewListGroupActionType, ViewListGroupRequestAction, ViewListGroupResponse } from './type'
import requestFailure from '../../../utils/requestFailure'
import { handleError } from '../../../utils/handleError'
import groupApi from '../../../services/groupApi'

/**
 * Saga for fetch list of Groups
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
 * 21-07-2022         TuanLA           Create
 */

function* viewListGroupFlow({ pageSize, pageNumber }: ViewListGroupRequestAction) {
  try {
    const data: ViewListGroupResponse = yield call(groupApi.fetchListGroup, {
      pageSize,
      pageNumber,
    })
    yield put({ type: ViewListGroupActionType.VIEW_LIST_GROUP_SUCCESS, ...data })
  } catch (error) {
    yield call(requestFailure, ViewListGroupActionType.VIEW_LIST_GROUP_ERROR, handleError(error))
  }
}

function* viewListGroupWatcher() {
  yield takeEvery(ViewListGroupActionType.VIEW_LIST_GROUP_REQUESTING, viewListGroupFlow)
}

export default function* viewListGroupSaga() {
  yield all([fork(viewListGroupWatcher)])
}
