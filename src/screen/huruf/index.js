import React from 'react'
import { View, Text } from 'react-native'
import { Card } from '../../component'
// import { dataHuruf } from '../../Dummy/Abc'

const Huruf = props => {
  const { navigation, data } = props
  return (
    <View>
      {/* <Card data={ dataHuruf.dataHuruf } /> */}
      <Text>ABC</Text>
    </View>
  )
}

export default Huruf
