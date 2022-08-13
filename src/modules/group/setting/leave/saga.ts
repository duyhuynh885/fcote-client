import { call, put, fork, takeEvery, all } from 'redux-saga/effects'
import { LeaveGroupActionType, LeaveGroupRequestAction, LeaveGroupResponse } from './type'
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

function* leaveGroupFlow({ groupId }: LeaveGroupRequestAction) {
  try {
    yield put(showLoaderAction())
    const data: LeaveGroupResponse = yield call(groupApi.leaveGroup, {
      groupId,
    })
    yield put({ type: LeaveGroupActionType.LEAVE_GROUP_SUCCESS, ...data })
    yield put({ type: LeaveGroupActionType.LEAVE_GROUP_CLEAR_STATE })
    yield put(hideLoaderAction())
    yield history.goBack()
    yield put(showToastAction('success', swapMessage(data.messageEn, data.messageVi)))
  } catch (error) {
    yield call(requestFailure, LeaveGroupActionType.LEAVE_GROUP_ERROR, handleError(error))
  }
}

function* leaveGroupWatcher() {
  yield takeEvery(LeaveGroupActionType.LEAVE_GROUP_REQUESTING, leaveGroupFlow)
}

export default function* LeaveGroupSaga() {
  yield all([fork(leaveGroupWatcher)])
}
