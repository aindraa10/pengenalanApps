import React from 'react';
import {View, Text} from 'react-native';
import {Carous, Container} from '../../component';
import { dataHewan } from '../../dummy';

const Hewan = () => {
  return (
    <Container>
      <Carous data={dataHewan}/>
    </Container>
  );
};

export default Hewan;
