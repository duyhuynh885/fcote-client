import { call, put, take, takeLatest } from 'redux-saga/effects'
import authApi from '../../../api/authApi'
import Register from '../../../pages/Authentication/Register'
import history from '../../../routing/history'
import { authenticate } from '../../../utils/auth'
import { LoginActionType } from './type'

const loginUrl = `${process.env.REACT_APP_API_URL}/api/auth/login`

function loginApi(email: string, password: string) {
  return fetch(loginUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  })
    .then(handleApiErrors)
    .then(response => response.json())
    .then(json => json)
    .catch(error => {
      throw error
    })
}

// function* logout() {
//   localStorage.removeItem('token')

//   history.push('/login')
// }

function* loginFlow(email: string, password: string) {
  try {
    const data: ReturnType<typeof authApi.login> = yield call(authApi.login, email, password)
    JSON.stringify(data)
    console.log(data)
    yield put({ type: LoginActionType.LOGIN_SUCCESS })
    authenticate(data)
    history.push('/')
  } catch (error) {
    yield put({ type: LoginActionType.LOGIN_ERROR, error })
  }
}

function* loginWatcher() {
  const { email, password } = yield take(LoginActionType.LOGIN_REQUESTING)
  yield takeLatest(LoginActionType.LOGIN_REQUESTING, loginFlow, email, password)
}

export default loginWatcher
