import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const DividerWithText = ({text}) => {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <Text style={styles.text}>{text}</Text>
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: 'white',
  },
  text: {
    marginHorizontal: 8,
    fontSize: 16,
    color: 'white',
  },
});

export default DividerWithText;
