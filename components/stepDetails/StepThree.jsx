import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import DatePicker from './DatePicker';
import Button from '../common/Button';

const StepThree = ({handleNext}) => {
  return (
    <View style={styles.container}>
      <Text>StepThree</Text>
      <View style={styles.date}>
        <DatePicker />
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
    marginTop: 50,
  },
});
