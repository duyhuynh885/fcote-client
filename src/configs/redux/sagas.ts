import { all, fork } from 'redux-saga/effects'
import loginSaga from '../../modules/authentication/login/saga'
import registerSaga from '../../modules/authentication/register/saga'
import viewListAssignmentSaga from '../../modules/assignment/list/saga'

/**
 * Root Saga
 */
export default function* rootSaga() {
  yield all([fork(loginSaga), fork(registerSaga), fork(viewListAssignmentSaga)])
}
