import React from 'react';
import {View, Text} from 'react-native';
import {Carous} from '../../component';

const buah_0 = require('../../../assets/buah/banana.png');
const buah_1 = require('../../../assets/buah/grape.png');
const buah_2 = require('../../../assets/buah/jeruk.png');
const buah_3 = require('../../../assets/buah/mangga.png');
const buah_4 = require('../../../assets/buah/unnamed.png');

const buahItems = [buah_0, buah_1, buah_2, buah_3, buah_4];

const Buah = () => {
  return (
    <View>
      <Carous />
      {/* <Text>BUAH</Text> */}
    </View>
  );
};

export default Buah;
