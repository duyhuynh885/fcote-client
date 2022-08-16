import { all, call, fork, put, takeEvery } from 'redux-saga/effects'
import groupApi from '../../../services/groupApi'
import { handleError } from '../../../utils/handleError'
import requestFailure from '../../../utils/requestFailure'
import {
  ViewDetailGroupActionType,
  ViewDetailGroupRequestAction,
  ViewDetailGroupResponse,
} from './type'

/**
 * Saga for fetch detail of Groups
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

function* viewDetailGroupFlow({ id, pageSize, pageNumber }: ViewDetailGroupRequestAction) {
  try {
    const data: ViewDetailGroupResponse = yield call(groupApi.fetchDetailGroup, {
      id,
      pageSize,
      pageNumber,
    })
    yield put({ type: ViewDetailGroupActionType.VIEW_DETAIL_GROUP_SUCCESS, ...data })
  } catch (error) {
    yield call(
      requestFailure,
      ViewDetailGroupActionType.VIEW_DETAIL_GROUP_ERROR,
      handleError(error),
    )
  }
}

function* viewDetailGroupWatcher() {
  yield takeEvery(ViewDetailGroupActionType.VIEW_DETAIL_GROUP_REQUESTING, viewDetailGroupFlow)
}

export default function* viewDetailGroupSaga() {
  yield all([fork(viewDetailGroupWatcher)])
}
