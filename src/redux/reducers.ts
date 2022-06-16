import { connectRouter } from 'connected-react-router'
import { combineReducers } from 'redux'
import auth from './modules/auth/reducer'

const rootReducer = (history: any) =>
  combineReducers({
    router: connectRouter(history),
    auth,
  })

export default rootReducer
