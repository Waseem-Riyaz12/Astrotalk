import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {data} from './AstroData';
import AstroCardItem from './AstroRender';

const {width, height} = Dimensions.get('window');

const AstroCard = () => {
  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
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
