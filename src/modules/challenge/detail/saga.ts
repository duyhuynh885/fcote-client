import { call, put, fork, takeEvery, all } from 'redux-saga/effects'
import {
  ViewDetailChallengeActionType,
  ViewDetailChallengeRequestAction,
  ViewDetailChallengeResponse,
} from './type'
import { hideLoaderAction, showLoaderAction } from '../../layout/loader/action'
import requestFailure from '../../../utils/onFailure'
import { handleError } from '../../../utils/handleError'
import history from '../../../configs/routing/history'
import challengeApi from '../../../services/challengeApi'

/**
 * Saga for get detail challenge
 *
 * Version 1.0
 *
 * Date: 27-07-2022
 *
 * Copyright
 *
 * Modification Logs:
 * DATE               AUTHOR          DESCRIPTION
 * -----------------------------------------------------------------------
 * 27-07-2022         DuyHV           Create
 */

/**
 * ViewDetailChallenge flow generator function
 * @param payload ViewDetailChallengeRequestPayload
 */
function* viewDetailChallengeFlow({ id }: ViewDetailChallengeRequestAction) {
  try {
    yield put(showLoaderAction())
    const data: ViewDetailChallengeResponse = yield call(challengeApi.getDetailChallenge, {
      id,
    })
    yield put({
      type: ViewDetailChallengeActionType.VIEW_DETAIL_CHALLENGE_SUCCESS,
      ...data,
    })
    history.push('/challenge')
    yield put(hideLoaderAction())
  } catch (error) {
    yield call(
      requestFailure,
      ViewDetailChallengeActionType.VIEW_DETAIL_CHALLENGE_ERROR,
      handleError(error),
    )
  }
}

/**
 * ViewDetailChallenge watcher
 */
function* viewDetailChallengeWatcher() {
  yield takeEvery(
    ViewDetailChallengeActionType.VIEW_DETAIL_CHALLENGE_REQUESTING,
    viewDetailChallengeFlow,
  )
}

export default function* viewDetailChallengeSaga() {
  yield all([fork(viewDetailChallengeWatcher)])
}
