// @flow

import React, { PureComponent } from 'react'
import './../css/App.css'
import AppBody from './AppBody'
import AppFooter from './AppFooter'

type Props = {
}

class App extends PureComponent<Props> {
  render () {
    return (
      <div className='App'>
        <header className='App-header block-text'>
          <h1 className='App-title'>Company name</h1>
        </header>
        <AppBody />
        <AppFooter />
      </div>
    )
  }
}

export default App
