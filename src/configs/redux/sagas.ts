import { all, fork } from 'redux-saga/effects'
import loginSaga from '../../modules/authentication/login/saga'
import registerSaga from '../../modules/authentication/register/saga'
import viewListAssignmentSaga from '../../modules/assignment/list/saga'
import createAssignmentSaga from '../../modules/assignment/create/saga'
import dataTypeSaga from '../../modules/assignment/data-type/saga'
import languageSaga from '../../modules/assignment/language/saga'
import rankingSaga from '../../modules/ranking/saga'
import viewListGroupSaga from '../../modules/group/list/saga'
import viewDetailGroupSaga from '../../modules/group/detail/saga'
import joinGroupSaga from '../../modules/group/join-group/saga'
/**
 * Root Saga
 */
export default function* rootSaga() {
  yield all([
    fork(loginSaga),
    fork(registerSaga),
    fork(viewListAssignmentSaga),
    fork(createAssignmentSaga),
    fork(dataTypeSaga),
    fork(languageSaga),
    fork(rankingSaga),
    fork(viewListGroupSaga),
    fork(viewDetailGroupSaga),
    fork(joinGroupSaga),
  ])
}
