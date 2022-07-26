import { handleError } from './../../utils/handleError'
import { all, call, fork, put, takeEvery } from 'redux-saga/effects'
import requestFailure from '../../utils/onFailure'
import { hideLoaderAction, showLoaderAction } from '../layout/loader/action'
import { RankingActionType, RankingRequestAction, RankingResponse } from './type'
import rankingApi from '../../services/rankingApi'

/**
 * Saga for Ranking
 *
 * Version 1.0
 *
 * Date: 13-07-2022
 *
 * Copyright
 *
 * Modification Logs:
 * DATE               AUTHOR          DESCRIPTION
 * -----------------------------------------------------------------------
 * 13-07-2022         TuanLA           Create
 */
/**
 * @param  {RankingRequestPayload} payload
 */
function* rankingFlow(payload: RankingRequestAction) {
  try {
    yield put(showLoaderAction())
    const data: RankingResponse = yield call(rankingApi.fetchRanking, payload)
    yield put({ type: RankingActionType.RANKING_SUCCESS, ...data })
    yield put(hideLoaderAction())
  } catch (error) {
    yield call(requestFailure, RankingActionType.RANKING_ERROR, handleError(error))
  }
}

function* rankingWatcher() {
  yield takeEvery(RankingActionType.RANKING_REQUESTING, rankingFlow)
}

export default function* rankingSaga() {
  yield all([fork(rankingWatcher)])
}
