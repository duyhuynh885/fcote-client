import { ViewListDataTypeActionType } from './../../assignment/data-type/type'
import { ViewListLanguageActionType } from './../../assignment/language/type'
import { ViewMyProfileActionType } from './../../my-profile/view/type'
import { LoginActionType } from './../login/type'
import { all, call, fork, put, takeEvery } from 'redux-saga/effects'
import history from '../../../configs/routing/history'
import authApi from '../../../services/authApi'
import { signOut } from '../../../utils/auth'
import { handleError } from '../../../utils/handleError'
import requestFailure from '../../../utils/requestFailure'
import { hideLoaderAction, showLoaderAction } from '../../layout/loader/action'
import { LogoutActionType, LogoutResponse } from './type'
import { swapMessage } from '../../../utils/helper'
import { showToastAction } from '../../layout/toast/toastAction'

/**
 * Saga for logout
 *
 * Version 1.0
 *
 * Date: 22-06-2022
 *
 * Copyright
 *
 * Modification Logs:
 * DATE               AUTHOR          DESCRIPTION
 * -----------------------------------------------------------------------
 * 22-06-2022         DuyHV           Create
 */

/**
 * Logout flow generator function
 */
function* logoutFlow() {
  try {
    yield put(showLoaderAction())
    const data: LogoutResponse = yield call(authApi.logoutAccount)
    yield call(signOut)
    yield put({ type: LogoutActionType.LOGOUT_SUCCESS, ...data })
    yield put({ type: LoginActionType.LOGIN_CLEAR_STATE })
    yield put({ type: ViewMyProfileActionType.VIEW_MY_PROFILE_CLEAR_STATE })
    yield put({ type: ViewListLanguageActionType.VIEW_LIST_LANGUAGE_CLEAR_STATE })
    yield put({ type: ViewListDataTypeActionType.VIEW_LIST_DATA_TYPE_CLEAR_STATE })

    history.push('/login')
    yield put(hideLoaderAction())
    yield put(showToastAction('success', swapMessage(data.messageEn, data.messageVi)))
  } catch (error) {
    yield call(requestFailure, LogoutActionType.LOGOUT_ERROR, handleError(error))
  }
}

/**
 * Logout watcher
 */
function* logoutWatcher() {
  yield takeEvery(LogoutActionType.LOGOUT_REQUESTING, logoutFlow)
}

/**
 * Logout saga
 */
export default function* logoutSaga() {
  yield all([fork(logoutWatcher)])
}
