import { call, put, fork, takeEvery, all } from 'redux-saga/effects'
import { RegisterActionType, RegisterRequestAction, RegisterResponse } from './type'
import { hideLoaderAction, showLoaderAction } from '../../layout/loader/action'
import authApi from '../../../services/authApi'
import { handleError } from '../../../utils/handleError'
import requestFailure from '../../../utils/onFailure'
import history from '../../../configs/routing/history'

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
 * Register flow generator function
 * @param payload RegisterRequestPayload
 */
function* registerFlow({ firstName, lastName, username, email, password }: RegisterRequestAction) {
  try {
    yield put(showLoaderAction())
    const data: RegisterResponse = yield call(authApi.register, {
      firstName,
      lastName,
      username,
      email,
      password,
    })

    yield put({ type: RegisterActionType.REGISTER_SUCCESS, ...data })
    history.push('/login')
    yield put(hideLoaderAction())
  } catch (error) {
    yield call(requestFailure, RegisterActionType.REGISTER_ERROR, handleError(error))
  }
}

/**
 * Register watcher
 */
function* registerWatcher() {
  yield takeEvery(RegisterActionType.REGISTER_REQUESTING, registerFlow)
}

/**
 * Auth saga
 */
export default function* registerSaga() {
  yield all([fork(registerWatcher)])
}
