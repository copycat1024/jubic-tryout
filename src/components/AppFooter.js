// @flow

import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import './../css/AppFooter.css'

import { chooseBucket } from './../actions/bucket'
import { fetchBucketIfNeeded } from './../actions/request'

import type { bucketType } from './../actions/bucket'
import bucketConfig from './../bucketConfig'
import type { applicationState } from './../reducers'
import FooterButton from './FooterButton'

type Props = {
  bucket?: bucketType,
  onButtonClick: (string) => mixed
}

class AppFooter extends PureComponent<Props> {
  render () {
    const { bucket, onButtonClick } = this.props
    return (
      <div className='App-footer'>
        {
          Object.keys(bucketConfig).map((key, index) =>
            <FooterButton
              key={key}
              text={bucketConfig[key].name}
              active={bucket === key}
              onClick={() => {
                onButtonClick(key)
              }}
            />
          )
        }
      </div>
    )
  }
}

const mapStateToProps = (state: applicationState) => ({
  bucket: state.bucket
})

const mapDispatchToProps = dispatch => ({
  onButtonClick: key => {
    dispatch(fetchBucketIfNeeded(key))
      .then(() => dispatch(chooseBucket(key)))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppFooter)
