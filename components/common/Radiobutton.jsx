import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
const {width, height} = Dimensions.get('window');

const SingleRadioButton = ({option, isSelected, onSelect}) => {
  return (
    <TouchableOpacity
      style={styles.radioContainer}
      onPress={() => onSelect(option)}>
      <View style={styles.radioCircle}>
        {isSelected && <View style={styles.selectedCircle} />}
      </View>
      <Text style={styles.optionText}>{option}</Text>
    </TouchableOpacity>
  );
};

const RadioButtonGroup = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = ['Male', 'Female', 'Others'];

  return (
    <View style={styles.container}>
      {options.map(option => (
        <SingleRadioButton
          key={option}
          option={option}
          isSelected={selectedOption === option}
          onSelect={value => setSelectedOption(value)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#E2363D',
    width: width * 0.25,
    height: height * 0.05,
    borderRadius: 8,
    justifyContent: 'space-evenly',
    marginVertical: 5,
  },
  radioCircle: {
    height: 16,
    width: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E2363D',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedCircle: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: '#E2363D',
  },
  optionText: {
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'WorkSans',
    color: '#6D6D6D',
  },
});

export default RadioButtonGroup;
