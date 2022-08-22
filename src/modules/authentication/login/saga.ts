import { ViewMyProfileActionType } from './../../my-profile/view/type'
import { ViewListLanguageActionType } from './../../assignment/language/type'
import { ViewListDataTypeActionType } from './../../assignment/data-type/type'
import { call, put, takeEvery, fork, all } from 'redux-saga/effects'
import { LoginActionType, LoginRequestAction, LoginResponse } from './type'
import { hideLoaderAction, showLoaderAction } from '../../layout/loader/action'
import { authenticate } from '../../../utils/auth'
import authApi from '../../../services/authApi'
import history from '../../../configs/routing/history'
import requestFailure from '../../../utils/requestFailure'
import { handleError } from '../../../utils/handleError'
import { swapMessage } from '../../../utils/helper'
import { showToastAction } from '../../layout/toast/toastAction'

/**
 * Saga for login
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
 * Login flow generator function
 * @param payload LoginRequestPayload
 */
function* loginFlow({ email, password }: LoginRequestAction) {
  try {
    yield put(showLoaderAction())
    const data: LoginResponse = yield call(authApi.login, { email, password })
    yield call(authenticate, data)
    yield put({ type: LoginActionType.LOGIN_SUCCESS, ...data })
    yield put({ type: ViewListDataTypeActionType.VIEW_LIST_DATA_TYPE_REQUESTING })
    yield put({ type: ViewListLanguageActionType.VIEW_LIST_LANGUAGE_REQUESTING })
    yield put({ type: ViewMyProfileActionType.VIEW_MY_PROFILE_REQUESTING, typeData: 4 })

    history.push('/')
    yield put(hideLoaderAction())
    yield put(showToastAction('success', swapMessage(data.messageEn, data.messageVi)))
  } catch (error) {
    yield call(requestFailure, LoginActionType.LOGIN_ERROR, handleError(error))
  }
}

/**
 * Login watcher
 */
function* loginWatcher() {
  yield takeEvery(LoginActionType.LOGIN_REQUESTING, loginFlow)
}

/**
 * Login saga
 */
export default function* loginSaga() {
  yield all([fork(loginWatcher)])
}
