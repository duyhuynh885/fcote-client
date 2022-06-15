import { ServerResponse } from 'http'
import { call, cancel, cancelled, fork, put, take } from 'redux-saga/effects'

// We'll use the history object to redirect to different routes based on cases
import history from '../../../routing/history'

// Helper for api errors
import { handleApiErrors } from '../../../utils/api-erros'

// Our login constants
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
    const token: ServerResponse = yield call(loginApi, email, password)

    yield put({ type: LoginActionType.LOGIN_SUCCESS })

    localStorage.setItem('token', JSON.stringify(token)) // sketch?

    history.push('/')
    return token
  } catch (error) {
    yield put({ type: LoginActionType.LOGIN_ERROR, error })
  }
}

// Our watcher (saga).  It will watch for many things.
function* loginWatcher() {
  while (true) {
    const { email, password } = yield take(LoginActionType.LOGIN_REQUESTING)
    const task: ServerResponse = yield fork(loginFlow, email, password)
    // const action: any = yield take([LoginActionType.LOGIN_ERROR]);

    // if (action.type === ClientActionType.CLIENT_UNSET) {
    //   yield cancel(task);
    // }
  }
}

export default loginWatcher
