import { handleError } from './handleError'
import { put, call } from 'redux-saga/effects'
import history from '../../routing/history'
import { hideLoaderAction } from '../modules/layout/actions/loaderAction'

export default function* requestFailure(action: any, error: any) {
  yield put(hideLoaderAction())
  const status = error.status
  const message = error.data
  switch (status) {
    case 400:
      yield put({ type: action, error: message })
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
