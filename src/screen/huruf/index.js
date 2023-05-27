import React from 'react'
import { View, Text } from 'react-native'
import { Carous, Container } from '../../component'
import { dataHuruf } from '../../dummy'

const Huruf = () => {
  return (
    <Container>
      <Carous data={dataHuruf}/>
    </Container>
  )
}

export default Huruf
