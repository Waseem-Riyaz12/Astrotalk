import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Dimensions,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
const {width, height} = Dimensions.get('window');
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
  icolor,
  isize,
  name,
}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{
        width: '100%',
        height: height * 0.06,
        backgroundColor: bg,
        marginVertical: height * 0.007,
        borderRadius: 10,
        justifyContent: 'center',
        elevation: el,
        borderWidth: bw,
        borderColor: bc,
        alignItems: 'center',
        flexDirection: 'row',
      }}
      onPress={onPress}>
      <Image source={source} style={styles.icon} />
      <Icon name={name} size={isize} color={icolor} style={styles.icon} />

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
