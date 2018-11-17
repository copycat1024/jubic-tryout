// @flow

import { SWITCH_BUCKET } from './../actions/bucket'
import type { bucketAction, bucketType } from './../actions/bucket'

export type bucketState = bucketType
export const bucketSelectDefault = ():bucketState => 'day'

const bucketSelect = function (state:bucketState = bucketSelectDefault(), action: bucketAction):bucketState {
  switch (action.type) {
    case SWITCH_BUCKET:
      return action.bucket
    default:
      return state
  }
}

export default bucketSelect
