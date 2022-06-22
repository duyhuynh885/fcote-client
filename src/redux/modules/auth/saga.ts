import { getCookie, signOut } from './../../../utils/auth'
import { call, put, take, fork, delay } from 'redux-saga/effects'
import authApi from '../../../api/authApi'
import history from '../../../routing/history'
import { authenticate } from '../../../utils/auth'
import {
  LoginActionType,
  LoginRequestPayload,
  RegisterActionType,
  RegisterRequestPayload,
} from './type'
import { hideLoaderAction, showLoaderAction } from '../layout/actions/loaderActions'

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
    const data: ReturnType<typeof authApi.login> = yield call(authApi.login, payload)
    authenticate(data)
    yield put({ type: LoginActionType.LOGIN_SUCCESS })
    history.push('/')
    yield put(hideLoaderAction())
  } catch (error) {
    yield put(hideLoaderAction())
    yield put({ type: LoginActionType.LOGIN_ERROR, error })
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
 * Register flow generator function
 * @param payload RegisterRequestPayload
 */
function* registerFlow(payload: RegisterRequestPayload) {
  try {
    yield put(showLoaderAction())
    const data: ReturnType<typeof authApi.register> = yield call(authApi.register, payload)
    yield put({ type: RegisterActionType.REGISTER_SUCCESS })
    history.push('/login')
    yield put(hideLoaderAction())
  } catch (error) {
    yield put(hideLoaderAction())
    yield put({ type: RegisterActionType.REGISTER_ERROR, error })
  }
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

/**
 * Register watcher
 */
function* registerWatcher() {
  const { firstName, lastName, userName, email, password } = yield take(
    RegisterActionType.REGISTER_REQUESTING,
  )
  yield fork(registerFlow, { firstName, lastName, userName, email, password })
}

/**
 * Auth saga
 */
export default function* authSaga() {
  yield fork(loginWatcher)
  yield fork(registerWatcher)
}
