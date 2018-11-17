// @flow

import React, { PureComponent } from 'react'
import Card from './Card'
import CardHolder from './CardHolder'
import InfoCardInner from './InfoCardInner'

type Props = {
}

class AppBody extends PureComponent<Props> {
  render () {
    return (
      <CardHolder styleName='App-body'>
        <Card gridLeft={1}>
          <InfoCardInner
            icon='Lightbulb'
            title='Card 1'
            dataKey='card1'
            unit='kW'
          />
        </Card>
        <Card gridLeft={2}>
          <InfoCardInner
            icon='Car'
            title='Card 2'
            dataKey='card2'
            unit='hours'
          />
        </Card>
        <Card gridLeft={3}>
          <InfoCardInner
            icon='Household'
            title='Card 3'
            dataKey='card3'
            unit='households'
          />
        </Card>
        <Card gridLeft={1} gridTop={2}>
          <InfoCardInner
            icon='Tree'
            title='Card 4'
            dataKey='card3'
            unit='tons'
          />
        </Card>
        <Card gridLeft={2} gridTop={2} gridWidth={2} />
      </CardHolder>
    )
  }
}

export default AppBody
