import { call, put, fork, takeEvery, all } from 'redux-saga/effects'
import { ViewListLanguageActionType, ViewListLanguageResponse } from './type'
import { hideLoaderAction, showLoaderAction } from '../../layout/loader/action'
import requestFailure from '../../../utils/requestFailure'
import { handleError } from '../../../utils/handleError'
import assignmentApi from '../../../services/assignmentApi'

/**
 * Saga for get languages
 *
 * Version 1.0
 *
 * Date: 26-07-2022
 *
 * Copyright
 *
 * Modification Logs:
 * DATE               AUTHOR          DESCRIPTION
 * -----------------------------------------------------------------------
 * 26-07-2022         DuyHV           Create
 */

/**
 * ViewListLanguage flow generator function
 * @param payload ViewListLanguageRequestPayload
 */
function* viewListLanguageFlow() {
  try {
    yield put(showLoaderAction())
    const data: ViewListLanguageResponse = yield call(assignmentApi.fetchListLanguage)
    yield put({
      type: ViewListLanguageActionType.VIEW_LIST_LANGUAGE_SUCCESS,
      ...data,
    })
    yield put(hideLoaderAction())
  } catch (error) {
    yield call(
      requestFailure,
      ViewListLanguageActionType.VIEW_LIST_LANGUAGE_ERROR,
      handleError(error),
    )
  }
}

/**
 * ViewListLanguage watcher
 */
function* viewListLanguageWatcher() {
  yield takeEvery(ViewListLanguageActionType.VIEW_LIST_LANGUAGE_REQUESTING, viewListLanguageFlow)
}

export default function* viewListLanguageSaga() {
  yield all([fork(viewListLanguageWatcher)])
}
