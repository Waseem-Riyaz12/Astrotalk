import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Button from '../common/Button';
import DateTimePicker from './DatePicker';

const {width, height} = Dimensions.get('window');
const StepFour = ({handleNext}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Select your birth time</Text>
      <View style={styles.date}>
        <DateTimePicker
          mode="time"
          placeholder="Select Time"
          icon="clock-o"
          onConfirm={time => console.log('Selected Time:', time)}
        />
      </View>
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
  );
};

export default StepFour;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  date: {
    marginVertical: height * 0.06,
  },
  heading: {
    fontSize: 16,
    fontWeight: '400',
    color: '#4A4A4A',
    fontFamily: 'WorkSans',
    marginTop: 20,
  },
});
