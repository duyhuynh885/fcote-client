import { getCookie, signOut } from './../../../utils/auth'
import { PayloadAction } from '@reduxjs/toolkit'
import { call, put, take, fork, delay } from 'redux-saga/effects'
import authApi from '../../../api/authApi'
import history from '../../../routing/history'
import { authenticate } from '../../../utils/auth'
import { LoginActionType, LoginRequestPayload } from './type'
import { hideLoaderAction, showLoaderAction } from '../layout/actions/loaderActions'

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
function* loginFlow(payload: LoginRequestPayload) {
  try {
    yield put(showLoaderAction())
    const data: ReturnType<typeof authApi.login> = yield call(authApi.login, payload)
    authenticate(data)
    yield put({ type: LoginActionType.LOGIN_SUCCESS })
    history.push('/')
    yield put(hideLoaderAction())
  } catch (error) {
    yield put(hideLoaderAction())
    yield put({ type: LoginActionType.LOGIN_ERROR, error })
  }
}

function* logoutFlow() {
  // dispatches the CLIENT_UNSET action
  yield put(showLoaderAction())
  yield delay(1000)
  signOut(() => {
    history.push('/login')
  })
  yield put(hideLoaderAction())
}

export default loginWatcher
function* loginWatcher() {
  while (true) {
    const isLoggedIn = getCookie('accessToken')
    if (!isLoggedIn) {
      const action: PayloadAction<LoginRequestPayload> = yield take(
        LoginActionType.LOGIN_REQUESTING,
      )
      console.log(action.payload)
      yield fork(loginFlow, action.payload)
    }

    yield take(LoginActionType.LOGOUT_REQUEST)
    yield call(logoutFlow)
  }
}

export default function* loginSaga() {
  yield fork(loginWatcher)
}
