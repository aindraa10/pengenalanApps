import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {
  View,
  FlatList,
  TouchableOpacity,
  Text,
  ImageBackground,
  ToastAndroid,
  ActivityIndicator,
} from 'react-native';
import {Container, Icon, BgImage} from '../../component';
import {data} from './data';
import styles from './styles';
import {BASE_URL, endpoints} from '../../config';

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
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);

  const fetchCategories = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${BASE_URL}${endpoints.categories}`);
      const result = await response.json();

      if (response.ok) {
        setCategories(result.data);
      }
    } catch (error) {
      ToastAndroid.show('Terjadi kesalahan', 3000);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  const factoryCategories = useMemo(() => {
    if (categories.length) {
      return data.map(item => {
        const findID = categories.find(
          category =>
            category.attributes.name.toLowerCase() === item.title.toLowerCase(),
        );
        return {
          id: findID.id,
          ...item,
        };
      });
    }

    return [];
  }, [categories]);

  const onPressCard = useCallback(
    item => {
      navigation.navigate(item.route, {
        categoryID: item.id,
      });
    },
    [navigation],
  );

  const renderItem = useCallback(
    ({item, index}) => {
      if (item.empty === true) {
        return <View style={[styles.item, styles.itemInvisible]} key={index} />;
      }
      return (
        <TouchableOpacity
          key={item.key}
          style={styles.item}
          onPress={() => onPressCard(item)}>
          {item.ico}
          <Text>{item.title}</Text>
        </TouchableOpacity>
      );
    },
    [onPressCard],
  );

  const memoizeRenderContent = useMemo(() => {
    if (loading || !factoryCategories.length) {
      return <ActivityIndicator color="blue" size="large" />;
    }

    return (
      <React.Fragment>
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
          data={formatData(factoryCategories, numColumns)}
          renderItem={renderItem}
          numColumns={numColumns}
          keyExtractor={(item, index) => index.toString()}
        />
      </React.Fragment>
    );
  }, [renderItem, factoryCategories, loading]);

  return (
    <Container>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        {memoizeRenderContent}
      </ImageBackground>
    </Container>
  );
};

export default Dashboard;
