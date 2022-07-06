import { AxiosResponse } from 'axios'
import { call, fork, take, cancel } from 'redux-saga/effects'

function* request({
  type,
  service,
  params = {},
  redirect = null,
  callback = null,
  onSuccess = null,
  onFailure = null,
  normalizer = null,
}: any) {
  const response: AxiosResponse = yield call(service, params)

  // if (!response) {
  //   // TODO: Handle server communication error
  // } else {
  //   const { status, data } = response
  //   if ([200, 201].includes(status)) {
  //     // If request call is successful
  //     const normalizedData = normalizer ? normalizer(data) : data
  //     yield call(requestSuccess, {
  //       type,
  //       data: normalizedData,
  //       redirect,
  //       callback,
  //       onSuccess,
  //     })
  //   } else {
  //     // If request call fails
  //     yield call(requestFailure, { type, data, status, onFailure })
  //   }
  // }
  // TODO: Handle any loader ends
}
