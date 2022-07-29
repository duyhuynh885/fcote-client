import { all, delay, fork, put, takeLatest } from 'redux-saga/effects'
import { ToastActionType } from './type'

function* showToastFlow() {
  yield delay(3000)
  yield put({ type: ToastActionType.HIDE_TOAST_ACTION })
}

function* showToastWatcher() {
  yield takeLatest(ToastActionType.SHOW_TOAST_ACTION, showToastFlow)
}

export default function* showToastSaga() {
  yield all([fork(showToastWatcher)])
}
