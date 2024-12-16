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
import {persistor} from '../../redux/store';
import ImageDisplay from '../../components/common/ImageDisplay';
import axios from 'axios';
import {BASE_URL} from '../../context/BaseUrl';
import {useDispatch} from 'react-redux';
import {setPhoneDetails, setToken} from '../../redux/authSlice';

const {width, height} = Dimensions.get('window');

const OtpScreen = ({route}) => {
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const {logDetails} = route.params;
  // console.log(logDetails);

  const navigation = useNavigation();
  const [seconds, setSeconds] = useState(60); // Starting from 60 seconds

  // useeffect for timer
  useEffect(() => {
    if (seconds > 0) {
      const timer = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds - 1);
      }, 1000);
      return () => clearInterval(timer); // Clear interval on component unmount
    }
  }, [seconds]);

  const ResendDetails = {
    countryCode: logDetails.countryCode,
    phone: logDetails.phone,
    otp: otp,
  };
  // console.log(ResendDetails);

  // Format the time as minutes and seconds
  const formatTime = sec => {
    const minutes = Math.floor(sec / 60);
    const remainingSeconds = sec % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  const VarifyOtp = async () => {
    if (otp.length !== 6) {
      setError('Please enter a valid 6-digit OTP');
      return;
    }
    try {
      const response = await axios.post(`${BASE_URL}/auth/verifyOtp`, {
        countryCode: logDetails.countryCode,
        phone: logDetails.phone,
        otp: otp,
      });
      console.log(response.data.data.token);
      if (response) {
        dispatch(setPhoneDetails(ResendDetails));
        dispatch(setToken(response.data.data.token));
        navigation.navigate('SuccessSplash');
      }
    } catch (error) {
      console.log(error);
    }
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
            numberOfDigits={6}
            theme={{
              containerStyle: styles.otpcontainer,
              pinCodeContainerStyle: styles.pinCodeContainer,
              pinCodeTextStyle: styles.pinCodeText,
            }}
            onTextChange={text => {
              setOtp(text);
              if (text.length === 6) {
                setError(''); // Clear error if OTP is 6 digits
              } else {
                setError('OTP must be 6 digits'); // Set error if OTP is not 6 digits
              }
            }}
          />
          {error && <Text style={styles.error}>{error}</Text>}
          <Button
            title={'Verify OTP'}
            color={'#000000'}
            size={16}
            ff={'WorkSans'}
            fw={'500'}
            bg={'white'}
            el={5}
            onPress={VarifyOtp}
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
    width: width * 0.9,

    alignSelf: 'center',
    paddingHorizontal: 10,
  },
  pinCodeContainer: {
    backgroundColor: 'white',
    width: 45,
    height: 50,
    borderRadius: 5,
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
  error: {
    color: '#fff',
    fontSize: 12,
  },
});
