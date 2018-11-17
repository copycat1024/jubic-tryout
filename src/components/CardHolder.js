// @flow

import React, { PureComponent } from 'react'
import type { Node } from 'react'
import './../css/CardHolder.css'

type Props = {
  styleName: string,
  gridWidth: number,
  gridHeight: number,
  children: Node
}

class CardHolder extends PureComponent<Props> {
  static defaultProps = {
    gridHeight: 2,
    gridWidth: 3
  }

  render () {
    let styleObj = {
      gridTemplateColumns: `repeat(${this.props.gridWidth}, 1fr)`,
      gridTemplateRows: `repeat(${this.props.gridHeight}, 1fr)`
    }
    return (
      <div className={'CardHolder ' + this.props.styleName} style={styleObj}>
        {this.props.children}
      </div>
    )
  }
}

export default CardHolder
