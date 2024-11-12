// import {StyleSheet, Text, TextInput, View, Image} from 'react-native';
// import React from 'react';
// import AntDesign from 'react-native-vector-icons/AntDesign';

// const InputFields = () => {
//   return (
//     <View>
//       <TextInput
//         placeholder="Enter Mobile Number"
//         placeholderTextColor={'#808080'}
//         style={styles.inputbox}
//       />
//       <View style={styles.flagbox}>
//         <Image source={require('../assets/images/flag.png')} />
//         <Text>+91</Text>
//         <AntDesign name="caretdown" size={12} color="black" />
//       </View>
//     </View>
//   );
// };

// export default InputFields;

// const styles = StyleSheet.create({
//   inputbox: {
//     width: '100%',
//     height: 50,
//     backgroundColor: 'white',
//     borderRadius: 10,
//     paddingLeft: 120,
//     fontFamily: 'WorkSans',
//     fontWeight: '400',
//     fontSize: 14,
//     color: 'black',
//   },
//   flagbox: {
//     position: 'absolute',
//     top: 10,
//     left: 15,
//     width: 80,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-evenly',
//     borderRightWidth: 1,
//     borderColor: '#808080',
//   },
// });

import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet, Text} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';

const InputFields = () => {
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
        placeholdertextStyle={{color: '#808080'}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  phoneContainer: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  textInput: {
    backgroundColor: 'white',
    color: 'black',
    paddingVertical: 0,
    borderRadius: 10,
  },
});

export default InputFields;
