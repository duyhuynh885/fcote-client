import { ViewListLanguageActionType } from './../../assignment/language/type'
import { ViewListDataTypeActionType } from './../../assignment/data-type/type'
import { call, put, take, fork, delay, all } from 'redux-saga/effects'
import { LoginActionType, LoginRequestPayload, LoginResponse } from './type'
import { hideLoaderAction, showLoaderAction } from '../../layout/loader/action'
import { authenticate, getCookie, signOut } from '../../../utils/auth'
import authApi from '../../../services/authApi'
import history from '../../../configs/routing/history'
import requestFailure from '../../../utils/onFailure'
import { handleError } from '../../../utils/handleError'

/**
 * Saga for authenticate
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
function* loginFlow(payload: LoginRequestPayload) {
  try {
    yield put(showLoaderAction())
    const data: LoginResponse = yield call(authApi.login, payload)
    yield call(authenticate, data)
    yield put({ type: LoginActionType.LOGIN_SUCCESS, ...data })
    yield put({ type: ViewListDataTypeActionType.VIEW_LIST_DATA_TYPE_REQUESTING })
    yield put({ type: ViewListLanguageActionType.VIEW_LIST_LANGUAGE_REQUESTING })
    history.push('/')
    yield put(hideLoaderAction())
  } catch (error) {
    yield call(requestFailure, LoginActionType.LOGIN_ERROR, handleError(error))
  }
}

/**
 * Logout flow generator function
 */
function* logoutFlow() {
  yield put(showLoaderAction())
  yield delay(1000)
  signOut()
  history.push('/login')
  yield put(hideLoaderAction())
}

/**
 * Login watcher
 */
function* loginWatcher() {
  while (true) {
    const isLoggedIn = getCookie('accessToken')
    if (!isLoggedIn) {
      const { email, password } = yield take(LoginActionType.LOGIN_REQUESTING)
      yield fork(loginFlow, { email, password })
    }
    yield take(LoginActionType.LOGOUT_REQUEST)
    yield call(logoutFlow)
  }
}

export default function* loginSaga() {
  yield all([fork(loginWatcher)])
}
