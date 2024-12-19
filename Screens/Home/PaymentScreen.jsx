import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import Googlepay from '../../components/Googlepay';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const {width, height} = Dimensions.get('window');

const PaymentScreen = ({route}) => {
  const {amount} = route.params;

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      {/* Amount card */}
      <AmountBox amount={amount} />

      {/* googlepay Method */}
      <Googlepay />

      {/* Add Cards */}
      <PaymentMethod
        title={'Add New UPI ID'}
        subtitle={'Add Registered UPI ID'}
        heading={'Pay by any UPI App '}
      />
      <PaymentMethod
        title={'Add New Card'}
        subtitle={'Add Registered Card'}
        heading={'Credit & Debit Cards'}
      />

      {/* Payment Method */}
      <Payoptions />
    </ScrollView>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  amountbox: {
    width: '100%',
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: '#D6D6D6',
  },
  price: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  pricetext: {
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'WorkSans',
    lineHeight: 18,
    color: '#040404',
  },
  totalprice: {
    fontSize: 20,
    fontWeight: '500',
    fontFamily: 'WorkSans',
  },
  headingtext: {
    fontFamily: 'WorkSans',
    fontSize: 20,
    color: '#040404',
    marginTop: 20,
  },
  methodbox: {
    width: '100%',
    height: height * 0.08,
    borderWidth: 0.5,
    borderRadius: 10,
    borderColor: '#D6D6D6',
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusbox: {
    width: 30,
    height: 30,
    borderWidth: 0.5,
    borderColor: '#E2363D',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titletext: {
    fontSize: 16,
    fontWeight: '500',
    color: '#FA4A0C',
    // fontFamily: 'WorkSans',
  },
  subtext: {
    fontSize: 10,
    fontWeight: '400',
    color: '#4A4A4A',
    fontFamily: 'WorkSans',
  },
  payoptioncontainer: {
    width: '100%',
    height: height * 0.08,

    borderColor: '#D6D6D6',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    position: 'absolute',
    right: 20,
  },
});

const PaymentMethod = ({title, subtitle, heading}) => {
  return (
    <View>
      <Text style={styles.headingtext}>{heading}</Text>
      <TouchableOpacity style={styles.methodbox}>
        <View style={styles.plusbox}>
          <Feather name="plus" size={15} color="#E2363D" />
        </View>
        <View style={{width: '80%', marginLeft: 25}}>
          <Text style={styles.titletext}>{title}</Text>
          <Text style={styles.subtext}>{subtitle}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const Payoptions = () => {
  return (
    <View>
      <Text
        style={{
          fontFamily: 'WorkSans',
          fontSize: 20,
          color: '#040404',
          marginTop: 20,
        }}>
        More Payment options
      </Text>
      <View
        style={{
          width: '100%',
          height: height * 0.16,
          marginTop: 10,
          marginBottom: 30,
          borderRadius: 10,
          borderWidth: 0.5,
          borderColor: '#D6D6D6',
        }}>
        <TouchableOpacity
          style={[
            styles.payoptioncontainer,
            {borderBottomWidth: 1, borderStyle: 'dashed'},
          ]}>
          <View style={[styles.plusbox, {borderColor: '#D6D6D6'}]}>
            <Ionicons name="wallet-outline" size={15} color="#000000" />
          </View>
          <View style={{width: '80%', marginLeft: 25}}>
            <Text style={styles.titletext}>Wallets</Text>
            <Text style={styles.subtext}>
              Paytm, PhonePe, Amazon Pay & more
            </Text>
          </View>
          <Entypo
            name="chevron-thin-right"
            size={15}
            color={'#6D6D6D'}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.payoptioncontainer}>
          <View style={[styles.plusbox, {borderColor: '#D6D6D6'}]}>
            <FontAwesome name="bank" size={15} color="#000000" />
          </View>
          <View style={{width: '80%', marginLeft: 25}}>
            <Text style={styles.titletext}>Netbanking</Text>
            <Text style={styles.subtext}>Select from List of Banks</Text>
          </View>
          <Entypo
            name="chevron-thin-right"
            size={15}
            color={'#6D6D6D'}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const AmountBox = ({amount}) => {
  return (
    <View style={styles.amountbox}>
      <View style={styles.price}>
        <Text style={styles.pricetext}>Amount</Text>
        <Text style={styles.pricetext}>₹{amount}</Text>
      </View>
      <View style={styles.price}>
        <Text style={styles.pricetext}>GST (18%)</Text>
        <Text style={styles.pricetext}>₹{amount * 0.18}</Text>
      </View>
      <View style={styles.price}>
        <Text style={styles.totalprice}>Total Payable</Text>
        <Text style={styles.totalprice}>
          ₹{Number(amount) + Number(amount) * 0.18}
        </Text>
      </View>
    </View>
  );
};
