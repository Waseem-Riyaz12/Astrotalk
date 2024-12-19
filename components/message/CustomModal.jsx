import {
  StyleSheet,
  Switch,
  Text,
  View,
  TouchableWithoutFeedback,
  Pressable,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {privacy} from './AstroData';
import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('window');

const CustomModal = ({setShowModal, SendDetails}) => {
  const navigation = useNavigation();
  const [switchStates, setSwitchStates] = useState(
    privacy.reduce((acc, item) => {
      acc[item.id] = false; // Assume each item has a unique 'id'
      return acc;
    }, {}),
  );

  const toggleSwitch = id => {
    setSwitchStates(prevStates => ({
      ...prevStates,
      [id]: !prevStates[id], // Toggle the specific switch state
    }));
  };

  const handleNavigate = () => {
    SendDetails();

    setShowModal(false);
  };
  return (
    <View style={styles.container}>
      <View style={styles.headertext}>
        <Icon name="lock" size={20} color="#fff" />
        <Text style={styles.text}>Your Privacy matters!</Text>
      </View>
      {privacy.map((item, index) => {
        return (
          <View key={item.id} style={styles.privacy}>
            <FontAwesome5 name="user-lock" size={10} color="#fff" />
            <Text style={styles.title}>{item.title}</Text>
            <Customswitch
              id={item.id}
              isEnabled={switchStates[item.id]}
              toggleSwitch={toggleSwitch}
            />
          </View>
        );
      })}
      <View style={styles.buttonbox}>
        <CustomButton
          bg={'white'}
          title={'Discard'}
          color={'#000000'}
          onPress={() => setShowModal(false)}
        />
        <CustomButton
          bg={'#E2363D'}
          title={'Continue'}
          color={'white'}
          onPress={handleNavigate}
        />
      </View>
    </View>
  );
};

export default CustomModal;

const Customswitch = ({toggleSwitch, isEnabled, id}) => {
  return (
    <Pressable
      style={[isEnabled ? styles.track : styles.trackDisabled]}
      onPress={() => toggleSwitch(id)}>
      <View style={[styles.thumb, {left: isEnabled ? '60%' : null}]}></View>
    </Pressable>
  );
};

function CustomButton({title, bg, color, onPress}) {
  return (
    <TouchableOpacity
      style={{
        width: width * 0.2,
        height: height * 0.035,
        // borderWidth: 1,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: bg,
      }}
      onPress={onPress}>
      <Text style={{fontSize: 12, fontWeight: '500', color: color}}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  headertext: {
    flexDirection: 'row',
    alignItems: 'center',
    // borderWidth: 1,
    alignSelf: 'center',
    // padding: 10,
  },
  text: {
    marginLeft: 10,
    color: '#fff',
    fontSize: 16,
    fontFamily: 'WorkSans',
  },
  privacy: {
    flexDirection: 'row',

    marginVertical: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  title: {
    color: 'black',
    fontSize: 11,
    fontFamily: 'WorkSans',
    width: '75%',
  },
  trackDisabled: {
    width: 50,
    height: 20,
    borderRadius: 15,
    borderWidth: 0.5,
    borderColor: '#FFFFFF',
    justifyContent: 'center',
    paddingHorizontal: 2,
  },
  track: {
    width: 50,
    height: 20,
    borderRadius: 15,
    backgroundColor: '#34C759',
    // borderWidth: 0.5,
    // borderColor: '#FFFFFF',
    justifyContent: 'center',
    paddingHorizontal: 2,
  },
  thumb: {
    width: 15,
    height: 15,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  buttonbox: {
    // borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: height * 0.015,
    paddingHorizontal: 10,
  },
});
