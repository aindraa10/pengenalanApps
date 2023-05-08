import React from 'react';
import {Image} from 'react-native';

const index = props => {
  if (props.local) {
    return <Image source={props.path} style={props.style} />;
  } else {
    return <Image source={{uri: props.uri}} style={props.style} />;
  }
};

export default index;
