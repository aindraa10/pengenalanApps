import React from 'react'
import { View, Text } from 'react-native'
import { Card, Carous } from '../../component'
// import { dataHuruf } from '../../Dummy/Abc'

const Huruf = props => {
  const { navigation, data } = props
  return (
    <View>
      <Carous/>
      {/* <Text>ABC</Text> */}
    </View>
  )
}

export default Huruf
