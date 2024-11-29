import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import CustomHeader from '../../components/common/CustomHeader';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';

import RadioButtonGroup from '../../components/common/Radiobutton';

const {width, height} = Dimensions.get('window');

const PersonalDetails = () => {
  const [selectcheck, setSelectedCheck] = useState(false);
  return (
    <View style={styles.container}>
      {/* Header */}
      <CustomHeader showbalance={false} headertext={'Enter your details'} />

      {/* Details Sections */}
      <Details
        title={'Full Name'}
        placeholder={'Enter Your Full Name'}
        showicon={false}
      />

      <Details
        title={'Select Birth Date'}
        placeholder={'DD/MM/YYYY'}
        iconName={'calendar-alt'}
      />

      <View style={styles.genderbox}>
        <Text style={styles.title}>
          Select Gender<Text style={[styles.title, {color: '#E2363D'}]}>*</Text>
        </Text>

        {/* RadioButtons */}
        <RadioButtonGroup />
      </View>

      <Details
        title={'Select Birth Time'}
        isimp={false}
        placeholder={'HH:MM'}
        iconName={'clock'}
      />
      <View style={styles.checkmark}>
        <TouchableOpacity
          style={styles.checkmarkbox}
          onPress={() => setSelectedCheck(!selectcheck)}>
          {selectcheck && (
            <AntDesign name="check" size={10} color={'#F6A317'} />
          )}
        </TouchableOpacity>
        <Text style={[styles.title, {fontSize: 12}]}>
          Don’t know the exact time
        </Text>
      </View>

      <View style={styles.ideacontainer}>
        <Image
          source={require('../../assets/images/idea.png')}
          style={styles.idea}
        />
        <Text style={[styles.title, {fontSize: 10, maxWidth: '90%'}]}>
          Without exact time we can still achieve upto 70%+ accuracy in
          predictions
        </Text>
      </View>
    </View>
  );
};

export default PersonalDetails;

const Details = ({
  title,
  placeholder,
  showicon = true,
  isimp = true,
  iconName,
}) => {
  return (
    <View style={{marginVertical: height * 0.015}}>
      <Text style={styles.title}>
        {title}
        {isimp && <Text style={[styles.title, {color: '#E2363D'}]}>*</Text>}
      </Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={'#D6D6D6'}
          style={styles.input}
        />
        {showicon && iconName && (
          <TouchableOpacity style={styles.icon}>
            <Icon name={iconName} size={20} color={'#E2363D'} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    paddingRight: 40,
    paddingLeft: 20,
    fontSize: 16,
    fontWeight: '400',
    color: '#6D6D6D',
    fontFamily: 'WorkSans',
  },
  title: {
    fontSize: 16,
    fontWeight: '400',
    color: '#6D6D6D',
    fontFamily: 'WorkSans',
  },
  icon: {
    position: 'absolute',
    right: 10,
  },
  inputContainer: {
    position: 'relative',
    width: '100%',
    height: height * 0.05,
    borderWidth: 0.5,
    borderRadius: 8,
    borderColor: '#E2363D',
    marginTop: 5,
    justifyContent: 'center',
  },
  genderbox: {
    width: '100%',
    height: height * 0.08,
    marginVertical: 10,
  },
  genderwrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  checkmark: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  checkmarkbox: {
    width: 15,
    height: 15,
    borderWidth: 0.5,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  idea: {
    width: 15,
    height: 15,
  },
  ideacontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    gap: 10,
  },
});
