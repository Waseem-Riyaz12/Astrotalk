import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Button from '../common/Button';

const StepFour = ({handleNext}) => {
  return (
    <View style={styles.container}>
      <Text>Stepfour</Text>
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
});
