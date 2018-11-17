// @flow

import fetch from 'cross-fetch'
import type { Dispatch } from 'redux'

import bucketConfig from './../bucketConfig'
import type { bucketType } from './bucket'
import type { applicationState } from './../reducers'
import type { dataItem } from './../reducers/data'

export const REQUEST_BUCKET = 'REQUEST_BUCKET'
export type requestAction = {
  type: 'REQUEST_BUCKET' | '',
  bucket: bucketType
}
const requestBucket = (bucket: bucketType):requestAction => ({
  type: REQUEST_BUCKET,
  bucket
})

export const RECEIVE_BUCKET = 'RECEIVE_BUCKET'
export type receiveAction = {
  type: 'RECEIVE_BUCKET' | '',
  bucket: bucketType,
  data: dataItem
}
const receiveBucket = (bucket: bucketType, data: dataItem):receiveAction => ({
  type: RECEIVE_BUCKET,
  bucket,
  data
})

// TODO: better error handling
function fetchBucket (bucket: bucketType) {
  return dispatch => {
    dispatch(requestBucket(bucket))
    let url = bucketConfig[bucket].url
    return fetch(url)
      .then(response => response.json())
      .then((json: dataItem) => {
        dispatch(receiveBucket(bucket, json))
      }, err => {
        console.log(err)
      })
  }
}

function shouldFetchBucket (state: applicationState, bucket: bucketType) {
  const bucketData = state.data[bucket]
  if (!bucketData) {
    return true
  } else {
    return false
  }
}

export function fetchBucketIfNeeded (bucket: bucketType) {
  return (dispatch: Dispatch, getState: () => applicationState) => {
    if (shouldFetchBucket(getState(), bucket)) {
      return dispatch(fetchBucket(bucket))
    } else {
      return Promise.resolve()
    }
  }
}
