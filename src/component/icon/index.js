import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import Octicons from 'react-native-vector-icons/Octicons'

const index = props => {
  switch (props.type) {
    case 'fontawesome':
      return <FontAwesome name={props.name} size={props.size} />;
    case 'fontawesome5':
      return <FontAwesome5 name={props.name} size={props.size} />;
    case 'antdesign':
      return <AntDesign name={props.name} size={props.size} />;
    case 'ionicons':
      return <Ionicons name={props.name} size={props.size} />;
    case 'material':
      return <MaterialIcons name={props.name} size={props.size} />;
    case 'materialcommunity':
      return <MaterialCommunityIcons name={props.name} size={props.size} />;
    case 'entypo':
      return <EntypoIcon name={props.name} size={props.size} />;
    case 'octicons':
      return <Octicons name={props.name} size={props.size} />;
    default:
      return <React.Fragment />;
  }
};

export default index;
