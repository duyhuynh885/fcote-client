import { all, fork } from 'redux-saga/effects'
import loginSaga from './modules/auth/saga'

export default function* rootSaga() {
  yield all([fork(loginSaga)])
}
