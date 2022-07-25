import { delay, put } from 'redux-saga/effects'
import history from '../configs/routing/history'
import { hideLoaderAction } from '../modules/layout/actions/loaderAction'
import { hideToastAction, showToastAction } from '../modules/layout/toast/toastAction'
import { swapMessage } from './helper'

export default function* requestFailure(action: string, error: any) {
  yield put(hideLoaderAction())
  const status = error.status
  const message = error.data
  switch (status) {
    case 400:
      yield put({ type: action, error: message })
      yield put(
        showToastAction('error', swapMessage(message.errorMessageEn, message.errorMessageVi)),
      )
      yield delay(5000)
      yield put(hideToastAction())
      break
    case 401:
      history.push('/forbidden')
      break
    case 404:
      history.push('/not-found')
      break
    case 500:
      history.push('/server-error')
      break
    default:
      break
  }
}
