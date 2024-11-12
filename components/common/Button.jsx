import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Button = ({
  title,
  size,
  color,
  lh,
  ls,
  fw,
  ff,
  maxW,
  ta,
  mv,
  mh,
  lines,
  flex,
  bg,
  el,
  bc,
  bw,
  source,
  onPress,
}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{
        width: '100%',
        height: 50,
        backgroundColor: bg,
        marginVertical: 15,
        borderRadius: 10,
        justifyContent: 'center',
        elevation: el,
        borderWidth: bw,
        borderColor: bc,
        alignItems: 'center',
        flexDirection: 'row',
      }}
      onPress={() => navigation.navigate(onPress)}>
      <Image source={source} style={styles.icon} />
      <Text
        numberOfLines={lines}
        style={{
          fontSize: size,
          color: color,
          lineHeight: lh,
          letterSpacing: ls,
          fontWeight: fw,
          fontFamily: ff,
          maxWidth: maxW,
          textAlign: ta,
          marginVertical: mv,
          marginHorizontal: mh,
          flex: flex,
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  icon: {
    position: 'absolute',
    left: 10,
    width: 27,
    height: 27,
  },
});
