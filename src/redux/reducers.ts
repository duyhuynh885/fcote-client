import { connectRouter } from 'connected-react-router'
import { combineReducers } from 'redux'
import loginReducer from './modules/auth/login/reducer'
import registerReducer from './modules/auth/register/reducer'
import loaderReducer from './modules/layout/reducer'
import listAssignmentReducer from './modules/assignment/list/reducer'

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
  })

export default rootReducer
