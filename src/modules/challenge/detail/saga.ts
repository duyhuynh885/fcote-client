import { call, put, fork, takeEvery, all } from 'redux-saga/effects'
import {
  ViewDetailChallengeActionType,
  ViewDetailChallengeRequestAction,
  ViewDetailChallengeResponse,
} from './type'
import requestFailure from '../../../utils/requestFailure'
import { handleError } from '../../../utils/handleError'
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
    const data: ViewDetailChallengeResponse = yield call(challengeApi.getDetailChallenge, {
      id,
    })
    yield put({
      type: ViewDetailChallengeActionType.VIEW_DETAIL_CHALLENGE_SUCCESS,
      ...data,
    })
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
