import React from 'react'
import { View, Text } from 'react-native'
import {Carous} from '../../component'
import { dataAngka } from '../../dummy'

const Angka = props => {
  const {data}= props
  return (
    <View>
      <Carous/>
      {/* <Text>ANGKA</Text> */}
    </View>
  )
}

export default Angka
