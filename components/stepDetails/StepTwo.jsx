import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Button from '../common/Button';

const StepTwo = ({handleNext}) => {
  const [error, setError] = useState('');
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionPress = option => {
    setSelectedOption(option);
    setError('');
  };
  const handleContinue = () => {
    if (!selectedOption) {
      // setError('Please select an option');
      handleNext();
    } else {
      handleNext();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Select Gender</Text>
      <Options
        selectedOption={selectedOption}
        onOptionPress={handleOptionPress}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}

      <Button
        title={'Continue'}
        bg={'#FF8700'}
        color={'white'}
        size={16}
        fw={'500'}
        lh={18}
        onPress={handleContinue}
      />
    </View>
  );
};

export default StepTwo;

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
  boxcontainer: {
    flexDirection: 'row',
    width: '70%',
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginVertical: 25,
  },
  box: {
    width: 100,
    height: 100,
    borderRadius: 10,
    borderWidth: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#6D6D6D',
  },
  activeBox: {
    backgroundColor: '#FF8700',
    borderColor: '#FF8700',
    elevation: 5,
  },
  error: {
    color: '#FF8700',
    fontSize: 12,
  },
});

function Options({selectedOption, onOptionPress}) {
  return (
    <View style={styles.boxcontainer}>
      {/* Male Option */}
      <TouchableOpacity
        style={[styles.box, selectedOption === 'male' && styles.activeBox]}
        onPress={() => onOptionPress('male')}>
        <Icon
          name="male"
          size={50}
          color={selectedOption === 'male' ? 'white' : '#FF8700'}
        />
      </TouchableOpacity>

      {/* Female Option */}
      <TouchableOpacity
        style={[styles.box, selectedOption === 'female' && styles.activeBox]}
        onPress={() => onOptionPress('female')}>
        <Icon
          name="female"
          size={50}
          color={selectedOption === 'female' ? 'white' : '#FF8700'}
        />
      </TouchableOpacity>
    </View>
  );
}
