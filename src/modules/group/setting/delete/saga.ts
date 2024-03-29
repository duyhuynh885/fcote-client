import { call, put, fork, takeEvery, all } from 'redux-saga/effects'
import { DeleteGroupActionType, DeleteGroupRequestAction, DeleteGroupResponse } from './type'
import { hideLoaderAction, showLoaderAction } from '../../../layout/loader/action'
import requestFailure from '../../../../utils/requestFailure'
import { handleError } from '../../../../utils/handleError'
import groupApi from '../../../../services/groupApi'
import { showToastAction } from '../../../layout/toast/toastAction'
import { swapMessage } from '../../../../utils/helper'
import history from '../../../../configs/routing/history'

/**
 * Saga for delete group
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

function* deleteGroupFlow({ id }: DeleteGroupRequestAction) {
  try {
    yield put(showLoaderAction())
    const data: DeleteGroupResponse = yield call(groupApi.deleteGroup, {
      id,
    })
    yield put({ type: DeleteGroupActionType.DELETE_GROUP_SUCCESS, ...data })
    yield put({ type: DeleteGroupActionType.DELETE_GROUP_CLEAR_STATE })
    yield put(hideLoaderAction())
    yield history.goBack()
    yield put(showToastAction('success', swapMessage(data.messageEn, data.messageVi)))
  } catch (error) {
    yield call(requestFailure, DeleteGroupActionType.DELETE_GROUP_ERROR, handleError(error))
  }
}

function* deleteGroupWatcher() {
  yield takeEvery(DeleteGroupActionType.DELETE_GROUP_REQUESTING, deleteGroupFlow)
}

export default function* deleteGroupSaga() {
  yield all([fork(deleteGroupWatcher)])
}
