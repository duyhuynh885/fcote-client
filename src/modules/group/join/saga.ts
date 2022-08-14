import { all, call, fork, put, takeEvery } from 'redux-saga/effects'
import groupApi from '../../../services/groupApi'
import { handleError } from '../../../utils/handleError'
import { swapMessage } from '../../../utils/helper'
import requestFailure from '../../../utils/requestFailure'
import { hideLoaderAction, showLoaderAction } from '../../layout/loader/action'
import { showToastAction } from '../../layout/toast/toastAction'
import { JoinGroupActionType, JoinGroupRequestAction, JoinGroupResponse } from './type'

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

function* JoinGroupFlow({ joinCode }: JoinGroupRequestAction) {
  try {
    yield put(showLoaderAction())
    const data: JoinGroupResponse = yield call(groupApi.joinGroup, {
      joinCode,
    })
    yield put({ type: JoinGroupActionType.JOIN_GROUP_SUCCESS, ...data })
    yield put(hideLoaderAction())
    yield put(showToastAction('success', swapMessage(data.messageEn, data.messageVi)))
    yield put({ type: JoinGroupActionType.JOIN_GROUP_CLEAR_STATE })
  } catch (error) {
    yield call(requestFailure, JoinGroupActionType.JOIN_GROUP_ERROR, handleError(error))
  }
}

function* JoinGroupWatcher() {
  yield takeEvery(JoinGroupActionType.JOIN_GROUP_REQUESTING, JoinGroupFlow)
}

export default function* JoinGroupSaga() {
  yield all([fork(JoinGroupWatcher)])
}
