import { handleError } from '../../../utils/handleError'
import {
  EditMyProfileActionType,
  EditMyProfileRequestAction,
  EditMyProfileSuccessResponse,
} from './type'
import { all, call, fork, put, takeEvery } from 'redux-saga/effects'
import { hideLoaderAction, showLoaderAction } from '../../layout/loader/action'
import profileApi from '../../../services/profileApi'
import requestFailure from '../../../utils/requestFailure'

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
    const data: EditMyProfileSuccessResponse = yield call(profileApi.fetchEditMyProfileApi, {
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
