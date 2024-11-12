import {
  Dimensions,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const {width, height} = Dimensions.get('window');

const OtpScreen = () => {
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
          <Text style={styles.title}>OTO Verification</Text>
          <Text style={styles.subtitle}>
            A 4 digit code has been sent to your number
          </Text>
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
    maxWidth: 300,
  },
});
function Bimage() {
  return (
    <View style={styles.imagewraper}>
      <Image
        source={require('../assets/images/pana2.png')}
        style={styles.pana}
      />
    </View>
  );
}
