import { handleError } from './../../../utils/handleError'
import {
  ViewListChallengeActionType,
  ViewListChallengeRequestAction,
  ViewListChallengeSuccessResponse,
} from './type'
import { all, call, fork, put, takeEvery } from 'redux-saga/effects'
import challengeApi from '../../../services/challengeApi'
import requestFailure from '../../../utils/requestFailure'

/**
 * saga list challenge
 *
 * Version 1.0
 *
 * Date: 10-07-2022
 *
 * Copyright By HuyNT2711
 *
 * Modification Logs:
 * DATE             AUTHOR              DESCRIPTION
 * ------------------------------------------------
 * 10-07-2022      HuyNT2711           Create
 */

function* viewListChallengeFlow({
  typeData,
  searchBy,
  groupID,
  pageSize,
  pageNumber,
  username,
  status,
}: ViewListChallengeRequestAction) {
  try {
    const data: ViewListChallengeSuccessResponse = yield call(challengeApi.fetchChallengeApi, {
      typeData,
      searchBy,
      groupID,
      pageSize,
      pageNumber,
      username,
      status,
    })
    yield put({
      type: ViewListChallengeActionType.VIEW_LIST_CHALLENGE_SUCCESS,
      ...data,
    })
  } catch (error) {
    yield call(
      requestFailure,
      ViewListChallengeActionType.VIEW_LIST_CHALLENGE_ERROR,
      handleError(error),
    )
  }
}

function* viewListChallengeWatcher() {
  yield takeEvery(ViewListChallengeActionType.VIEW_LIST_CHALLENGE_REQUESTING, viewListChallengeFlow)
}

function* searchListChallengeWatcher() {
  yield takeEvery(
    ViewListChallengeActionType.UPDATE_FILTER_LIST_CHALLENGE_REQUEST,
    viewListChallengeFlow,
  )
}

export default function* viewListChallengeSaga() {
  yield all([fork(viewListChallengeWatcher), fork(searchListChallengeWatcher)])
}
