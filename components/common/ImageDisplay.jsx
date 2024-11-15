import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import React from 'react';
const {width, height} = Dimensions.get('window');

const ImageDisplay = ({source}) => {
  return (
    <View style={styles.imagewraper}>
      <Image source={source} style={styles.pana} />
    </View>
  );
};

export default ImageDisplay;

const styles = StyleSheet.create({
  imagewraper: {
    width: width * 0.6,
    height: width * 0.6,
    marginHorizontal: 'auto',
    marginVertical: width * 0.06,
  },
  pana: {
    width: '100%',
    height: '100%',
  },
});
