import { all, call, fork, put, takeEvery } from 'redux-saga/effects'
import imageApi from '../../../services/imageApi'
import { handleError } from '../../../utils/handleError'
import requestFailure from '../../../utils/requestFailure'
import { UploadImageActionType, UploadImageRequestAction, UploadImageResponse } from './type'

/**
 * Saga for uploadImage
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
 * UploadImage flow generator function
 * @param payload UploadImageRequestPayload
 */
function* uploadImageFlow({ file }: UploadImageRequestAction) {
  try {
    const data: UploadImageResponse = yield call(imageApi.uploadImage, { file })
    yield put({ type: UploadImageActionType.UPLOAD_IMAGE_SUCCESS, ...data })
  } catch (error) {
    yield call(requestFailure, UploadImageActionType.UPLOAD_IMAGE_ERROR, handleError(error))
  }
}

/**
 * UploadImage watcher
 */
function* uploadImageWatcher() {
  yield takeEvery(UploadImageActionType.UPLOAD_IMAGE_REQUESTING, uploadImageFlow)
}

export default function* uploadImageSaga() {
  yield all([fork(uploadImageWatcher)])
}
