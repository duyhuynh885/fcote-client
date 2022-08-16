import { call, put, fork, takeEvery, all } from 'redux-saga/effects'
import { EditGroupActionType, EditGroupRequestAction, EditGroupResponse } from './type'
import { hideLoaderAction, showLoaderAction } from '../../../layout/loader/action'
import requestFailure from '../../../../utils/requestFailure'
import { handleError } from '../../../../utils/handleError'
import groupApi from '../../../../services/groupApi'
import { showToastAction } from '../../../layout/toast/toastAction'
import { swapMessage } from '../../../../utils/helper'

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

function* editGroupFlow({ image, groupId, title, description }: EditGroupRequestAction) {
  try {
    yield put(showLoaderAction())
    const data: EditGroupResponse = yield call(groupApi.editGroup, {
      image,
      groupId,
      title,
      description,
    })
    yield put({ type: EditGroupActionType.EDIT_GROUP_SUCCESS, ...data })
    yield put(hideLoaderAction())
    yield put(showToastAction('success', swapMessage(data.messageEn, data.messageVi)))
  } catch (error) {
    yield call(requestFailure, EditGroupActionType.EDIT_GROUP_ERROR, handleError(error))
  }
}

function* editGroupWatcher() {
  yield takeEvery(EditGroupActionType.EDIT_GROUP_REQUESTING, editGroupFlow)
}

export default function* EditGroupSaga() {
  yield all([fork(editGroupWatcher)])
}
