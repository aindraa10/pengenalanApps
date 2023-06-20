import React, {useEffect, useState, useCallback, useMemo} from 'react';
import {ToastAndroid, ActivityIndicator} from 'react-native';
import {Carous, Container} from '../component';
import {BASE_URL, IMG_URL, endpoints} from '../config';

const dummy = ({route}) => {
  const [loading, setLoading] = useState(false);
  const [contents, setContents] = useState([]);
  
  const fetchCategories = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${BASE_URL}${endpoints.contents}${route.params.categoryID}&populate=*`,
      );
      const result = await response.json();

      if (response.ok) {
        const data = await Promise.all(
          result.data.map(item => {
            return {
              title: item.attributes.content_name,
              imgUrl: `${IMG_URL}${item.attributes.image.data.attributes.formats.thumbnail.url}`,
            };
          }),
        );
        setContents(data);
      }
    } catch (error) {
      ToastAndroid.show('Terjadi kesalahan', 3000);
    } finally {
      setLoading(false);
    }
  }, [route]);

  const memoizeRenderContent = useMemo(() => {
    if (contents.length && !loading) {
      return <Carous data={contents} />;
    }

    return <ActivityIndicator color="blue" size="large" />;
  }, [contents, loading]);
}

export default dummy










const dataAngka = [
  {
    title: 'NOL',
    imgUrl: require('../../assets/angka/0.png')
  },
  {
    title: 'SATU',
    imgUrl: require('../../assets/angka/1.png')
  },
  {
    title: 'DUA',
    imgUrl: require('../../assets/angka/2.png')
  },
  {
    title: 'TIGA',
    imgUrl: require('../../assets/angka/3.png')
  },
  {
    title: 'EMPAT',
    imgUrl: require('../../assets/angka/4.png')
  },
];

const dataBuah = [
  {
    title: 'PISANG',
    imgUrl: require('../../assets/buah/banana.png')
  },
  {
    title: 'ANGGUR',
    imgUrl: require('../../assets/buah/grape.png')
  },
  {
    title: 'JERUK',
    imgUrl: require('../../assets/buah/jeruk.png')
  },
  {
    title: 'MANGGA',
    imgUrl: require('../../assets/buah/mangga.png')
  },

];

const dataHuruf = [
  {
    title: 'NOL',
    imgUrl: require('../../assets/angka/0.png')
  },
  {
    title: 'SATU',
    imgUrl: require('../../assets/angka/1.png')
  },
  {
    title: 'DUA',
    imgUrl: require('../../assets/angka/2.png')
  },
  {
    title: 'TIGA',
    imgUrl: require('../../assets/angka/3.png')
  },
  {
    title: 'EMPAT',
    imgUrl: require('../../assets/angka/4.png')
  },
];

const dataHewan = [
  {
    title: 'ULAR',
    imgUrl: require('../../assets/hewan/ular.png')
  },
  {
    title: 'GAJAH',
    imgUrl: require('../../assets/hewan/gajah.png')
  },
  {
    title: 'KOALA',
    imgUrl: require('../../assets/hewan/koala.png')
  },

];

export {dataAngka, dataBuah, dataHewan, dataHuruf};
