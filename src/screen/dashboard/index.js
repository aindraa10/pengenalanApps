import React from 'react';
import {
  View,
  FlatList,
  TouchableOpacity,
  Text,
  ImageBackground,
} from 'react-native';
import {Container, Icon, BgImage} from '../../component';
import {data} from './data';
import styles from './styles';

const image = require('../../../assets/bgTaman.jpg');

const formatData = (data, numColumns) => {
  const numberOfFullRows = Math.floor(data.length / numColumns);

  let numberOfElementsLastRow = data.length - numberOfFullRows * numColumns;
  while (
    numberOfElementsLastRow !== numColumns &&
    numberOfElementsLastRow !== 0
  ) {
    data.push({key: `blank-${numberOfElementsLastRow}`, empty: true});
    numberOfElementsLastRow++;
  }

  return data;
};

const Dashboard = props => {
  const {navigation} = props;
  const numColumns = 2;
  const renderItem = ({item, index}) => {
    if (item.empty === true) {
      return <View style={[styles.item, styles.itemInvisible]} key={index} />;
    }
    return (
      <TouchableOpacity
        key={item.key}
        style={styles.item}
        onPress={() => onPressCard(item.route)}>
        {item.ico}
        <Text>{item.title}</Text>
      </TouchableOpacity>
    );
  };
  const onPressCard = route => {
    navigation.navigate(route);
  };
  return (
    <Container>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={{alignItems: 'center', marginVertical: 100}}>
          <Text style={{fontSize: 50, fontWeight: 'bold', textAlign: 'center'}}>
            PG-RA AL-AMANAH
          </Text>
          <Text style={{fontSize: 35, fontWeight: 'bold', textAlign: 'center'}}>
            PENGENALAN
          </Text>
          <Text style={{fontSize: 25, fontWeight: 'bold', textAlign: 'center'}}>
            HURUF, ANGKA, BUAH, DAN HEWAN
          </Text>
        </View>
        <FlatList
          data={formatData(data, numColumns)}
          renderItem={renderItem}
          numColumns={numColumns}
          keyExtractor={(item, index) => index.toString()}
        />
      </ImageBackground>
    </Container>
  );

};

export default Dashboard;
