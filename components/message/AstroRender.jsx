import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('window');

const AstroCardItem = ({item}) => {
  const navigation = useNavigation();
  const [showAll, setShowAll] = useState(false);

  // Split the single string into an array
  const experts = item.expert[0].split(','); // Converts "a, b, c" -> ['a', 'b', 'c']
  const visibleExperts = showAll ? experts : experts.slice(0, 3); // Show all or only the first 3
  const remainingCount = experts.length - 3; // Calculate remaining items

  const handleToggle = () => {
    setShowAll(!showAll); // Toggle visibility
  };

  return (
    <View style={styles.cardContainer}>
      <View style={{flexDirection: 'row', gap: 20}}>
        {/* Profile Section */}
        <View style={styles.profile}>
          <View>
            <Image source={item.image} style={styles.image} />
            <View style={styles.rating}>
              <Entypo name="star" size={15} color="#FFC107" />
              <Text style={styles.ratingText}>5</Text>
            </View>
          </View>
          <Text style={styles.cardText}>₹30/min</Text>
        </View>

        {/* Experience Section */}
        <View style={styles.expert}>
          <Text style={styles.name}>{item.name}</Text>
          <View style={styles.flex}>
            <MaterialCommunityIcons
              name="book-education-outline"
              size={20}
              color="#000"
              style={styles.icon}
            />
            <Text style={styles.expertText}>
              {visibleExperts.join(', ')}
              {!showAll && remainingCount > 0 && (
                <TouchableOpacity onPress={handleToggle}>
                  <Text style={styles.moreText}> +{remainingCount} more</Text>
                </TouchableOpacity>
              )}
            </Text>
            {showAll && (
              <TouchableOpacity onPress={handleToggle}>
                <Text style={styles.lessText}>less</Text>
              </TouchableOpacity>
            )}
          </View>
          <View style={styles.flex}>
            <FontAwesome
              name="language"
              size={20}
              color={'black'}
              style={styles.icon}
            />
            <Text style={styles.expertText}>{item.languages}</Text>
          </View>
          <View style={styles.flex}>
            <Octicons
              name="file-badge"
              size={20}
              color={'black'}
              style={styles.icon}
            />
            <Text style={styles.expertText}>{item.experience}</Text>
          </View>
        </View>
      </View>
      <View style={styles.buttonbox}>
        <Contact
          name={'chatbubble-ellipses-outline'}
          title={'chat'}
          onPress={() =>
            navigation.navigate('PersonalDetails', {name: item.name})
          }
        />
        <Contact name={'call'} title={'Call'} />
      </View>
    </View>
  );
};

export default AstroCardItem;

const Contact = ({title, name, onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Ionicons name={name} size={15} color={'#F6A317'} />
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: width - 40,
    height: height * 0.25,
    marginVertical: height * 0.01,
    borderWidth: 0.5,
    borderColor: '#D6D6D6',
    // elevation: 5,
    borderRadius: 10,
    padding: 10,
  },
  profile: {
    width: '35%',
    height: height * 0.17,
    // borderWidth: 1,

    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: height * 0.12,
    height: height * 0.12,
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
    fontSize: 14,
    color: '#282828',
    marginLeft: 4,
  },
  cardText: {
    fontSize: 14,
    color: '#030303',
    fontWeight: '500',
    textAlign: 'center',
    marginVertical: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  expertText: {
    maxWidth: 160,
    fontSize: 14,
    fontWeight: '400',
  },
  moreText: {
    color: '#E2363D',
  },
  lessText: {
    color: '#E2363D',
    marginTop: 5,
  },
  flex: {
    flexDirection: 'row',

    // justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },
  buttonbox: {
    width: '100%',
    height: 50,
    // borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  button: {
    width: width * 0.25,
    height: width * 0.09,
    borderWidth: 0.5,
    borderRadius: width / 2,
    borderColor: '#F6A317',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '400',
    color: '#F6A317',
    fontFamily: 'WorkSans',
  },
});
