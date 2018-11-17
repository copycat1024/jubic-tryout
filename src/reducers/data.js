// @flow

import { RECEIVE_BUCKET } from './../actions/request'
import type { receiveAction } from './../actions/request'
import type { bucketType } from './../actions/bucket'

export type dataItem = { [string]: number }
export type dataState = { [?bucketType]: ?dataItem }

function dataDefault ():dataState {
  return {
    'day': null,
    'week': null
  }
}

const data = function (state: dataState = dataDefault(), action: receiveAction): dataState {
  switch (action.type) {
    case RECEIVE_BUCKET:
      // deep copy
      // ~ let newState = JSON.parse(JSON.stringify(state))
      // ~ newState[action.bucket] = action.data
      // ~ return newState
      return { ...state, [action.bucket]: action.data }
    default:
      return state
  }
}

export default data
