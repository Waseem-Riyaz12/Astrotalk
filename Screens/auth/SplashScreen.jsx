import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
const {width, height} = Dimensions.get('window');
const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('LoginScreen');
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <LinearGradient colors={['#F6A61F', '#FF8700']} style={styles.container}>
      <View style={styles.imagewrapper}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.logo}
        />
      </View>
      <Text style={styles.title}>Jyotishvani</Text>

      <Text style={styles.subtitle}>Horoscope & Astrology</Text>
      <View style={styles.textBox}>
        <Text style={styles.description}>Let the Stars Guide You</Text>
        <Text style={styles.details}>
          Discover insights, explore your stars, and connect with the universe
          like never before.
        </Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    alignItems: 'center',
    // backgroundColor: '#FF8700',
  },
  backgroundDots: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  logo: {
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 16,
    fontWeight: '400',
    color: 'black',
    fontFamily: 'WorkSans',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '500',
    color: '#FFF',
    marginVertical: 10,
    fontFamily: 'WorkSans',
  },
  description: {
    fontSize: 20,
    fontWeight: '500',
    color: '#FFF',
    marginTop: 15,
    fontFamily: 'WorkSans',
  },
  details: {
    fontSize: 12,
    color: '#FFF',
    textAlign: 'center',
    marginTop: 10,
    fontWeight: '300',
    maxWidth: 245,
    fontFamily: 'WorkSans',
  },
  textBox: {
    alignItems: 'center',
    top: width * 0.05,
    width: width * 0.8,
  },
  innerContainer: {
    width: 100,
    height: 100,
  },
  imagewrapper: {
    width: 100,
    height: 100,

    alignItems: 'center',
  },
});

export default SplashScreen;
