import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import Button from '../common/Button';

const Step1 = ({handleNext, name, setName}) => {
  const [error, setError] = useState('');
  const oncontinue = () => {
    if (name.trim() === '') {
      setError('Name is required'); // Show error if name is empty
    } else {
      setError('');
      handleNext(); // Proceed to the next step if validation passes
    }
  };
  return (
    <View>
      <View style={styles.subcontainer}>
        <Text style={styles.text}>Personalize your cosmic journey!</Text>
        <Text style={styles.text}>Enter your name</Text>
      </View>
      <TextInput
        placeholder="Enter Your Name"
        style={styles.inputbox}
        placeholderTextColor={'#6D6D6D'}
        value={name}
        onChangeText={text => {
          setName(text);
          setError(''); // Clear error message on text change
        }}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <View style={styles.button}>
        <Button
          title={'Continue'}
          bg={'#FF8700'}
          color={'white'}
          size={16}
          fw={'500'}
          lh={18}
          onPress={oncontinue}
        />
      </View>
    </View>
  );
};

export default Step1;

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'WorkSans',
    lineHeight: 25,
  },
  subcontainer: {
    marginVertical: 20,
  },
  inputbox: {
    width: '100%',
    height: 50,
    borderWidth: 0.5,
    borderColor: '#4A4A4A',
    borderRadius: 8,
    color: '#6D6D6D',
    paddingLeft: 20,
  },
  button: {
    marginVertical: 20,
  },
  error: {
    color: '#FF8700',
    fontSize: 12,
  },
});
