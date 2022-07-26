import { call, put, fork, takeEvery, all } from 'redux-saga/effects'
import { CreateChallengeActionType, CreateChallengeResponse } from './type'
import { hideLoaderAction, showLoaderAction } from '../../layout/loader/action'
import requestFailure from '../../../utils/onFailure'
import { handleError } from '../../../utils/handleError'
import history from '../../../configs/routing/history'
import challengeApi from '../../../services/challengeApi'

/**
 * Saga for fetch create challenge
 *
 * Version 1.0
 *
 * Date: 22-06-2022
 *
 * Copyright
 *
 * Modification Logs:
 * DATE               AUTHOR          DESCRIPTION
 * -----------------------------------------------------------------------
 * 22-06-2022         DuyHV           Create
 */

/**
 * CreateChallenge flow generator function
 * @param payload CreateChallengeRequestPayload
 */
function* CreateChallengeFlow() {
  try {
    yield put(showLoaderAction())
    const data: CreateChallengeResponse = yield call(challengeApi.createChallenge)
    yield put({
      type: CreateChallengeActionType.CREATE_CHALLENGE_SUCCESS,
      ...data,
    })
    history.push('/assignment')
    yield put(hideLoaderAction())
  } catch (error) {
    yield call(requestFailure, CreateChallengeActionType.CREATE_CHALLENGE_ERROR, handleError(error))
  }
}

/**
 * CreateChallenge watcher
 */
function* CreateChallengeWatcher() {
  yield takeEvery(CreateChallengeActionType.CREATE_CHALLENGE_REQUESTING, CreateChallengeFlow)
}

export default function* CreateChallengeSaga() {
  yield all([fork(CreateChallengeWatcher)])
}
