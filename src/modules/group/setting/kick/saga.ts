import { call, put, fork, takeEvery, all, delay } from 'redux-saga/effects'
import { KickGroupActionType, KickGroupRequestAction, KickGroupResponse } from './type'
import { hideLoaderAction, showLoaderAction } from '../../../layout/loader/action'
import requestFailure from '../../../../utils/onFailure'
import { handleError } from '../../../../utils/handleError'
import groupApi from '../../../../services/groupApi'
import { hideToastAction, showToastAction } from '../../../layout/toast/toastAction'
import { swapMessage } from '../../../../utils/helper'
import history from '../../../../configs/routing/history'

/**
 * Saga for kick member in group
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
 * 26-07-2022         TuanLA           Create
 */

function* kickGroupFlow({ groupId, memberId }: KickGroupRequestAction) {
  try {
    yield put(showLoaderAction())
    const data: KickGroupResponse = yield call(groupApi.kickMemberGroup, {
      groupId,
      memberId,
    })
    yield put({ type: KickGroupActionType.KICK_GROUP_SUCCESS, ...data })
    yield put({ type: KickGroupActionType.KICK_GROUP_CLEAR_STATE })
    yield put(hideLoaderAction())
    yield put(showToastAction('success', swapMessage(data.messageEn, data.messageVi)))
    yield delay(5000)
    yield put(hideToastAction())
  } catch (error) {
    yield call(requestFailure, KickGroupActionType.KICK_GROUP_ERROR, handleError(error))
  }
}

function* kickGroupWatcher() {
  yield takeEvery(KickGroupActionType.KICK_GROUP_REQUESTING, kickGroupFlow)
}

export default function* kickGroupSaga() {
  yield all([fork(kickGroupWatcher)])
}
