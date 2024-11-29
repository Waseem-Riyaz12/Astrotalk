import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import ScrollingText from './animations/Animation';

const {width, height} = Dimensions.get('window');

const Astrologers = ({
  subtitle,
  title,
  name,
  subtext,
  texts,
  showScrollingText = false,
  showTouchableOpacity = true,
  showSubtext = false,
}) => {
  const data = [
    {
      id: 1,
      name: 'Vivek Kumar',
      image: require('../../assets/images/astrologer1.png'),
      price: '₹ 30/min',
      rating: 4,
    },
    {
      id: 2,
      name: 'Acharya Desai',
      image: require('../../assets/images/astrologer2.png'),
      price: '₹ 50/min',
      rating: 3.5,
    },
    {
      id: 3,
      name: 'Vivek Kumar',
      image: require('../../assets/images/astrologer1.png'),
      price: '₹ 20/min',
      rating: 3,
    },
    {
      id: 4,
      name: 'Acharya Desai',
      image: require('../../assets/images/astrologer2.png'),
      price: '₹ 100/min',
      rating: 2.5,
    },
  ];

  return (
    <View>
      <View style={styles.textcontainer}>
        <Text style={styles.title}>
          {title}
          {showScrollingText && ( // Conditionally render ScrollingText
            <ScrollingText
              texts={texts}
              style={[styles.subtext, {color: '#F6A61F'}]}
            />
          )}
        </Text>
        {showTouchableOpacity && (
          <TouchableOpacity style={styles.touch}>
            <Text style={[styles.title, {color: '#E2363D'}]}>{subtitle}</Text>
            <Entypo name={name} size={20} color="#E2363D" />
          </TouchableOpacity>
        )}
      </View>
      {showSubtext && <Text style={styles.subtext}>{subtext}</Text>}
      <View style={{marginHorizontal: -20}}>
        <FlatList
          data={data}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={{paddingHorizontal: 20}}
          renderItem={({item, index}) => (
            <AstrologerCard
              item={item}
              isLastItem={index === data.length - 1}
              isFirstItem={index === 0}
            />
          )}
        />
      </View>
    </View>
  );
};

export default Astrologers;

const AstrologerCard = ({item, isLastItem}) => {
  return (
    <View
      style={[styles.AstrologerCard, isLastItem && {marginRight: 0}]}
      accessible={true}
      accessibilityLabel={`${item.name}`}>
      <View>
        <Image source={item.image} style={styles.image} />
        <View style={styles.rating}>
          <Entypo name="star" size={15} color="#FFC107" />
          <Text style={styles.ratingText}>{item.rating}</Text>
        </View>
      </View>
      <Text style={styles.cardText}>{item.name}</Text>
      <Text style={styles.cardText}>{item.price}</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Connect</Text>
      </TouchableOpacity>
    </View>
  );
};

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
  },
  touch: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 'auto',
  },
  AstrologerCard: {
    width: width * 0.35,
    height: height * 0.25,
    marginRight: height * 0.02,
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    marginVertical: height * 0.02,
    elevation: 5,
    // marginLeft: 10,
  },
  image: {
    width: height * 0.1,
    height: height * 0.1,
    marginBottom: 8,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 56,
    height: 25,
    borderRadius: 20,
    backgroundColor: 'white',
    elevation: 2,
    position: 'absolute',
    alignSelf: 'center',
    bottom: 0,
  },
  ratingText: {
    fontFamily: 'WorkSans',
    fontSize: 14,
    color: '#282828',
    marginLeft: 4,
  },
  cardText: {
    fontSize: 16,
    fontFamily: 'WorkSans',
    color: '#4A4A4A',
    fontWeight: '400',
    textAlign: 'center',
  },
  button: {
    width: '60%',
    height: '15%',
    borderRadius: 20,
    marginTop: '8%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#F6A317',
  },
  buttonText: {
    color: '#F6A317',
  },
  subtext: {
    fontSize: 16,
    color: '#4A4A4A',
    fontWeight: '300',
    // fontFamily: 'WorkSans',
    lineHeight: 24,
    letterSpacing: 0.5,
  },
});
