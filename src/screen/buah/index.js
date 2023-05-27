import React, {useCallback, useEffect, useState} from 'react';
import {View, Text, Button} from 'react-native';
import useSound from 'react-native-use-sound';

import {Carous} from '../../component';

const buah_0 = require('../../../assets/buah/banana.png');
const buah_1 = require('../../../assets/buah/grape.png');
const buah_2 = require('../../../assets/buah/jeruk.png');
const buah_3 = require('../../../assets/buah/mangga.png');
const buah_4 = require('../../../assets/buah/unnamed.png');

const domba =
  'https://fastupload.io/downloadC91F82CJ77YO7NV5S4VYF751ECS7OSPXZAPQW3ZKV8LZVO9GGF/qw1zeJ22VGXyn/wBc3vzdru1LDXD1/domba.mp3';
const buaya =
  'https://fastupload.io/downloadC91F82CJ77YO7NV5S4VYF751ECS7OSPXZAPQW3ZKV8LZVO9GGF/XkrzoqyyQmBOR/DtmQTGqOnGY3wUJ/buaya.mp3';

const listBuahAudio = [domba, buaya];

const buahItems = [buah_0, buah_1, buah_2, buah_3, buah_4];

const Buah = () => {
  const [activeCard, setActiveCard] = useState(0);

  const [play, pause, stop, data] = useSound(
    listBuahAudio[activeCard % listBuahAudio.length],
  );

  const handlePlay = useCallback(() => {
    play();
  }, [play]);

  const onSwipe = useCallback(
    index => {
      if (data.isPlaying) {
        data.sound.release();
      }
      if (activeCard !== index) {
        setActiveCard(index);
      }
    },
    [activeCard, data.isPlaying, data.sound],
  );

  useEffect(() => {
    handlePlay();
  }, [activeCard, handlePlay]);

  return (
    <View>
      <Carous getIndex={onSwipe} />
      {/* <Text>BUAH</Text> */}
    </View>
  );
};

export default Buah;
