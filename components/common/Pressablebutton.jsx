import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Pressablebutton = ({
  source = null,
  name = 'arrow-right',
  icolor = 'white',
  size = 12,
  title = 'title',
}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={source} style={styles.icon} />
      <Icon name={name} color={icolor} size={size} style={styles.icon1} />
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Pressablebutton;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    borderWidth: 1.5,
    borderColor: 'white',
    marginVertical: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    position: 'absolute',
    left: 10,
    width: 27,
    height: 27,
  },
  icon1: {
    position: 'absolute',
    left: 10,
  },
  text: {
    fontSize: 16,
    color: 'white',
    fontWeight: '500',
    // fontFamily: 'WorkSans',
  },
});
