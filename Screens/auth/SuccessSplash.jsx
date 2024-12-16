import {Dimensions, StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import FastImage from 'react-native-fast-image'; // Import FastImage
import ImageDisplay from '../../components/common/ImageDisplay';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {setPhoneVarified} from '../../redux/authSlice';

const {width, height} = Dimensions.get('window');

const SuccessSplash = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Details');
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.maincontainer}>
      <LinearGradient
        style={styles.cornerdiv}
        colors={['#F6A61F', '#FF8700']}
      />
      <ImageDisplay source={require('../../assets/images/panadone.png')} />
      <FastImage
        source={require('../../assets/gifs/Tick.gif')} // Use the GIF path
        style={styles.gif}
        resizeMode={FastImage.resizeMode.contain} // Adjust size if needed
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
    width: 200,
    height: 200,
  },
  maincontainer: {
    flex: 1,
    paddingTop: height * 0.2,
    alignItems: 'center',
  },
});
