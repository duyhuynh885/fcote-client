import { call, put, fork, takeEvery, all, delay } from 'redux-saga/effects'
import {
  ViewDetailGroupActionType,
  ViewDetailGroupRequestAction,
  ViewDetailGroupResponse,
} from './type'
import { hideLoaderAction, showLoaderAction } from '../../layout/actions/loaderAction'
import { hideToastAction, showToastAction } from '../../layout/toast/toastAction'

import requestFailure from '../../../utils/onFailure'
import { handleError } from '../../../utils/handleError'
import groupApi from '../../../services/groupApi'

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
    yield put(showLoaderAction())
    const data: ViewDetailGroupResponse = yield call(groupApi.fetchDetailGroup, {
      id,
      pageSize,
      pageNumber,
    })
    yield put({ type: ViewDetailGroupActionType.VIEW_DETAIL_GROUP_SUCCESS, ...data })
    yield put(hideLoaderAction())
  } catch (error) {
    yield call(
      requestFailure,
      ViewDetailGroupActionType.VIEW_DETAIL_GROUP_ERROR,
      handleError(error),
    )
  }
}

function* viewDetailGroupWather() {
  yield takeEvery(ViewDetailGroupActionType.VIEW_DETAIL_GROUP_REQUESTING, viewDetailGroupFlow)
}

export default function* viewDetailGroupSaga() {
  yield all([fork(viewDetailGroupWather)])
}
