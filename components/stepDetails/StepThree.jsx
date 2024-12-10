import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

import Button from '../common/Button';
import DateTimePicker from './DatePicker';

const {width, height} = Dimensions.get('window');

const StepThree = ({handleNext, selectedDate, setSelectedDate}) => {
  const onhandlechange = date => {
    setSelectedDate(date);
    // console.log(date);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Select your birth date</Text>
      <View style={styles.date}>
        <DateTimePicker
          mode="date"
          placeholder="Select Date of Birth"
          icon="calendar"
          onConfirm={onhandlechange}
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

export default StepThree;

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
