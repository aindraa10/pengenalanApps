import {Dimensions, PixelRatio, Platform} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const devicePlatform = Platform.OS === 'ios' ? 'ios' : 'android';

const widthScale = value =>
  PixelRatio.roundToNearestPixel((screenWidth * value) / 100);
const heightScale = value =>
  PixelRatio.roundToNearestPixel((screenHeight * value) / 100);

const platformScale = (value1, value2) => {
  if (Platform.OS === 'ios') {
    return value1;
  } else {
    return value2;
  }
};

const normalize = size => {
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(size));
  } else {
    if (PixelRatio >= 3) {
      return Math.round(PixelRatio.roundToNearestPixel(size) - 1);
    } else {
      return size;
    }
  }
};

export default {
  devicePlatform,
  widthScale,
  heightScale,
  platformScale,
  screenWidth,
  screenHeight,
  normalize,
};
