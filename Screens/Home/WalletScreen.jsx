import {
  KeyboardAvoidingView,
  StyleSheet,
  View,
  Platform,
  Dimensions,
  Text,
  Pressable,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import SearchInput from '../../components/common/SearchInput';
import Button from '../../components/common/Button';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {BASE_URL} from '../../context/BaseUrl';
import {useSelector} from 'react-redux';
import RazorpayCheckout from 'react-native-razorpay';

const {width, height} = Dimensions.get('window');

const WalletScreen = () => {
  const navigation = useNavigation();
  const [error, setError] = useState('');
  const [selectedAmount, setSelectedAmount] = useState(''); // State for the selected amount
  const amounts = [
    '+50',
    '+100',
    '+200',
    '+500',
    '+1000',
    '+1500',
    '+2000',
    '+3000',
    '+4000',
  ];
  const {token} = useSelector(state => state.auth);

  const handleNavigate = () => {
    if (selectedAmount) {
      RefillWallet();
      navigation.navigate('PaymentScreen', {amount: selectedAmount});
      // setSelectedAmount('');
    } else {
      setError('Please select an amount');
    }
  };

  const handleAmountSelect = amount => {
    const numericAmount = amount.replace('+', '');
    setSelectedAmount(numericAmount); // Set the selected amount to state
    setError('');
  };

  const handleInputChange = text => {
    setSelectedAmount(text); // Update selectedAmount with manual input
    setError('');
  };

  // redirect to razorpay
  const Razorpayment = async orderid => {
    console.log('Razorpay');
    var options = {
      description: 'Credits towards consultation',
      image: 'https://i.imgur.com/3g7nmJC.png',
      currency: 'INR',
      key: 'rzp_test_lagBIu9ruBstxI', // Your api key
      amount: selectedAmount * 100,
      order_id: orderid,
      name: 'foo',
      prefill: {
        email: 'void@razorpay.com',
        contact: '9191919191',
        name: 'Razorpay Software',
      },
      theme: {color: '#F37254'},
    };
    RazorpayCheckout.open(options)
      .then(async data => {
        // handle success
        // alert(`Success: ${data.razorpay_payment_id}`);
        const response = await axios.post(
          `${BASE_URL}/payments/verifyTrx`,
          {
            razorpay_payment_id: data.razorpay_payment_id,
            razorpay_order_id: orderid,
            razorpay_signature: data.razorpay_signature,
          },
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
          },
        );
        if (response.data) {
          navigation.navigate('WalletScreen');
        }
      })
      .catch(error => {
        // handle failure
        console.log('Error: ', error.response);
      });
  };

  const RefillWallet = async () => {
    try {
      const response = await axios.post(
        `${BASE_URL}/user/walletRefill`,
        {
          amount: selectedAmount,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        },
      );
      console.log(response.data);
      if (response.data) {
        Razorpayment(response.data.data.order.id);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.inner}>
          <SearchInput
            value={selectedAmount} // Display selected amount in SearchInput
            onChangeText={handleInputChange} // Update value when typing manually
            showIcon={false}
            placeholder={'Enter amount'}
            bw={0.5}
            br={8}
            bc={'#E2363D'}
            pc={'#D6D6D6'}
            ph={20}
            height={50}
            ls={2}
            size={16}
            ff={'WorkSans'}
            fw={'400'}
            kt={'numeric'}
          />
        </View>
        {error && (
          <Text
            style={{color: '#E2363D', fontSize: 12, fontFamily: 'WorkSans'}}>
            {error}
          </Text>
        )}

        <View style={styles.Amountbox}>
          {amounts.map(item => {
            return (
              <RenderAmount
                key={item}
                item={item}
                isSelected={item === selectedAmount} // Check if this item is selected
                onSelect={handleAmountSelect}
              />
            );
          })}
        </View>
        <Button
          title={'Proceed to pay'}
          bg={'#FF8700'}
          color={'white'}
          size={16}
          fw={'500'}
          lh={18}
          el={5}
          onPress={handleNavigate}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const RenderAmount = ({item, isSelected, onSelect}) => {
  const handlePress = () => {
    onSelect(item); // Set this item as selected
  };

  return (
    <Pressable
      style={[
        styles.itembox,
        {backgroundColor: isSelected ? '#E2363D' : 'transparent'}, // Maroon color for selected item
      ]}
      onPress={handlePress}>
      <Text
        style={[styles.itemtext, {color: isSelected ? '#FFFFFF' : '#E2363D'}]}>
        {item}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  inner: {},
  Amountbox: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    padding: 5,
    width: width - 40,
    height: height * 0.4,
  },
  itembox: {
    width: width * 0.195,
    height: height * 0.06,
    borderWidth: 0.5,
    borderColor: '#E2363D',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    margin: height * 0.023,
  },
  itemtext: {
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'WorkSans',
  },
});

export default WalletScreen;
