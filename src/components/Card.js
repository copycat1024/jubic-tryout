// @flow

import React, { PureComponent } from 'react'
import type { Node } from 'react'
import './../css/Card.css'

type Props = {
  gridTop: number,
  gridHeight: number,
  gridLeft: number,
  gridWidth: number,
  children?: Node
}

class Card extends PureComponent<Props> {
  static defaultProps = {
    gridTop: 1,
    gridHeight: 1,
    gridLeft: 1,
    gridWidth: 1
  }

  render () {
    const { gridTop, gridHeight, gridLeft, gridWidth, children } = this.props

    let styleObj = {
      gridRowStart: gridTop,
      gridRowEnd: gridTop + gridHeight,
      gridColumnStart: gridLeft,
      gridColumnEnd: gridLeft + gridWidth
    }

    return (
      <div className='block-card' style={styleObj}>
        {children}
      </div>
    )
  }
}

export default Card
