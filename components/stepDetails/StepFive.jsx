import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Button from '../common/Button';
import {API_Access_Token} from '@env';
import Geolocation from '@react-native-community/geolocation';
import {request, PERMISSIONS, RESULTS} from 'react-native-permissions';
import theme from '../common/Theme';
import axios from 'axios';

const {width, height} = Dimensions.get('window');
const StepFive = ({handleNext, city, setCity}) => {
  const [location, setLocation] = useState(null);
  const [address, setAddress] = useState([]);
  const [showsuggestions, setSuggestions] = useState(false);

  // request permission to access location
  const requestLocationPermission = async () => {
    try {
      const permission =
        Platform.OS === 'ios'
          ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
          : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION;

      const result = await request(permission);
      if (result === RESULTS.GRANTED) {
        fetchCurrentLocation();
        console.log('Location permission granted');
      } else {
        Alert.alert(
          'Permission Denied',
          'Location permission is required to fetch the city.',
        );
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to request location permission.');
    }
  };

  // Function to handle city name from input search box
  const handleCitySearch = text => {
    setCity(text); // Set the city name as the user types
    setSuggestions(true); // Show suggestions
    getCitybySearch(text);
    if (text === '') {
      setSuggestions(false);
    }
  };

  // Function to fetch current location when location icon is pressed
  const fetchCurrentLocation = () => {
    Geolocation.getCurrentPosition(position => {
      const {latitude, longitude} = position.coords;
      setLocation({latitude, longitude});
    });
  };

  // Function to fetch city name from coordinates
  const fetchCityFromCoordinates = async () => {
    try {
      const response = await axios.get(
        `https://us1.locationiq.com/v1/reverse?key=pk.ea008d8c047df0626596d547069f4861&lat=${location.latitude}&lon=${location.longitude}&format=json&`,
      );

      setCity(response.data.address.city);
    } catch (error) {
      console.log(error);
    }
  };
  const getCitybySearch = async city => {
    try {
      const res = await axios.get('https://us1.locationiq.com/v1/search', {
        params: {
          key: 'pk.ea008d8c047df0626596d547069f4861',
          q: city, // You can replace this with dynamic input
          format: 'json',
        },
      });
      setAddress(res.data);
      // console.log(address);
      // const displayNames = res.data.map(item => item.display_name);
      // console.log(displayNames); // Log the response data
    } catch (error) {
      console.log(error); // Catch and log any errors
    }
  };

  // Monitor city changes to fetch suggestions
  useEffect(() => {
    if (city.trim() !== '') {
      setSuggestions(true);
      getCitybySearch(city);
    } else {
      setSuggestions(false);
    }
  }, [city]);

  useEffect(() => {
    requestLocationPermission();
  }, []);
  const handleAddressSelect = selectedCity => {
    setCity(selectedCity);
    setSuggestions(false); // Hide suggestions after selection
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Select your birth city</Text>
      <Inputbox
        city={city}
        handleCitySearch={handleCitySearch}
        fetchCityFromCoordinates={fetchCityFromCoordinates}
      />
      {showsuggestions && (
        <SuggestionList
          address={address}
          onSelectAddress={handleAddressSelect}
        />
      )}
      <View style={styles.button}>
        <Button
          title={'Continue'}
          bg={'#FF8700'}
          color={'white'}
          size={16}
          fw={'500'}
          lh={18}
          onPress={handleNext}
        />
      </View>
    </View>
  );
};

export default StepFive;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 16,
    fontWeight: '400',
    color: '#4A4A4A',
    fontFamily: 'WorkSans',
    marginTop: 20,
  },
  inputContainer: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    marginTop: 30,
    borderRadius: 10,
    borderColor: '#8080808C',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    position: 'relative',
  },
  input: {
    width: '100%',
    fontSize: 16,
    color: theme.colors.text,
    paddingRight: 40,
  },
  icon: {
    position: 'absolute',
    right: 15,
  },
  button: {
    marginVertical: 30,
  },
  addressbox: {
    height: height * 0.07,
    // width: '70%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  addressdot: {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: '#F6A317',
    marginRight: 20,
  },
  addresstext: {
    fontSize: 16,
    color: '#4A4A4A',
    fontFamily: 'WorkSans',
    maxWidth: '80%',
  },
  heading: {
    fontSize: 16,
    fontWeight: '400',
    color: '#4A4A4A',
    fontFamily: 'WorkSans',
    marginVertical: 20,
    letterSpacing: 1,
  },
});

const Inputbox = ({city, handleCitySearch, fetchCityFromCoordinates}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Search your city"
        placeholderTextColor={'#8080808C'}
        onChangeText={handleCitySearch}
        value={city}
        autoCapitalize="none"
        style={styles.input}
      />

      <TouchableOpacity onPress={fetchCityFromCoordinates} style={styles.icon}>
        <Icon name="navigation-variant" color={'black'} size={24} />
      </TouchableOpacity>
    </View>
  );
};

const SuggestionList = ({address, onSelectAddress}) => {
  return (
    <View>
      <Text style={styles.heading}>Search Results</Text>
      {address.slice(0, 4).map((item, index) => {
        const truncatedText =
          item.display_name.split(' ').slice(0, 6).join(' ') + '...';
        return (
          <TouchableOpacity
            key={item.display_name + index}
            onPress={() => onSelectAddress(item.display_name)}
            style={styles.addressbox}>
            <View style={styles.addressdot}></View>
            <Text style={styles.addresstext}>{truncatedText}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
