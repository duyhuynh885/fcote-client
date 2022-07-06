import { all, fork } from 'redux-saga/effects'
import loginSaga from './modules/auth/login/saga'
import registerSaga from './modules/auth/register/saga'
import viewListAssignmentSaga from './modules/assignment/list/saga'

/**
 * Root Saga
 */
export default function* rootSaga() {
  yield all([fork(loginSaga), fork(registerSaga), fork(viewListAssignmentSaga)])
}
