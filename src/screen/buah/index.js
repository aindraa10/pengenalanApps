import React from 'react';
import {View, Text} from 'react-native';
import {Carous, Container} from '../../component';
import { dataBuah } from '../../dummy';

const Buah = () => {
  return (
      <Container>
      <Carous data={dataBuah}/>
      </Container>
  );
};

export default Buah;
