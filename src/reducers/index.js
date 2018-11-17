// @flow

import { combineReducers } from 'redux'
import data from './data'
import bucketSelect from './bucketSelect'
import type { dataState } from './data'
import type { bucketState } from './bucketSelect'

export type applicationState = {
  data: dataState,
  bucket: bucketState
}

const reducers = {
  data,
  bucket: bucketSelect
}
export default combineReducers(reducers)
