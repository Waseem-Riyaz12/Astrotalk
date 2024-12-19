import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {data} from './AstroData';
import AstroCardItem from './AstroRender';
import {BASE_URL} from '../../context/BaseUrl';
import axios from 'axios';

const {width, height} = Dimensions.get('window');

const AstroCard = () => {
  const [astrologer, setAstrologer] = useState([]);
  const getConsultants = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/user/type`);
      // setConsultants(response.data);
      setAstrologer(response.data.data.consultants);
    } catch (err) {
      console.error('Error fetching consultants:', err.message);
      setError('Failed to load data');
    } finally {
      setLoading(false); // Stop loading
    }
  };
  console.log(astrologer);

  useEffect(() => {
    getConsultants();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={astrologer}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return <AstroCardItem item={item} />;
        }}
      />
    </View>
  );
};

export default AstroCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});
