// @flow

// import bucketConfig from './../bucketConfig'

export const SWITCH_BUCKET = 'SWITCH_BUCKET'

// TODO: fix this
// export type bucketType = $Keys<typeof bucketConfig>
export type bucketType = 'day' | 'week' | 'month' | 'year'

export type bucketAction = {
  type: 'SWITCH_BUCKET' | '',
  bucket: bucketType
}

export const chooseBucket = (bucket: bucketType):bucketAction => ({
  type: SWITCH_BUCKET,
  bucket
})
