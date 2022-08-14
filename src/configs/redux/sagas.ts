import { all, fork } from 'redux-saga/effects'
import loginSaga from '../../modules/authentication/login/saga'
import registerSaga from '../../modules/authentication/register/saga'
import viewListAssignmentSaga from '../../modules/assignment/list/saga'
import createAssignmentSaga from '../../modules/assignment/create/saga'
import dataTypeSaga from '../../modules/assignment/data-type/saga'
import languageSaga from '../../modules/assignment/language/saga'
import rankingSaga from '../../modules/ranking/saga'
import detailAssignmentSaga from '../../modules/assignment/detail/saga'
import runAssignmentSaga from '../../modules/assignment/run/saga'
import submitAssignmentSaga from '../../modules/assignment/submit/saga'
import viewListGroupSaga from '../../modules/group/list/saga'
import viewDetailGroupSaga from '../../modules/group/detail/saga'
import joinGroupSaga from '../../modules/group/join/saga'
import createGroupSaga from '../../modules/group/create/saga'
import viewMyProfileSaga from '../../modules/my-profile/view/saga'
import viewListChallengeSaga from '../../modules/challenge/list/saga'
import editMyProfileSaga from '../../modules/my-profile/edit/saga'
import deleteGroupSaga from '../../modules/group/setting/delete/saga'
import editGroupSaga from '../../modules/group/setting/edit/saga'
import showToastSaga from '../../modules/layout/toast/saga'
import createChallengeSaga from '../../modules/challenge/create/saga'
import detailChallengeSaga from '../../modules/challenge/detail/saga'
import leaveGroupSaga from '../../modules/group/setting/leave/saga'
import kickMemberGroupSaga from '../../modules/group/setting/kick/saga'
import logoutSaga from '../../modules/authentication/logout/saga'
import resetPasswordSaga from '../../modules/authentication/reset-password/saga'
import editAssignmentSaga from '../../modules/assignment/edit/saga'
import previewEditAssignmentSaga from '../../modules/assignment/preview-edit/saga'

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
    fork(detailAssignmentSaga),
    fork(runAssignmentSaga),
    fork(submitAssignmentSaga),
    fork(viewListGroupSaga),
    fork(viewDetailGroupSaga),
    fork(joinGroupSaga),
    fork(createGroupSaga),
    fork(deleteGroupSaga),
    fork(editGroupSaga),
    fork(viewMyProfileSaga),
    fork(viewListChallengeSaga),
    fork(editMyProfileSaga),
    fork(showToastSaga),
    fork(createChallengeSaga),
    fork(detailChallengeSaga),
    fork(leaveGroupSaga),
    fork(kickMemberGroupSaga),
    fork(logoutSaga),
    fork(resetPasswordSaga),
    fork(editAssignmentSaga),
    fork(previewEditAssignmentSaga),
  ])
}
