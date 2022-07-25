import { handleError } from '../../../utils/handleError'
import {
  EditMyProfileActionType,
  EditMyProfileRequestAction,
  EditMyProfileSuccessReponse,
} from './type'
import { all, call, fork, put, takeEvery } from 'redux-saga/effects'
import { hideLoaderAction, showLoaderAction } from '../../layout/actions/loaderAction'
import profileApi from '../../../services/profileApi'
import requestFailure from '../../../utils/onFailure'

function* editMyProfileFlow({
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
    const data: EditMyProfileSuccessReponse = yield call(profileApi.fetchEditMyProfileApi, {
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

function* editMyProfileWather() {
  yield takeEvery(EditMyProfileActionType.EDIT_MY_PROFILE_REQUESTING, editMyProfileFlow)
}

export default function* editMyProfileSaga() {
  yield all([fork(editMyProfileWather)])
}
