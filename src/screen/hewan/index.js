import React from 'react';
import {View, Text} from 'react-native';
import {Carous} from '../../component';

const hewan_0 = require('../../../assets/hewan/ayam.png');
const hewan_1 = require('../../../assets/hewan/gajah.png');
const hewan_2 = require('../../../assets/hewan/koala.png');

const hewanItems = [hewan_0, hewan_1, hewan_2];

const Hewan = () => {
  return (
    <View>
      <Carous />
      {/* <Text>HEWAN</Text> */}
    </View>
  );
};

export default Hewan;
