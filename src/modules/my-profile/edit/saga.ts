import { all, call, fork, put, takeEvery } from 'redux-saga/effects'
import imageApi from '../../../services/imageApi'
import profileApi from '../../../services/profileApi'
import { handleError } from '../../../utils/handleError'
import requestFailure from '../../../utils/requestFailure'
import { hideLoaderAction, showLoaderAction } from '../../layout/loader/action'
import {
  EditMyProfileActionType,
  EditMyProfileRequestAction,
  EditMyProfileSuccessResponse,
} from './type'

function* editMyProfileFlow({
  avatar,
  firstName,
  lastName,
  organization,
  city,
  country,
  phone,
  gender,
}: EditMyProfileRequestAction) {
  try {
    yield put(showLoaderAction())
    if (typeof avatar !== 'undefined' || avatar) {
      yield call(imageApi.uploadImage, {
        file: avatar,
      })
    }
    const data: EditMyProfileSuccessResponse = yield call(profileApi.putEditMyProfileApi, {
      firstName,
      lastName,
      organization,
      city,
      country,
      phone,
      gender,
    })

    yield put({
      type: EditMyProfileActionType.EDIT_MY_PROFILE_SUCCESS,
      ...data,
    })
    yield put(hideLoaderAction())
  } catch (error) {
    yield call(requestFailure, EditMyProfileActionType.EDIT_MY_PROFILE_ERROR, handleError(error))
  }
}

function* editMyProfileWatcher() {
  yield takeEvery(EditMyProfileActionType.EDIT_MY_PROFILE_REQUESTING, editMyProfileFlow)
}

export default function* editMyProfileSaga() {
  yield all([fork(editMyProfileWatcher)])
}
