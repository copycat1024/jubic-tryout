// @flow

import React, { PureComponent } from 'react'
import './../css/InfoCardInner.css'
import CardIcons from './../resource/CardIcons.svg'
import { connect } from 'react-redux'
import type { applicationState } from './../reducers'

type Props = {
  dataKey: string,
  title: string,
  icon: string,
  value: number,
  unit: string
}

class InfoCardInner extends PureComponent<Props> {
  render () {
    const { title, icon, value, unit } = this.props
    return (
      <div className='block-info'>
        <div className='block-info-title block-text'>
          <h1>{title}</h1>
        </div>
        <div className='block-info-decor' />
        <svg className='block-info-icon'>
          <use href={`${CardIcons}#${icon}`} />
        </svg>
        <div className='block-info-text block-text'>
          <h1>{`${value} ${unit}`}</h1>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state: applicationState, ownState: Props) => {
  let bucketData = state.data[state.bucket]
  if (bucketData) {
    return { value: bucketData[ownState.dataKey] }
  } else {
    return { value: NaN }
  }
}

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InfoCardInner)
