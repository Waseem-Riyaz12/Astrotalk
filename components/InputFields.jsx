import React, {useState} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';

const {width, height} = Dimensions.get('window');

const PhoneInputScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const phoneInput = React.useRef(null);

  return (
    <View>
      <PhoneInput
        ref={phoneInput}
        defaultValue={phoneNumber}
        defaultCode="IN"
        layout="first"
        onChangeFormattedText={text => {
          setPhoneNumber(text);
        }}
        containerStyle={styles.phoneContainer}
        textContainerStyle={styles.textInput}
        placeholder="Enter Mobile number"
        placeholderTextColor="#808080" // Correct way to set placeholder color
      />
    </View>
  );
};

const styles = StyleSheet.create({
  phoneContainer: {
    width: '100%',
    height: height * 0.06,
    borderRadius: 10,
    backgroundColor: 'white',
    marginBottom: height * 0.01,
  },
  textInput: {
    backgroundColor: 'white',
    color: 'black',
    paddingVertical: 0,
    borderRadius: 10,
  },
});

export default PhoneInputScreen;
