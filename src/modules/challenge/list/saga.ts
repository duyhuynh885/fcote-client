import { handleError } from './../../../utils/handleError'
import {
  ViewListChallengeActionType,
  ViewListChallengeRequestAction,
  ViewListChallengeSuccessReponse,
} from './type'
import { all, call, fork, put, takeEvery } from 'redux-saga/effects'
import { hideLoaderAction, showLoaderAction } from '../../layout/actions/loaderAction'
import challengeApi from '../../../services/challengeApi'
import requestFailure from '../../../utils/onFailure'
import { ViewListGroupRequestAction, ViewListGroupResponse } from '../../group/list/type'
import groupApi from '../../../services/groupApi'

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
    yield put(showLoaderAction())
    const data: ViewListChallengeSuccessReponse = yield call(challengeApi.fetchChallengeApi, {
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
    yield put(hideLoaderAction())
  } catch (error) {
    yield call(
      requestFailure,
      ViewListChallengeActionType.VIEW_LIST_CHALLENGE_ERROR,
      handleError(error),
    )
  }
}

function* viewListGroupFlow({ pageSize, pageNumber }: ViewListGroupRequestAction) {
  try {
    yield put(showLoaderAction())
    const data: ViewListGroupResponse = yield call(groupApi.fetchListGroup, {
      pageSize,
      pageNumber,
    })
    console.log('SAGA data group 3 ', data)
    yield put({ type: ViewListChallengeActionType.VIEW_LIST_GROUPID_SUCCESS, ...data })
    yield put(hideLoaderAction())
  } catch (error) {
    yield call(
      requestFailure,
      ViewListChallengeActionType.VIEW_LIST_GROUPID_ERROR,
      handleError(error),
    )
  }
}

function* viewListChallengeWatcher() {
  yield takeEvery(ViewListChallengeActionType.VIEW_LIST_CHALLENGE_REQUESTING, viewListChallengeFlow)
  yield takeEvery(ViewListChallengeActionType.VIEW_LIST_GROUPID_REQUESTING, viewListGroupFlow)
}
export default function* viewListChallengeSaga() {
  yield all([fork(viewListChallengeWatcher)])
}
