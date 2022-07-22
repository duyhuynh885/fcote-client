import { call, put, fork, takeEvery, all } from 'redux-saga/effects'
import { JoinGroupActionType, JoinGroupRequestAction, JoinGroupResponse } from './type'
import { hideLoaderAction, showLoaderAction } from '../../layout/actions/loaderAction'
import requestFailure from '../../../utils/onFailure'
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

function* JoinGroupFlow({ joinCode }: JoinGroupRequestAction) {
  try {
    yield put(showLoaderAction())
    const data: JoinGroupResponse = yield call(groupApi.joinGroup, {
      joinCode,
    })
    yield put({ type: JoinGroupActionType.JOIN_GROUP_SUCCESS, ...data })
    yield put(hideLoaderAction())
  } catch (error) {
    yield call(requestFailure, JoinGroupActionType.JOIN_GROUP_ERROR, handleError(error))
  }
}

function* JoinGroupWather() {
  yield takeEvery(JoinGroupActionType.JOIN_GROUP_REQUESTING, JoinGroupFlow)
}

export default function* JoinGroupSaga() {
  yield all([fork(JoinGroupWather)])
}
