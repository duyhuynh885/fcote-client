import { connectRouter } from 'connected-react-router'
import { combineReducers } from 'redux'
import authReducer from './modules/auth/reducer'
import loaderReducer from './modules/layout/reducer'

/**
 * Root Reducer
 * @param history any
 * @returns
 */
const rootReducer = (history: any) =>
  combineReducers({
    router: connectRouter(history),
    auth: authReducer,
    loader: loaderReducer,
  })

export default rootReducer
