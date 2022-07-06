import { call, put, take, fork, delay, all } from 'redux-saga/effects'
import { LoginActionType, LoginRequestPayload, LoginResponse } from './type'
import { hideLoaderAction, showLoaderAction } from '../../layout/actions/loaderAction'
import { authenticate, getCookie, signOut } from '../../../../utils/auth'
import authApi from '../../../../api/authApi'
import history from '../../../../routing/history'
import requestFailure from '../../../helper/onFailure'
import { handleError } from '../../../helper/handleError'

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
    authenticate(data)
    yield put({ type: LoginActionType.LOGIN_SUCCESS, ...data })
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
  signOut(() => {
    history.push('/login')
  })
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
