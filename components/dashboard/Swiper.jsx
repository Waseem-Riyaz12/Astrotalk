import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Swiper from 'react-native-swiper';

const {width, height} = Dimensions.get('window');

const Carousel = () => {
  const data = [
    {
      id: '1',
      title: "Wondering What's Next in Life?",
      subtitle:
        'Get insights on career, finances, and personal growth. Your future awaits!',
      buttonText: 'Chat now!',
    },
    {
      id: '2',
      title: 'Explore Astrology Insights',
      subtitle: 'Learn what the stars have in store for you today.',
      buttonText: 'Discover!',
    },
    {
      id: '3',
      title: 'Personal Growth Advice',
      subtitle: 'Get expert advice for a brighter tomorrow.',
      buttonText: 'Learn more!',
    },
    {
      id: '4',
      title: 'Financial Planning Tips',
      subtitle: 'Make informed decisions for a secure future.',
      buttonText: 'Get advice!',
    },
    {
      id: '5',
      title: 'Career Guidance',
      subtitle: 'Unlock your potential and achieve your goals.',
      buttonText: 'Get started!',
    },
  ];

  return (
    <View style={styles.container}>
      <Swiper
        style={styles.wrapper}
        showsPagination
        activeDotStyle={styles.activeDot}
        dotStyle={styles.dot}
        index={2}
        loop
        width={width} // Ensure each slide takes full width
      >
        {data.map((item, index) => (
          <RenderItem key={index} item={item} />
        ))}
      </Swiper>
    </View>
  );
};

const RenderItem = ({item}) => {
  return (
    <View style={styles.card}>
      <View style={styles.banner}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.subtitle}</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>{item.buttonText}</Text>
        </TouchableOpacity>
        <View style={styles.box}>
          <Image
            source={require('../../assets/images/Rectangle.png')}
            style={styles.image}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    height: 180,
  },

  card: {
    justifyContent: 'center',
    alignItems: 'center',
    width: width, // Ensure full width for swiper items
  },
  banner: {
    padding: 10,
    width: '90%',
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: '#D6D6D6',
    backgroundColor: '#FFF',
    elevation: 5,
  },
  title: {
    fontSize: 12,
    fontWeight: '500',
    color: '#4A4A4A',
    marginBottom: 10,
    maxWidth: 180,
  },
  subtitle: {
    fontSize: 10,
    fontWeight: '300',
    color: '#4A4A4A',
    maxWidth: 170,
    marginBottom: 20,
  },
  button: {
    width: 100,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F6A61F',
    borderRadius: 5,
    elevation: 5,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 10,
    fontFamily: 'WorkSans',
  },
  box: {
    width: '40%',
    height: 122,
    position: 'absolute',
    borderTopLeftRadius: 60,
    borderBottomLeftRadius: 60,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    right: 0,
    top: 0,
    backgroundColor: '#E2363D',
  },
  image: {
    width: 70,
    height: '85%',
    position: 'absolute',
    bottom: 0,
    right: 25,
  },
  dot: {
    backgroundColor: 'white',
    borderWidth: 0.2,
    width: 7,
    height: 7,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#FF5733', // Active dot color
    width: 10,
    height: 10,
    borderRadius: 5,
  },
});

export default Carousel;
