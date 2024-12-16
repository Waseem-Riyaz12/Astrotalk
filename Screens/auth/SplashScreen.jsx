import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch, useSelector} from 'react-redux';

const {width, height} = Dimensions.get('window');

const SplashScreen = () => {
  const [isLoading, setIsLoading] = useState(true); // To track loading state

  const navigation = useNavigation();
  const {phoneDetails, user} = useSelector(state => state.auth);
  // console.log('splashScreen 1:', phoneDetails);
  // console.log('splashScreen 2:', user);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (user && Object.keys(user).length > 0) {
        console.log('Navigating to Dashboard');
        navigation.navigate('TabNavigation', {screen: 'Dashboard'});
      } else if (phoneDetails && Object.keys(phoneDetails).length > 0) {
        console.log('Navigating to Details');
        navigation.navigate('Details');
      } else {
        console.log('Navigating to LoginScreen');
        navigation.navigate('LoginScreen');
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation, user, phoneDetails]);
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
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    elevation: 10,
    shadowColor: 'white',
  },
  title: {
    fontSize: 16,
    fontWeight: '400',
    color: 'black',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '500',
    color: '#FFF',
    marginVertical: 10,
  },
  description: {
    fontSize: 20,
    fontWeight: '500',
    color: '#FFF',
    marginTop: 15,
  },
  details: {
    fontSize: 12,
    color: '#FFF',
    textAlign: 'center',
    marginTop: 10,
    fontWeight: '300',
    maxWidth: 245,
  },
  textBox: {
    alignItems: 'center',
    top: width * 0.05,
    width: width * 0.8,
  },
  imagewrapper: {
    width: 100,
    height: 100,
    alignItems: 'center',
  },
});

export default SplashScreen;
