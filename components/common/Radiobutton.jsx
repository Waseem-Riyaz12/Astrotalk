import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
const {width, height} = Dimensions.get('window');

const DynamicRadioButtonGroup = ({
  options = [],
  containerStyle = {},
  buttonStyle = {},
  textStyle = {},
  circleStyle = {},
  selectedCircleStyle = {},
  onChangeSelection,
}) => {
  const [selectedOption, setSelectedOption] = useState(null);
  console.log('options', selectedOption);

  const handleSelect = option => {
    setSelectedOption(option);
    if (onChangeSelection) {
      onChangeSelection(option);
    }
  };

  return (
    <View style={[styles.container, containerStyle]}>
      {options.map(option => (
        <TouchableOpacity
          key={option}
          style={[styles.button, buttonStyle]}
          onPress={() => handleSelect(option)}>
          <View style={[styles.radioCircle, circleStyle]}>
            {selectedOption === option && (
              <View style={[styles.selectedCircle, selectedCircleStyle]} />
            )}
          </View>
          <Text style={[styles.optionText, textStyle]}>{option}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderWidth: 1,
    borderColor: '#E2363D',
    borderRadius: 8,
    padding: 10,
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
    marginLeft: 8,
  },
});

export default DynamicRadioButtonGroup;
