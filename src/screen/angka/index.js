import React from 'react';
import {View, Text} from 'react-native';
import {Carous, Container} from '../../component';
import {dataAngka} from '../../dummy';


const Angka = () => {
  return (
    <Container>
      <Carous data={dataAngka} />
    </Container>
  );
};

export default Angka;
