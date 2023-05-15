import { View, ImageBackground } from 'react-native'
import React from 'react'
import styles from './styles'

const image = require('../../../assets/bgTaman.jpg')

const index = props => {
    if (props.local) {
        return <ImageBackground source={props.path} style={props.style} />;
      } else {
        return <ImageBackground source={{uri: props.uri}} style={props.style} />;
      }

//     return (
//     <ImageBackground source={props.path} resizeMode="cover" style={styles.image}>
//     </ImageBackground>
//   )
}

export default index