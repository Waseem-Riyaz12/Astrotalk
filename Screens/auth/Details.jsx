import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Steps from '../../components/Steps';

import {useNavigation} from '@react-navigation/native';

import StepOne from '../../components/stepDetails/StepOne';
import StepTwo from '../../components/stepDetails/StepTwo';
import StepThree from '../../components/stepDetails/StepThree';
import StepFour from '../../components/stepDetails/StepFour';
import StepFive from '../../components/stepDetails/StepFive';
import StepSix from '../../components/stepDetails/StepSix';
import axios from 'axios';
import {BASE_URL} from '../../context/BaseUrl';
import {useDispatch, useSelector} from 'react-redux';
import {setUser, setToken, setPhoneDetails} from '../../redux/authSlice';

const {width, height} = Dimensions.get('window');
const Details = () => {
  const token = useSelector(state => state.auth.token);
  // console.log('tokn', token);

  const dispatch = useDispatch();

  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [step, setStep] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [city, setCity] = useState('');
  const [selectedLanguages, setSelectedLanguages] = useState([]);

  const UserDetails = {
    name: name,
    gender: selectedOption,
    dateOfBirth: selectedDate,
    timeOfBirth: selectedTime,
    birthCity: city,
    preferredLanguages: selectedLanguages,
  };

  console.log(UserDetails);
  const handleNext = () => {
    setStep(step + 1);
  };

  const handleFinish = () => {
    UserData();
  };

  const UserData = async () => {
    axios({
      method: 'post',
      url: `${BASE_URL}/user/profile`,
      data: {
        name: name,
        gender: selectedOption,
        dateOfBirth: selectedDate,
        timeOfBirth: selectedTime,
        birthCity: city,
        preferredLanguages: selectedLanguages,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(
      res => {
        console.log(res.data);
        dispatch(setUser(res.data.data));
        navigation.navigate('TabNavigation', {
          screen: 'Dashboard',
        });
        console.log(res);
      },
      err => {
        console.log(err.response.data);
        console.log('hello');
      },
    );
    // try {
    //   if (token) {
    //     const response = await axios.post(
    //       `${BASE_URL}/user/profile`,
    //       {
    //         UserDetails,
    //       },
    //       {
    //         headers: {
    //           Authorization: `Bearer ${token}`, // Send token in Authorization header
    //         },
    //       },
    //     );
    //     console.log(response);
    //     if (response) {
    //       dispatch(setUser(UserDetails));
    //       console.log('user data', UserDetails);
    // navigation.navigate('TabNavigation', {
    //   screen: 'Dashboard',
    // });
    //     }
    //   } else {
    //     console.log('No token found');
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <View style={styles.container}>
      <Header step={step} setStep={setStep} navigation={navigation} />
      <Steps step={step} />
      {step === 1 && (
        <StepOne handleNext={handleNext} name={name} setName={setName} />
      )}
      {step === 2 && (
        <StepTwo
          handleNext={handleNext}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
      )}
      {step === 3 && (
        <StepThree
          handleNext={handleNext}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      )}
      {step === 4 && (
        <StepFour
          handleNext={handleNext}
          selectedTime={selectedTime}
          setSelectedTime={setSelectedTime}
        />
      )}
      {step === 5 && (
        <StepFive handleNext={handleNext} city={city} setCity={setCity} />
      )}
      {step === 6 && (
        <StepSix
          navigation={navigation}
          selectedLanguages={selectedLanguages}
          setSelectedLanguages={setSelectedLanguages}
          handleFinish={handleFinish}
        />
      )}
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  subcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headertext: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  subheader: {
    width: '100%',
    height: height * 0.05,
    marginTop: height * 0.03,
  },
});
function Header({step, setStep, navigation}) {
  return (
    <View style={styles.subcontainer}>
      <TouchableOpacity
        onPress={() => {
          if (step === 1) {
            navigation.goBack();
            // alert('cant go back');
          } else {
            setStep(step - 1);
          }
        }}>
        <AntDesign name="arrowleft" size={30} color="black" />
      </TouchableOpacity>
      <Text style={styles.headertext}>Step into the stars</Text>
    </View>
  );
}
