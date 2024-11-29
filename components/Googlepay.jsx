import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import Button from './common/Button';

const {width, height} = Dimensions.get('window');

const Googlepay = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Preferred Payment</Text>
      <View style={styles.googlecontainer}>
        <View style={styles.innercontainer}>
          <Image
            source={require('../assets/images/googlepay.png')}
            style={styles.image}
          />
          <View style={{marginLeft: 15}}>
            <Text style={styles.headtext}>Google Pay</Text>
            <Text style={styles.subtext}>
              Upto Rs250 cashback on RuPay CC on UPI Transactions above Rs 200
            </Text>
          </View>
          <View style={styles.check}>
            <Entypo name="check" size={10} color="white" />
          </View>
        </View>
        <Button
          title={'PAY VIA GOOGLEPAY'}
          bg={'#F6A61F'}
          el={5}
          color={'#fff'}
          fw={'500'}
          fs={12}
          ff={'WorkSans'}
        />
      </View>
    </View>
  );
};

export default Googlepay;

const styles = StyleSheet.create({
  container: {},
  heading: {
    fontFamily: 'WorkSans-Bold',
    fontSize: 20,
    color: '#040404',
    marginTop: 20,
  },
  googlecontainer: {
    width: '100%',
    height: 200,
    marginTop: 10,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: '#D6D6D6',
    padding: 20,
  },
  innercontainer: {
    flexDirection: 'row',
    marginBottom: height * 0.05,
  },
  headtext: {
    fontFamily: 'WorkSans-Bold',
    fontSize: 16,
    color: '#040404',
    lineHeight: 16,
  },
  subtext: {
    fontFamily: 'WorkSans',
    fontSize: 8,
    maxWidth: 156,
    color: '#6D6D6D',
    lineHeight: 9,
    marginTop: 10,
  },
  image: {
    width: 40,
    height: 16,
  },
  check: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#60B246',
    position: 'absolute',
    right: 10,
    bottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
