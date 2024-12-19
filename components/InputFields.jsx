import React, {useState} from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {CountryPicker} from 'react-native-country-codes-picker';

const {width, height} = Dimensions.get('window');

export default function PhoneInputScreen({onPhoneNumberChange, onCodeChange}) {
  const [show, setShow] = useState(false);
  const [countryCode, setCountryCode] = useState('+91');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleCountryCodeChange = code => {
    setCountryCode(code);
    onCodeChange(code); // Send country code to the parent
  };

  const handlePhoneNumberChange = number => {
    setPhoneNumber(number);
    onPhoneNumberChange(number); // Send phone number to the parent
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity
          onPress={() => setShow(true)}
          style={styles.countryCodeContainer}>
          <Text style={styles.text}>{countryCode}</Text>
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          placeholder="Enter phone number"
          placeholderTextColor={'#808080'}
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={handlePhoneNumberChange}
        />
      </View>

      {/* For showing picker just put show state to show prop */}
      <CountryPicker
        show={show}
        countryCode={countryCode}
        pickerButtonOnPress={item => {
          handleCountryCodeChange(item.dial_code);
          setShow(false);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    // backgroundColor: '#f5f5f5',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: height * 0.06,
    backgroundColor: 'white',
    borderRadius: 8,
    paddingHorizontal: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  countryCodeContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 16,
    borderColor: '#BABABA',
    // marginRight: 10,
    borderRightWidth: 1,
  },
  text: {
    color: 'black',
    fontSize: 16,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
    color: 'black',
    paddingLeft: 16,
  },
});
