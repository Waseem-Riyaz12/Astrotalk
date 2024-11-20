import {Dimensions, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const {width, height} = Dimensions.get('window');

const CallingMethod = () => {
  const categories = [
    {
      id: 1,
      title: 'Call with Astrologer',

      image: require('../../assets/images/phone.png'),
    },
    {
      id: 2,
      title: 'Chat with Astrologer',
    },
    {
      id: 3,
      title: 'Video Call Astrologer',
      image: require('../../assets/images/vcall.png'),
    },
    {
      id: 4,
      title: 'Chat Reports',
    },
  ];

  return (
    <View>
      <Text style={styles.title}>Jyotishvani Services</Text>
      <View style={styles.subcontainer}>
        {categories.map((item, index) => {
          return (
            <View key={index} style={styles.categories}>
              <Image source={item.image} style={styles.image} />
              <View
                style={{
                  width: '100%',
                  borderWidth: 0.5,
                  borderColor: '#D6D6D6',
                }}
              />
              <Text style={styles.subtitle}>{item.title}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default CallingMethod;

const styles = StyleSheet.create({
  title: {
    fontFamily: 'WorkSans',
    fontSize: 20,
    fontWeight: '500',
    lineHeight: 23,
    color: '#4A4A4A',
    marginVertical: 20,
  },
  categories: {
    width: 80,
    height: 80,
    backgroundColor: '#FFFF',
    elevation: 5,
    borderRadius: 8,
  },
  subcontainer: {
    flexDirection: 'row',
    borderRadius: 8,
    justifyContent: 'space-evenly',
    paddingVertical: 20,
    backgroundColor: '#F6A61F',
  },
  image: {
    width: 30,
    height: 30,
    alignSelf: 'center',
    marginVertical: 5,
  },
  subtitle: {
    fontFamily: 'WorkSans',
    fontSize: 10,
    fontWeight: '500',
    lineHeight: 14,
    color: '#4A4A4A',
    maxWidth: 51,
    alignSelf: 'center',
    textAlign: 'center',
  },
});
