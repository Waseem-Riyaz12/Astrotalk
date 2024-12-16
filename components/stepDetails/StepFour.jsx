import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Button from '../common/Button';
import DateTimePicker from './DatePicker';

const {width, height} = Dimensions.get('window');
const StepFour = ({handleNext, selectTime, setSelectedTime}) => {
  const onhandlechange = time => {
    let formattedTime;

    if (typeof time === 'string') {
      // If `time` is a string, parse it into a valid Date object
      const [hours, minutes] = time.split(':');
      const date = new Date();
      date.setHours(parseInt(hours, 10));
      date.setMinutes(parseInt(minutes, 10));
      date.setSeconds(0); // Set seconds to 0 if not provided
      formattedTime = date.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      });
    } else if (time instanceof Date) {
      // If `time` is already a Date object
      formattedTime = time.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      });
    } else {
      console.error('Invalid time format:', time);
      return;
    }

    setSelectedTime(formattedTime);
    // console.log('Formatted Time:', formattedTime);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Select your birth time</Text>
      <View style={styles.date}>
        <DateTimePicker
          mode="time"
          placeholder="Select Time"
          icon="clock-o"
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
