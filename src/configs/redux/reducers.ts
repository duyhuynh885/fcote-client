import { connectRouter } from 'connected-react-router'
import { combineReducers } from 'redux'
import loginReducer from '../../modules/authentication/login/reducer'
import registerReducer from '../../modules/authentication/register/reducer'
import loaderReducer from '../../modules/layout/reducer'
import listAssignmentReducer from '../../modules/assignment/list/reducer'
import createAssignmentReducer from '../../modules/assignment/create/reducer'
import dataTypeReducer from '../../modules/assignment/data-type/reducer'
import languageReducer from '../../modules/assignment/language/reducer'
import rankingReducer from '../../modules/ranking/reducer'
import detailAssignmentReducer from '../../modules/assignment/detail/reducer'
import runAssignmentReducer from '../../modules/assignment/run/reducer'
import submitAssignmentReducer from '../../modules/assignment/submit/reducer'
import listGroupReducer from '../../modules/group/list/reducer'
import detailGroupReducer from '../../modules/group/detail/reducer'
import joinGroupReducer from '../../modules/group/join-group/reducer'
import createGroupReducer from '../../modules/group/create-group/reducer'
import toastReducer from '../../modules/layout/toast/reducer'
import myProfileReducer from '../../modules/my-profile/view/reducer'
import editMyProfileReducer from '../../modules/my-profile/edit/reducer'
import listChallengesReducer from '../../modules/challenge/list/reducer'
import deleteGroupReducer from '../../modules/group/setting-group/delete-group/reducer'

/**
 * Root Reducer
 * @param history any
 * @returns
 */

const rootReducer = (history: any) =>
  combineReducers({
    router: connectRouter(history),
    login: loginReducer,
    register: registerReducer,
    loader: loaderReducer,
    listAssignment: listAssignmentReducer,
    ranking: rankingReducer,
    createAssignment: createAssignmentReducer,
    dataType: dataTypeReducer,
    language: languageReducer,
    detailAssignment: detailAssignmentReducer,
    runAssignment: runAssignmentReducer,
    submitAssignment: submitAssignmentReducer,
    listGroup: listGroupReducer,
    detailGroup: detailGroupReducer,
    joinGroup: joinGroupReducer,
    createGroup: createGroupReducer,
    toast: toastReducer,
    listChallenges: listChallengesReducer,
    myProfile: myProfileReducer,
    editMyProfile: editMyProfileReducer,
    deleteGroup: deleteGroupReducer,
  })

export default rootReducer
