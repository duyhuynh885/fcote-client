import { all } from 'redux-saga/effects'
import loginWatcher from './modules/auth/saga'

export default function* rootSaga() {
  yield all([loginWatcher()])
}
