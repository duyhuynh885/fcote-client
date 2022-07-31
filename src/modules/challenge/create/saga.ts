import { call, put, fork, takeEvery, all } from 'redux-saga/effects'
import {
  CreateChallengeActionType,
  CreateChallengeRequestAction,
  CreateChallengeResponse,
} from './type'
import { hideLoaderAction, showLoaderAction } from '../../layout/loader/action'
import requestFailure from '../../../utils/requestFailure'
import { handleError } from '../../../utils/handleError'
import history from '../../../configs/routing/history'
import challengeApi from '../../../services/challengeApi'
import { showToastAction } from '../../layout/toast/toastAction'
import { swapMessage } from '../../../utils/helper'

/**
 * Saga for fetch create challenge
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
 * CreateChallenge flow generator function
 * @param payload CreateChallengeRequestPayload
 */
function* CreateChallengeFlow({
  title,
  description,
  image,
  groupId,
  startAt,
  endAt,
  element,
}: CreateChallengeRequestAction) {
  try {
    yield put(showLoaderAction())
    const data: CreateChallengeResponse = yield call(challengeApi.createChallenge, {
      title,
      description,
      image,
      groupId,
      startAt,
      endAt,
      element,
    })
    yield put({
      type: CreateChallengeActionType.CREATE_CHALLENGE_SUCCESS,
      ...data,
    })
    history.push('/challenge')
    yield put(hideLoaderAction())
    yield put(
      showToastAction(
        'success',
        swapMessage('Create challenge successful', 'Tạo thử thách thành công'),
      ),
    )
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
