import { all, call, fork, put, takeEvery } from 'redux-saga/effects'
import history from '../../../configs/routing/history'
import authApi from '../../../services/authApi'
import { handleError } from '../../../utils/handleError'
import { swapMessage } from '../../../utils/helper'
import requestFailure from '../../../utils/requestFailure'
import { hideLoaderAction, showLoaderAction } from '../../layout/loader/action'
import { showToastAction } from '../../layout/toast/toastAction'
import { ResetPasswordActionType, ResetPasswordRequestAction, ResetPasswordResponse } from './type'

/**
 * Saga for resetPassword
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
 * ResetPassword flow generator function
 * @param payload ResetPasswordRequestPayload
 */
function* resetPasswordFlow({ email }: ResetPasswordRequestAction) {
  try {
    yield put(showLoaderAction())
    const data: ResetPasswordResponse = yield call(authApi.resetPassword, { email })
    yield put({ type: ResetPasswordActionType.RESET_PASSWORD_SUCCESS, ...data })
    history.push('/login')
    yield put(hideLoaderAction())
    yield put(showToastAction('success', swapMessage(data.messageEn, data.messageVi)))
  } catch (error) {
    yield call(requestFailure, ResetPasswordActionType.RESET_PASSWORD_ERROR, handleError(error))
  }
}

/**
 * ResetPassword watcher
 */
function* resetPasswordWatcher() {
  yield takeEvery(ResetPasswordActionType.RESET_PASSWORD_REQUESTING, resetPasswordFlow)
}

/**
 * ResetPassword saga
 */
export default function* resetPasswordSaga() {
  yield all([fork(resetPasswordWatcher)])
}
