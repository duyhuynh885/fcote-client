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
  })

export default rootReducer
