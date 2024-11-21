import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';

const {width, height} = Dimensions.get('window');

const ShoppingItems = () => {
  const data = [
    {id: 1, name: 'Milk', image: require('../../assets/images/health.png')},
    {id: 2, name: 'Eggs', image: require('../../assets/images/health.png')},
    {id: 3, name: 'Cheese', image: require('../../assets/images/health.png')},
    {id: 4, name: 'Butter', image: require('../../assets/images/health.png')},
    {id: 5, name: 'Bread', image: require('../../assets/images/health.png')},
    {id: 6, name: 'Juice', image: require('../../assets/images/health.png')},
    {id: 7, name: 'Fruits', image: require('../../assets/images/health.png')},
    {
      id: 8,
      name: 'Vegetables',
      image: require('../../assets/images/health.png'),
    },
  ];

  return (
    <View>
      <View style={styles.textcontainer}>
        <Text style={styles.title}>Jyotishvani Mall</Text>
        <TouchableOpacity style={styles.touch}>
          <Text style={[styles.title, {color: '#E2363D'}]}>See all</Text>
          <Entypo name={'chevron-small-right'} size={20} color="#E2363D" />
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        {data.slice(0, 4).map(item => (
          <View key={item.id} style={styles.itemcontainer}>
            <Image source={item.image} style={styles.itemimage} />
            <Text style={styles.itemname}>{item.name}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default ShoppingItems;

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: '500',
    color: '#4A4A4A',
    fontFamily: 'WorkSans',
    letterSpacing: 0.5,
  },
  textcontainer: {
    flexDirection: 'row',
    width: width * 0.92,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: height * 0.025,
    alignSelf: 'center',
  },
  touch: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 'auto',
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: width * 0.04,
    marginTop: height * 0.02,
  },
  itemcontainer: {
    width: width * 0.4,
    height: height * 0.2,
    marginBottom: height * 0.04,
    alignItems: 'center',
  },
  itemimage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    marginBottom: 8,
  },
  itemname: {
    fontSize: 16,
    fontWeight: '400',
    color: '#4A4A4A',
    fontFamily: 'WorkSans',
    position: 'absolute',
    bottom: 20,
  },
});
