import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const {width, height} = Dimensions.get('window');
const TrendingNow = () => {
  return (
    <View>
      <Text style={styles.title}>Trending Now</Text>
      <LinearGradient
        colors={['#F6A61F', '#FF8700']}
        style={styles.subcontainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {/* <TrendingCard /> */}
          <TrendingCard />
        </ScrollView>
      </LinearGradient>
    </View>
  );
};

export default TrendingNow;

const TrendingCard = () => {
  const data = [
    {
      id: 1,
      title: 'Health',
      image: require('../../assets/images/health.png'),
    },
    {
      id: 2,
      title: ' Education',
      image: require('../../assets/images/download.jpg'),
    },
    {
      id: 3,
      title: 'Fitness',
      image: require('../../assets/images/health.png'),
    },
    {
      id: 4,
      title: 'Education',
      image: require('../../assets/images/health.png'),
    },
    {
      id: 5,
      title: 'Education',
      image: require('../../assets/images/health.png'),
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.textbox}>
        <Text style={styles.text}>
          Astrology is a language, If you want to understand this language,
          speak to us!
        </Text>
        <Text style={[styles.text, {marginVertical: 20}]}>
          Swipe for more...{' '}
        </Text>
        <Text style={[styles.text, {maxWidth: 117}]}>
          Chats starting @Rs5/min
        </Text>
      </View>
      {data.map((item, index) => {
        return (
          <TrendingCardItem key={index} title={item.title} image={item.image} />
        );
      })}
    </View>
  );
};

const TrendingCardItem = ({title, image}) => {
  return (
    <View style={styles.cardcontainer}>
      <View style={styles.card}>
        <Image source={image} style={styles.image} />
        <Text style={styles.subtitle}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    color: '#4A4A4A',
    fontFamily: 'WorkSans',
    marginVertical: 20,
    letterSpacing: 0.5,
  },
  subcontainer: {
    flex: 1,
    // width: width,
    height: 250,
    marginLeft: -20,
    marginRight: -20,
    backgroundColor: '#F6A61F',
    marginBottom: 10,
  },
  textbox: {
    width: 200,
    height: '100%',
    margin: 20,
  },
  text: {
    fontFamily: 'WorkSans',
    fontSize: height * 0.019,
    fontWeight: '400',
    color: '#FFFFFF',
    lineHeight: 24,
    maxWidth: 190,
  },
  cardcontainer: {
    margin: 20,
  },
  card: {
    width: width * 0.35,
    height: height * 0.16,
  },
  image: {
    width: '90%',
    height: '100%',
    borderRadius: 10,
  },
  subtitle: {
    fontFamily: 'WorkSans',
    fontSize: height * 0.018,
    fontWeight: '400',
    color: '#FFFFFF',
    textAlign: 'center',
  },
});
