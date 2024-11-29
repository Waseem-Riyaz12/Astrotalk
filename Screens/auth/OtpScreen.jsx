import {
  Dimensions,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {OtpInput} from 'react-native-otp-entry';
import {useNavigation} from '@react-navigation/native';
import Button from '../../components/common/Button';
import CustomLink from '../../components/CustomLink';
import ImageDisplay from '../../components/common/ImageDisplay';

const {width, height} = Dimensions.get('window');

const OtpScreen = () => {
  const navigation = useNavigation();
  const [seconds, setSeconds] = useState(60); // Starting from 60 seconds

  useEffect(() => {
    if (seconds > 0) {
      const timer = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds - 1);
      }, 1000);
      return () => clearInterval(timer); // Clear interval on component unmount
    }
  }, [seconds]);

  // Format the time as minutes and seconds
  const formatTime = sec => {
    const minutes = Math.floor(sec / 60);
    const remainingSeconds = sec % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <LinearGradient
        style={styles.cornerdiv}
        colors={['#F6A61F', '#FF8700']}
      />
      <ImageDisplay source={require('../../assets/images/pana2.png')} />

      <LinearGradient
        style={styles.maincontainer}
        colors={['#F6A61F', '#FF8700']}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.title}>OTP Verification</Text>
          <Text style={styles.subtitle}>
            A 4 digit code has been sent to your number
          </Text>
          <OtpInput
            numberOfDigits={4}
            theme={{
              containerStyle: styles.otpcontainer,
              pinCodeContainerStyle: styles.pinCodeContainer,
              pinCodeTextStyle: styles.pinCodeText,
            }}
          />
          <Button
            title={'Verify OTP'}
            color={'#000000'}
            size={16}
            ff={'WorkSans'}
            fw={'500'}
            bg={'white'}
            el={5}
            onPress={() => navigation.navigate('SuccessSplash')}
          />
          <Text style={styles.bottomtext}>
            If you didn't have the code!
            <CustomLink title={' Resend : '} color={'black'} size={14} />
            <Text style={styles.bottomtext}>{formatTime(seconds)}</Text>
          </Text>

          <Button
            bw={1.5}
            bc={'white'}
            title={'Change Mobile Number'}
            color={'white'}
            fw={'400'}
            size={16}
            name={'mobile-alt'}
            isize={25}
            icolor={'white'}
            onPress={() => navigation.navigate('LoginScreen')}
          />
        </ScrollView>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
};

export default OtpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  cornerdiv: {
    width: width * 0.85,
    height: width * 0.85,
    borderRadius: width / 2,
    position: 'absolute',
    right: -width * 0.5,
    top: -width * 0.5,
  },
  imagewraper: {
    width: width * 0.7,
    height: width * 0.7,
    marginHorizontal: 'auto',
    marginVertical: width * 0.05,
  },
  pana: {
    width: '100%',
    height: '100%',
  },
  maincontainer: {
    flex: 1,
    width: width,

    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    padding: 25,
  },
  title: {
    color: 'white',
    fontWeight: '600',
    fontSize: height * 0.03,
    lineHeight: 28,
    fontFamily: 'WorkSans',
  },
  subtitle: {
    color: 'white',
    fontWeight: '400',
    fontSize: height * 0.02,
    lineHeight: 19,
    fontFamily: 'WorkSans',
    marginTop: 10,
    maxWidth: 300,
  },
  otpcontainer: {
    marginVertical: height * 0.03,
    width: width * 0.7,
    alignSelf: 'center',
  },
  pinCodeContainer: {
    backgroundColor: 'white',
    width: 60,
  },
  pinCodeText: {
    color: '#FF8700',
  },
  bottomtext: {
    fontFamily: 'WorkSans',
    color: 'white',
    fontSize: 14,
    maxWidth: 300,
    marginVertical: height * 0.03,
  },
});
