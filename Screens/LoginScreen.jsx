import {
  Dimensions,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import DividerWithText from '../components/headertext';
import InputFields from '../components/InputFields';
import Button from '../components/common/Button';
import CustomLink from '../components/CustomLink';
import {useNavigation} from '@react-navigation/native';
const {width, height} = Dimensions.get('window');

const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <LinearGradient
        style={styles.cornerdiv}
        colors={['#F6A61F', '#FF8700']}
      />
      <Bimage />

      <LinearGradient
        style={styles.maincontainer}
        colors={['#F6A61F', '#FF8700']}>
        <ScrollView>
          <Text style={styles.title}>Hi Welcome!</Text>
          <Text style={styles.subtitle}>Submit Your Mobile Number</Text>
          <DividerWithText text={'login'} />
          <InputFields />
          <Button
            title={'SEND OTP'}
            color={'#000000'}
            size={16}
            ff={'WorkSans'}
            fw={'500'}
            bg={'white'}
            el={5}
            onPress={'OtpScreen'}
          />
          <DividerWithText text={'Or'} />
          <Button
            bw={1.5}
            bc={'white'}
            title={'Continue With TrueCaller'}
            color={'white'}
            fw={'400'}
            size={16}
            source={require('../assets/images/msg.png')}
          />
          <Text style={styles.bottomtext}>
            By signing up, you agree to our{' '}
            <CustomLink title={'  Terms of Use  '} color={'black'} />
            and <CustomLink title={'Privacy Policy'} color={'black'} />
          </Text>
        </ScrollView>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

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
    fontSize: 24,
    lineHeight: 28,
    fontFamily: 'WorkSans',
  },
  subtitle: {
    color: 'white',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19,
    fontFamily: 'WorkSans',
    marginTop: 10,
  },
  bottomtext: {
    fontFamily: 'WorkSans',
    color: 'white',
    fontSize: 12,
    maxWidth: 300,
    marginTop: 10,
  },
});
function Bimage() {
  return (
    <View style={styles.imagewraper}>
      <Image
        source={require('../assets/images/pana.png')}
        style={styles.pana}
      />
    </View>
  );
}
