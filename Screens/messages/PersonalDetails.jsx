import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import CustomHeader from '../../components/common/CustomHeader';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';

import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

import CustomModal from '../../components/message/CustomModal';
import DynamicRadioButtonGroup from '../../components/common/Radiobutton';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';
import axios from 'axios';
import {BASE_URL} from '../../context/BaseUrl';

const {width, height} = Dimensions.get('window');

const PersonalDetails = ({route}) => {
  const {name, consultantId} = route.params;
  const {token} = useSelector(state => state.auth);
  console.log(token);
  const [error, setError] = useState('');
  const navigation = useNavigation();
  const [Occupation, setOccupation] = useState('');
  const [concern, setConcern] = useState('');
  const [relation, setRelation] = useState('');

  // console.log(name, consultantId);
  const [ShowModal, setShowModal] = useState(false);
  const [selectcheck, setSelectedCheck] = useState(false);
  console.log(Occupation, concern, relation);

  // api call to book chat
  const SendDetails = async () => {
    try {
      const response = await axios.post(
        `${BASE_URL}/consultation/chat`,
        {
          consultantId: consultantId,
          occupation: Occupation,
          concern: concern,
          relationship_status: relation,
        },

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      // console.log(response.data.data.room);
      if (response.data) {
        navigation.navigate('ChatScreen', {roomId: response.data.data.room});
      }
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: ShowModal ? 0 : height * 0.1}}>
        {error && (
          <Text
            style={{color: '#E2363D', fontSize: 12, fontFamily: 'WorkSans'}}>
            {error}
          </Text>
        )}
        {/* Details Sections */}
        <Details
          title={'Full Name'}
          placeholder={'Enter Your Full Name'}
          showicon={false}
          editable={false}
          value={'waseem'}
        />

        <Details
          title={'Select Birth Date'}
          placeholder={'DD/MM/YYYY'}
          iconName={'calendar-alt'}
          editable={false}
        />

        <View style={styles.genderbox}>
          <Text style={styles.title}>
            Select Gender
            <Text style={[styles.title, {color: '#E2363D'}]}>*</Text>
          </Text>

          {/* RadioButtons */}
          <DynamicRadioButtonGroup options={['Male', 'Female', 'Others']} />
        </View>

        <Details
          title={'Select Birth Time'}
          isimp={false}
          placeholder={'HH:MM'}
          iconName={'clock'}
          editable={false}
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
          <Text style={[styles.title, {fontSize: 10}]}>
            Without exact time we can still achieve upto 70%+ accuracy in
            predictions
          </Text>
        </View>
        <Details
          title={'Place of Birth'}
          placeholder={'City, State, Country'}
          editable={false}
        />
        <Details
          title={'Occupation'}
          showicon={true}
          iconName={'arrow-down'}
          onchangetext={text => setOccupation(text)}
        />
        <Details
          title={'Relationship Status'}
          showicon={true}
          iconName={'arrow-down'}
          onchangetext={text => setRelation(text)}
        />
        <Details
          title={'Your Concern'}
          showicon={true}
          iconName={'arrow-down'}
          onchangetext={text => setConcern(text)}
        />
      </ScrollView>
      <Footer
        name={name}
        setShowModal={setShowModal}
        ShowModal={ShowModal}
        SendDetails={SendDetails}
        error={error}
        setError={setError}
        occupation={Occupation}
        relation={relation}
        concern={concern}
      />
    </SafeAreaView>
  );
};

export default PersonalDetails;

// footer Component

const Footer = ({
  name,
  setShowModal,
  ShowModal,
  error,
  setError,
  concern,
  relation,
  occupation,
  SendDetails,
}) => {
  const handlepopup = () => {
    if (!occupation || !concern || !relation) {
      setError('Please fill all required fields');
    } else {
      setShowModal(true);
    }
  };
  return (
    <LinearGradient
      style={[ShowModal ? styles.modal : styles.footer]}
      colors={['#F6A61F', '#FF8700']}>
      {ShowModal ? (
        <CustomModal setShowModal={setShowModal} SendDetails={SendDetails} />
      ) : (
        <TouchableOpacity style={styles.btn} onPress={handlepopup}>
          <Text style={[styles.title, {color: '#fff', fontWeight: '500'}]}>
            Start Chat with {name}
          </Text>
        </TouchableOpacity>
      )}
    </LinearGradient>
  );
};

// input Details
const Details = ({
  title,
  placeholder,
  showicon = true,
  isimp = true,
  iconName,
  onPress,
  value,
  editable,
  onchangetext,
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
          value={value}
          editable={editable}
          onChangeText={onchangetext}
        />
        {showicon && iconName && (
          <TouchableOpacity style={styles.icon} onPress={onPress}>
            <Icon name={iconName} size={20} color={'#E2363D'} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

// Customslider

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
    height: 40,
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
  footer: {
    width: width,
    height: height * 0.09,
    position: 'absolute',
    bottom: 0,
  },
  btn: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    width: width,
    height: height * 0.4,
    marginHorizontal: -20,
    backgroundColor: 'red',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
});
