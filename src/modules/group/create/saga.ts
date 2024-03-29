import { call, put, fork, takeEvery, all } from 'redux-saga/effects'
import { CreateGroupActionType, CreateGroupRequestAction, CreateGroupResponse } from './type'
import { hideLoaderAction, showLoaderAction } from '../../layout/loader/action'
import requestFailure from '../../../utils/requestFailure'
import { handleError } from '../../../utils/handleError'
import groupApi from '../../../services/groupApi'
import { showToastAction } from '../../layout/toast/toastAction'
import { swapMessage } from '../../../utils/helper'

/**
 * Saga for create Groups
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

function* createGroupFlow({ title, description, image }: CreateGroupRequestAction) {
  try {
    yield put(showLoaderAction())
    const data: CreateGroupResponse = yield call(groupApi.createGroup, {
      title,
      description,
      image,
    })
    yield put({ type: CreateGroupActionType.CREATE_GROUP_SUCCESS, ...data })
    yield put({ type: CreateGroupActionType.CREATE_GROUP_CLEAR_STATE })
    yield put(hideLoaderAction())

    yield put(showToastAction('success', swapMessage(data.messageEn, data.messageVi)))
  } catch (error) {
    yield call(requestFailure, CreateGroupActionType.CREATE_GROUP_ERROR, handleError(error))
  }
}

function* createGroupWather() {
  yield takeEvery(CreateGroupActionType.CREATE_GROUP_REQUESTING, createGroupFlow)
}

export default function* createGroupSaga() {
  yield all([fork(createGroupWather)])
}
