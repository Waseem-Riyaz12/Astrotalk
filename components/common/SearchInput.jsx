import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

const SearchInput = ({
  width,
  height,
  bc,
  bw,
  br,
  ph,
  mv,
  bg,
  el,
  pc,
  placeholder,
  size,
  color,
  ff,
  fw,
  icolor,
  isize,
  name,
  position,
  left,
  top,
  bottom,
  right,
  transform,
}) => {
  return (
    <View>
      <TextInput
        placeholder={placeholder}
        style={{
          width: width,
          height: height,
          borderColor: bc,
          borderWidth: bw,
          borderRadius: br,
          paddingHorizontal: ph,
          marginVertical: mv,
          backgroundColor: bg,
          elevation: el,
          color: color,
          fontSize: size,
          fontFamily: ff,
          fontWeight: fw,
        }}
        placeholderTextColor={pc}
      />
      <TouchableOpacity
        style={{
          position: position,
          left: left,
          top: top,
          bottom: bottom,
          right: right,
          transform: transform,
        }}>
        <Icon name={name} size={isize} color={icolor} />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({});
