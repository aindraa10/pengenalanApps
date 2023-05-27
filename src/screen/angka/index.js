import React from 'react';
import {View, Text} from 'react-native';
import {Carous} from '../../component';
import {dataAngka} from '../../dummy';

const Angka = () => {
  return (
    <View>
      <Carous data={dataAngka} />
      {/* <Text>ANGKA</Text> */}
    </View>
  );
};

export default Angka;
