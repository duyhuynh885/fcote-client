import { all, call, fork, put, takeEvery } from 'redux-saga/effects'
import history from '../../../configs/routing/history'
import authApi from '../../../services/authApi'
import { signOut } from '../../../utils/auth'
import { handleError } from '../../../utils/handleError'
import requestFailure from '../../../utils/requestFailure'
import { hideLoaderAction, showLoaderAction } from '../../layout/loader/action'
import { LogoutActionType, LogoutResponse } from './type'

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
    history.push('/login')
    yield put(hideLoaderAction())
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
