import React, {useEffect, useState, useCallback, useMemo} from 'react';
import {ToastAndroid, ActivityIndicator} from 'react-native';
import {Carous, Container} from '../../component';
import {BASE_URL, IMG_URL, endpoints} from '../../config';

const Hewan = ({route}) => {
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

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  return <Container>{memoizeRenderContent}</Container>;
};

export default Hewan;