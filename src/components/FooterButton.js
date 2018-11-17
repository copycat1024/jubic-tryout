// @flow

import React, { PureComponent } from 'react'
import './../css/FooterButton.css'

type Callback = () => mixed

type Props = {
  text: string,
  active: boolean,
  onClick: Callback
}

class Card extends PureComponent<Props> {
  static defaultProps = {
    active: false
  }

  render () {
    const { active, text, onClick } = this.props
    return (
      <div className='btn-footer'>
        <div
          className={`btn-footer-inner block-text ${active ? 'btn-footer-active' : ''}`}
          onClick={onClick}
        >
          <p>{text}</p>
        </div>
      </div>
    )
  }
}

export default Card
