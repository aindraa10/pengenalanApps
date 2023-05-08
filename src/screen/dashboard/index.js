import React from 'react'
import { View, FlatList, TouchableOpacity, Text } from 'react-native';
import { Container, Icon } from '../../component'
import { data } from './data'
import styles from './styles'

const formatData = ( data, numColumns ) => {
  const numberOfFullRows = Math.floor( data.length / numColumns );

  let numberOfElementsLastRow = data.length - numberOfFullRows * numColumns;
  while (
    numberOfElementsLastRow !== numColumns &&
    numberOfElementsLastRow !== 0
  ) {
    data.push( { key: `blank-${ numberOfElementsLastRow }`, empty: true } );
    numberOfElementsLastRow++;
  }

  return data;
};

const Dashboard = props => {
  const { navigation } = props;
  const numColumns = 2;
  const renderItem = ( { item, index } ) => {
    if ( item.empty === true ) {
      return <View style={ [ styles.item, styles.itemInvisible ] } key={ index } />;
    }
    return (
      <TouchableOpacity
        key={ item.key }
        style={ styles.item }
        onPress={ () => onPressCard( item.route ) }>
        { item.ico }
        <Text>{ item.title }</Text>
      </TouchableOpacity>
    );
  };
  const onPressCard = route => {
    navigation.navigate( route );
  };
  return (
    <Container>
      <View style={ { alignItems: 'center', marginVertical: 100 } }>
        <Text style={ { fontSize: 30, fontWeight: 'bold', textAlign: 'center' } }>PENGENALAN</Text>
        <Text style={ { fontSize: 25, fontWeight: 'bold', textAlign: 'center' } }>Huruf, Angka, Buah,dan Hewan</Text>
        <Text style={ { fontSize: 50, fontWeight: 'bold', textAlign: 'center' } }>PG-RA AL-AMANAH</Text>
      </View>
      <FlatList
        data={ formatData( data, numColumns ) }
        renderItem={ renderItem }
        numColumns={ numColumns }
        keyExtractor={ ( item, index ) => index.toString() }
      />
    </Container>
  );

  // return (
  // <View style={ { alignItems: 'center' } }>
  //   <Text style={ { fontSize: 50, fontWeight: 'bold', textAlign: 'center' } }> PG-RA AL-AMANAH </Text>
  //   <View style={ { flexDirection: "row", padding: 10 } }>
  //     <TouchableOpacity onPress={ Abc }>
  //       <View style={ {
  //         backgroundColor: 'orange',
  //         width: 150, height: 150,
  //         borderRadius: 20,
  //         margin: 20,
  //         alignItems: 'center',
  //         justifyContent: 'center'

  //       } }>
  //         <Text style={ { fontSize: 40 } }>ABC</Text>
  //       </View>
  //     </TouchableOpacity>
  //     <TouchableOpacity>
  //       <View style={ {
  //         backgroundColor: 'blue',
  //         width: 150, height: 150,
  //         borderRadius: 20,
  //         margin: 20,
  //         alignItems: 'center',
  //         justifyContent: 'center'

  //       } }>
  //         <Text style={ { fontSize: 40, } }>123</Text>
  //       </View>
  //     </TouchableOpacity>
  //   </View>
  //   <View style={ { flexDirection: "row", padding: 10 } }>
  //     <TouchableOpacity>
  //       <View style={ {
  //         backgroundColor: 'green',
  //         width: 150, height: 150,
  //         borderRadius: 20,
  //         margin: 20,
  //         alignItems: 'center',
  //         justifyContent: 'center'

  //       } }>
  //         <Text style={ { fontSize: 25 } }>HEWAN</Text>
  //       </View>
  //     </TouchableOpacity>
  //     <TouchableOpacity>
  //       <View style={ {
  //         backgroundColor: 'red',
  //         width: 150, height: 150,
  //         borderRadius: 20,
  //         margin: 20,
  //         alignItems: 'center',
  //         justifyContent: 'center'

  //       } }>
  //         <Text style={ { fontSize: 25 } }>BUAH</Text>
  //       </View>
  //     </TouchableOpacity>
  //   </View>
  // </View>
  // )
}

export default Dashboard
