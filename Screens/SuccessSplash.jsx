import {Dimensions, StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import ImageDisplay from '../components/common/ImageDisplay';
import {useNavigation} from '@react-navigation/native';
const {width, height} = Dimensions.get('window');

const SuccessSplash = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      // navigation.navigate('Details');
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.maincontainer}>
      <LinearGradient
        style={styles.cornerdiv}
        colors={['#F6A61F', '#FF8700']}
      />
      <ImageDisplay source={require('../assets/images/panadone.png')} />
      <Image
        source={require('../assets/images/heart.gif')}
        style={styles.gif}
      />
    </View>
  );
};

export default SuccessSplash;

const styles = StyleSheet.create({
  cornerdiv: {
    width: width * 0.85,
    height: width * 0.85,
    borderRadius: width / 2,
    position: 'absolute',
    right: -width * 0.5,
    top: -width * 0.5,
  },
  gif: {
    borderWidth: 1,
  },
  maincontainer: {
    flex: 1,
    paddingTop: height * 0.2,
    alignItems: 'center',
  },
});
