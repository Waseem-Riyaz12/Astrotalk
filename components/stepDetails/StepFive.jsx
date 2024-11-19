import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Button from '../common/Button';

const StepFive = ({handleNext}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Select your birth city</Text>
      <Inputbox />
      <View style={styles.button}>
        <Button
          title={'Continue'}
          bg={'#FF8700'}
          color={'white'}
          size={16}
          fw={'500'}
          lh={18}
          onPress={handleNext}
        />
      </View>
    </View>
  );
};

export default StepFive;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 16,
    fontWeight: '400',
    color: '#4A4A4A',
    fontFamily: 'WorkSans',
    marginTop: 20,
  },
  inputContainer: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    marginTop: 30,
    borderRadius: 10,
    borderColor: '#8080808C',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    position: 'relative',
  },
  input: {
    width: '100%',
    fontSize: 16,
    color: '#000',
  },
  icon: {
    position: 'absolute',
    right: 15,
  },
  button: {
    marginVertical: 30,
  },
});

const Inputbox = () => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Search your city"
        placeholderTextColor={'#8080808C'}
        style={styles.input}
      />
      <TouchableOpacity style={styles.icon}>
        <Icon name="navigation-variant" color={'black'} size={24} />
      </TouchableOpacity>
    </View>
  );
};
