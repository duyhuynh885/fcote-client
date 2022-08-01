import { all, call, fork, put, takeEvery } from 'redux-saga/effects'
import imageApi from '../../../services/imageApi'
import { handleError } from '../../../utils/handleError'
import requestFailure from '../../../utils/requestFailure'
import { GetImageActionType, GetImageRequestAction, GetImageResponse } from './type'

/**
 * Saga for getImage
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
 * GetImage flow generator function
 * @param payload GetImageRequestPayload
 */
function* getImageFlow({ path }: GetImageRequestAction) {
  try {
    const data: GetImageResponse = yield call(imageApi.getImage, { path })
    yield put({ type: GetImageActionType.GET_IMAGE_SUCCESS, ...data })
  } catch (error) {
    yield call(requestFailure, GetImageActionType.GET_IMAGE_ERROR, handleError(error))
  }
}

/**
 * GetImage watcher
 */
function* getImageWatcher() {
  yield takeEvery(GetImageActionType.GET_IMAGE_REQUESTING, getImageFlow)
}

export default function* getImageSaga() {
  yield all([fork(getImageWatcher)])
}
