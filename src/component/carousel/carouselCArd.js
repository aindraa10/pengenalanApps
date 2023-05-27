import React from 'react';
import {View, Text, Dimensions, FlatList} from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {Icon} from '..';

const dataAngka = [
  {
    title: 'Nol',
    imgUrl: require('../../../assets/angka/0.png'),
  },
  {
    title: 'Satu',
    imgUrl: require('../../../assets/angka/1.png'),
  },
  {
    title: 'Dua',
    imgUrl: require('../../../assets/angka/2.png'),
  },
  {
    title: 'Tiga',
    imgUrl: require('../../../assets/angka/3.png'),
  },
  {
    title: 'Empat',
    imgUrl: require('../../../assets/angka/4.png'),
  },
  {
    title: 'Lima',
    imgUrl: require('../../../assets/angka/5.png'),
  },
];

// TOLONG DISAMAKAN
const angka_0 = require('../../../assets/angka/0.png');
const angka_1 = require('../../../assets/angka/1.png');
const angka_2 = require('../../../assets/angka/2.png');
const angka_3 = require('../../../assets/angka/3.png');
const angka_4 = require('../../../assets/angka/4.png');

const angkaItems = [angka_0, angka_1, angka_2, angka_3, angka_4];

const buah_0 = require('../../../assets/buah/banana.png');
const buah_1 = require('../../../assets/buah/grape.png');
const buah_2 = require('../../../assets/buah/jeruk.png');
const buah_3 = require('../../../assets/buah/mangga.png');
const buah_4 = require('../../../assets/buah/unnamed.png');

const buahItems = [buah_0, buah_1, buah_2, buah_3, buah_4];

const hewan_0 = require('../../../assets/hewan/ayam.png');
const hewan_1 = require('../../../assets/hewan/gajah.png');
const hewan_2 = require('../../../assets/hewan/koala.png');

const hewanItems = [hewan_0, hewan_1, hewan_2];

const colors = ['#fda282', '#fdba4e', '#800015', '#fdba4e', '#800015'];

const Card = props => {
  const WIDTH = PAGE_WIDTH / 1.5;
  const HEIGHT = PAGE_HEIGHT / 1.5;
  const {data, item, index, animationValue} = props;

  const cardStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      animationValue.value,
      [-0.1, 0, 1],
      [0.95, 1, 1],
      Extrapolate.CLAMP,
    );

    const translateX = interpolate(
      animationValue.value,
      [-1, -0.2, 0, 1],
      [0, WIDTH * 0.3, 0, 0],
    );

    const transform = {
      transform: [
        {scale},
        {translateX},
        {perspective: 200},
        {
          rotateY: `${interpolate(
            animationValue.value,
            [-1, 0, 0.4, 1],
            [30, 0, -25, -25],
            Extrapolate.CLAMP,
          )}deg`,
        },
      ],
    };

    return {
      ...withAnchorPoint(
        transform,
        {x: 0.5, y: 0.5},
        {width: WIDTH, height: HEIGHT},
      ),
    };
  }, [index]);

  const blockStyle = useAnimatedStyle(() => {
    const translateX = interpolate(
      animationValue.value,
      [-1, 0, 1],
      [0, 60, 60],
    );

    const translateY = interpolate(
      animationValue.value,
      [-1, 0, 1],
      [0, -40, -40],
    );

    const rotateZ = interpolate(animationValue.value, [-1, 0, 1], [0, 0, -25]);

    return {
      transform: [{translateX}, {translateY}, {rotateZ: `${rotateZ}deg`}],
    };
  }, [index]);

  return (
    // <View>
    // <FlatList
    // data={data}
    // initialNumToRender={initialNumToRender}
    // renderItem={({item, index})  => {
    // return(
    <Animated.View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      key={index}
      item={item}>
      <Text style={{fontSize: 40, color: 'red', fontWeight: 'bold'}}>ULAR</Text>

      <Animated.View
        style={[
          {
            backgroundColor: colors[index],
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 20,
            width: WIDTH,
            height: HEIGHT,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 8,
            },
            shadowOpacity: 0.44,
            shadowRadius: 10.32,
            marginBottom: 25,
            elevation: 16,
          },
          cardStyle,
        ]}
      />

      <Animated.Image
        source={hewanItems[index]}
        // source={item.Image}
        // source={ {
        //   uri: `${ config.url }public/product/${ item.image }`
        // } }
        style={[
          {
            width: WIDTH * 0.8,
            borderRadius: 16,
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            zIndex: 999,
          },
          blockStyle,
        ]}
        resizeMode={'contain'}
      />
      <Icon type="fontawesome5" name="play" size={40} />
    </Animated.View>
    // )
    // }
    // }

    // />
    // </View>
  );
};

export default Card;
