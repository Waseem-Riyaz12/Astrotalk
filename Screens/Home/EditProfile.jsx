import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';
import React from 'react';
import CustomHeader from '../../components/common/CustomHeader';
import theme from '../../components/common/Theme';
import DynamicRadioButtonGroup from '../../components/common/Radiobutton';

const {width, height} = Dimensions.get('window');

const EditProfile = () => {
  const data = [1, 2, 3, 4, 5, 6, 7];
  return (
    <View style={styles.container}>
      {/* headerBar */}
      <CustomHeader headertext="Profile" showbalance={false} />

      {/* profile photo */}
      <View style={styles.profilephoto}>
        <Image
          source={require('../../assets/images/Dp.png')}
          style={styles.image}
        />
        <Text style={styles.text}>9103543244</Text>
      </View>

      {/* input field */}
      <InputField title={'Name'} placeholder={'Amit Singh'} />
      <InputField title={'Date of Birth'} placeholder={'28-11-2024'} />
      <GenderBox />
    </View>
  );
};

export default EditProfile;

// input function

const InputField = ({title, placeholder}) => {
  return (
    <View style={{marginTop: 5, height: height * 0.09}}>
      <Text style={styles.title}>
        {title}
        <Text style={[styles.title, {color: '#E2363D'}]}>*</Text>
      </Text>
      <View style={styles.inputbox}>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={'#4A4A4A'}
          style={styles.input}
        />
      </View>
    </View>
  );
};

// gender function
const GenderBox = () => {
  return (
    <View style={styles.gendercontainer}>
      <Text style={styles.title}>Gender</Text>

      <DynamicRadioButtonGroup
        options={['Male', 'Female', 'Others']}
        containerStyle={{
          justifyContent: 'space-between',
          flex: 1,
          paddingHorizontal: 20,
        }}
        buttonStyle={{
          borderWidth: 1,
          width: 70,
          height: 40,
          borderRadius: 8,
          alignItems: 'center',
        }}
        textStyle={{color: '#6D6D6D', fontSize: 10, fontWeight: '400'}}
        circleStyle={{borderColor: '#E2363D', height: 14, width: 14}}
        selectedCircleStyle={{
          backgroundColor: '#E2363D',
          height: 8,
          width: 8,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
  profilephoto: {
    width: '100%',
    height: height * 0.2,
    borderBottomWidth: 0.5,
    borderColor: theme.colors.border,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginVertical: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: '400',
    color: '#000000',
  },
  inputbox: {
    borderBottomWidth: 0.5,
    borderColor: theme.colors.border,
    marginHorizontal: -20,
  },
  input: {
    fontSize: 14,
    fontWeight: '300',
    color: '#4A4A4A',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: '#6D6D6D',
    // fontFamily: 'WorkSans',
  },
  gendercontainer: {
    width: width,
    marginHorizontal: -20,
    height: height * 0.09,
    borderBottomWidth: 0.5,
    borderColor: theme.colors.border,
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
    // justifyContent: 'space-between',
  },
});